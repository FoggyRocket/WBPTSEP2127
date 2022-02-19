import { Table, Layout,Form,Input,Button } from "antd";
import { createProduct, getProducts } from "../../services/products-ws";
import { useState, useEffect } from "react";
function Product() {
  //crear un hook de state para poder manipular la información
  const [products, setProducts] = useState([]);
  const { Header, Content, Footer } = Layout;
  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Stock", dataIndex: "stock", key: "stock" },
  ];
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
    console.log("success", values);
    //values === credentials
    createProduct(values).then(res=>{
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
  useEffect(() => {
    initData();
  }, []);
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
}

export default Product;
