import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <Button onClick={() => loginWithRedirect()}>Log In</Button>
    )
  );
};

export default LoginButton;

const Button = styled.button`
  color: var(--white);
  font-weight: bold;
`;
