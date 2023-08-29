import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  
  const onFinish = (values) => {
    const token = JSON.parse(localStorage.getItem("token"));
    login(values);
    /* ERROR. CUANDO TE REGISTRAS CORRECTAMENTE TIENES QUE DARLE OTRA VEZ PARA PODER ENTRAR */
    if (!token) {
      notification.error({
        message: "Wrong email or password",
      });
    } else {
      notification.success({
        message: "Successfully logged",
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
};
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  


  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Por favor introduce tu email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Por favor introduce tu contraseña!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
