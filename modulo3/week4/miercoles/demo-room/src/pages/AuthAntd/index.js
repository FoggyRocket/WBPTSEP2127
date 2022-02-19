import { Form, Input, Button } from "antd";
import { useLocation,useNavigate } from "react-router-dom";
import {loginWs,signupWs} from '../../services/auth-ws'
function AuthAntd() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/loginAntd";
  //esta sintax nos va a dar un true || false

  const onFinish = (values) => {
    console.log("success", values);
    //values === credentials
    const action = isLoginPage ? loginWs : signupWs;
    action(values).then(res=>{
        if(res.status){
            navigate('/protected')
            /**
             *  if(isLoginPage){
             *    navigate('/protected')
             * }else{
             *  navigate('/signupPart2'
             * }
             */
        }
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed", errorInfo);
  };

  return (
    <Form
      //este form de antd ya tiene un state interno
      name="AuthForm"
      labelCol={{ span: 8 }} //espacio en mi formulario
      wrapperCol={{ span: 16 }} //espacio en mi formulario
      initialValues={{ perro: "Nova", psw: "Nova182$" }} //esto es de ejemplo
      onFinish={onFinish} // este evento se va ejecutar cuando demos click en submit o en boton
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Correo electronico"
        name="email" // para antd el Form.Item lleva el nombre del campo
        rules={[
          {
            required: true,
            message: "Ingresa tu Correo electronico!!!!",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {!isLoginPage && <Form.Item
        label="Confirm password"
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: "Please confirm your Password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>}

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
  );
}

export default AuthAntd;
