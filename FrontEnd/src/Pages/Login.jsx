import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import "../Pages/Styles/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onLogin = () => {
    if (username === "Finalproject" && password === "skanusvanduo") {
      navigate("/requests");
    } else {
      setError("Neteisingas prisijungimo vardas arba slaptažodis");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Prisijungimas</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          placeholder="Vartotojo vardas"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Slaptažodis"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={onLogin}>Prisijungti</button>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Login;
