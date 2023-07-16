import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";
import { styled } from "styled-components";

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  margin-top: 12px;
  padding: 0 10px;
  padding-bottom: 3px;
  font-size: 14px;
  background-color: #ea5f5f;
  border: none;
  border-radius: 3px;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #ea5f5f;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 auto;
  margin-top: 50px;
`;

const Label = styled.label`
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
`;

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username:
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email:
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password:
        <Input type="password" name="password" />
      </Label>
      <Btn type="submit">Register</Btn>
    </Form>
  );
};

export default RegisterForm;
