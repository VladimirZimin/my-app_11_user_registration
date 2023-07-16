import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks/useAuth";
import React from "react";
import { styled } from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
`;

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Nav>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Nav>
    </header>
  );
};

export default AppBar;
