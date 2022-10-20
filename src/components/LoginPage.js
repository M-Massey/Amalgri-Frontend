import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Homepage from "../pages/Homepage";

const LoginPage = () => {
  const { user } = useAuth0();
  let navigate = useNavigate();


  useEffect(() => {
    const postData = async () => {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      const result = await response.json();
      if (result?.data?.acknowledged) {
        navigate("/");
      }
    };
    postData();
  }, [user]);

  return (
    <div>
      <Homepage />
    </div>
  );
};

export default LoginPage;
