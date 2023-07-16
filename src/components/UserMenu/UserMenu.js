import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { logOut } from "redux/auth/operations";
import { styled } from "styled-components";

const UserName = styled.p`
  padding: 15px;
`;

const LogOutBtn = styled.button`
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

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <UserName>| Welcome, {user.name} |</UserName>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogOutBtn>
    </>
  );
};
