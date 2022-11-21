import { LoginButton, LoginCard, LoginContainer, StyledInput, LoginTitle } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import client from "../../services/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const login = async () => {
    if (!token) {
      return toast.error("Ops! Api key inválida.");
    }

    setIsLoading(true);

    const { data, status } = await client.get("/status", {
      headers: {
        "x-rapidapi-key": token,
        "x-rapidapi-host": "v3.football.api-sports.io",
      },
    });

    if (status !== 200) {
      setIsLoading(false);
      return toast.error("Ops! Ocorreu um erro. Tente novamente mais tarde");
    }

    if (data.results < 1 || data.errors.length > 0) {
      setIsLoading(false);
      return toast.error("Ops! Api key inválida.");
    }

    localStorage.setItem("user_token", JSON.stringify({ token }));
    return navigate("/home");
  };

  return (
    <>
      <ToastContainer />
      <LoginContainer>
        <div>
          <LoginTitle>Football Stats</LoginTitle>
          <LoginCard>
            <StyledInput
              placeholder="Api Key"
              onChange={({ target }) => setToken(target.value)}
            ></StyledInput>
            {isLoading ? (
              <LoginButton>Carregando...</LoginButton>
            ) : (
              <LoginButton onClick={() => login()}>Login</LoginButton>
            )}
          </LoginCard>
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;
