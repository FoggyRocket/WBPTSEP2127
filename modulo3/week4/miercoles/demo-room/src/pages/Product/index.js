import { Table, Layout,Form,Input,Button,Upload,message } from "antd";
import { createProduct, getProducts } from "../../services/products-ws";
import { useState, useEffect } from "react";
import { uploadWs } from '../../services/upload-ws';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';

function Product() {
  //crear un hook de state para poder manipular la información
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([])
  const { Header, Content, Footer } = Layout;
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Stock", dataIndex: "stock", key: "stock" },
  ];
  //este hook es de prueba para mis imagenes
  const [urls,setUrls] = useState([])

  const uploadFiles = (e) =>{
    //para un input de imagen se utiliza e.targer.file || e.target.files
    const {value,name, files} = e.target
    console.log("que es el E¿¿¿??",files)
    setUrls(files)
  }
  const onSubmitImage = async () => {
    try{
        const dataUpload = { docs: urls } //mandar la llave que esta esperando mi middelware en backend (docs)
        //2) no podemos mandar un JSON al subir una imagen debe ser un multipartForm

        //3) convertir el dataUpload(Object) a un formato multipart!!!

        const formData = new FormData();

        //for in para iterar en un {} cuando nuestro objeto tiene muchas llaves y una imagen o un archivo
        for(let key in dataUpload){
                        //docs  [{},{}]
          if(key === "docs"){// multiples imagenes
            for(let file of Array.from(dataUpload[key])){
              formData.append(key,file)
            }
          }else{
            formData.append(key,dataUpload[key])
          }
        }
        /*
          formData.append("docs",urls)
        [
          ["perrro","Nova"]
          ["lastName","Torres"]
          ["docs",[["..","..."],["...","...."],["key","value"]]]
        ]
        */
        console.log("formDataaaaa",formData)
        //
        const {data,status,errorMessage} =  await uploadWs(formData)
        if(status){
          console.log("result",data)
        }else{
          console.log("Error",errorMessage)
        }
    }catch(error){
      console.log("Error",error)
    }
  }

  //en prueba endpoint upload
  //creamos una funcion para traer todos los productos cuando la pagina este cargan
  const initData = () => {
    getProducts().then((res) => {
      if (res.status) {
        console.log("products", res.data.result);
        //[{}{}] agragalos a product // setProducts([{},{}])
        setProducts(res.data.result);
      } else {
        console.log("error", res.errorMessage);
      }
    });
  };

  //function form
  const onFinish = (values) => {
    console.log("success", {...values,images});
    //values === credentials
    createProduct({...values,images}).then(res=>{
        if(res.status){
            console.log("que es la data",res.data)
            setProducts([...products,res.data.result])
        }else{
            console.log("que es la data",res.errorMessage)

        }
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed", errorInfo);
  };

  //Necesito que se obtener los productos cuando mi pagina comienze a cargarse!!!
  //useEffect ciclo de vida
  //[] si el array esta vacio solo se ejecuta una vez!
  //[variable] se volvera a ejecutar siempre y cuando el valor de variable cambie (chismoso)
  /**
   *  ()=>{
   *     return ()=>{
   *        que habra una accion al momento de que el comente deje de existir
   *   }
   * }
   */

  const handleChangeImage = async(info) =>{
    const {files} = info.target
    const dataObject = {docs:files}
    try{

        const formData = new FormData();
        for(let key in dataObject){
          if(key === "docs"){// multiples imagenes
            for(let file of Array.from(dataObject[key])){
              formData.append(key,file)
            }
          }else{
            formData.append(key,dataObject[key])
          }
        }
        const {data,status,errorMessage} =  await uploadWs(formData)
        if(status){
          console.log("result",data)
          setImages(data.result)
        }else{
          console.log("Error",errorMessage)
        }
    }catch(error){
      console.log("Error",error)
    }

  }
  useEffect(() => {
    initData();
  }, []);
  const props = {
    name: 'doc',
    action: 'http://localhost:5005/api/upload/single',
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Layout>
      <Header>Productos</Header>
      <Content>
        <Table
          //products = [{...},{...}]
          dataSource={products}
          columns={columns}
        />

        <Form
          //este form de antd ya tiene un state interno
          name="productForm"
          labelCol={{ span: 8 }} //espacio en mi formulario
          wrapperCol={{ span: 16 }} //espacio en mi formulario
          initialValues={{ perro: "Nova", psw: "Nova182$" }} //esto es de ejemplo
          onFinish={onFinish} // este evento se va ejecutar cuando demos click en submit o en boton
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="title"
            name="title" 
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="description"
            name="description" 
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="price"
            name="price" 
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="stock"
            name="stock" 
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
          <input 
            name="docs" 
            type="file" 
            multiple 
            onChange={handleChangeImage}
            />
            {/* <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload> */}
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        {/* esto es un demo */}
        {/* <div>
          <input 
            name="docs" 
            type="file" 
            multiple 
            onChange={uploadFiles}
            />

            <Button type="primary" onClick={onSubmitImage}>
              Enviar Imagenes
            </Button>
        </div> */}
      </Content>
    </Layout>
  );
}

export default Product;
