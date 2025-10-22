import { useState } from "react";
import "../styles/index.css"; // make sure this imports your full CSS

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple hardcoded login for demo purposes
    if (username === "Freiderich" && password === "1234") {
      onLogin(username);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="form">
      <div className="control">
        <h1>Portfolio | Sign In</h1>
      </div>

      <div className="control block-cube block-input">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div className="bg-top"><div className="bg-inner"></div></div>
        <div className="bg-right"><div className="bg-inner"></div></div>
        <div className="bg"><div className="bg-inner"></div></div>
      </div>

      <div className="control block-cube block-input">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="bg-top"><div className="bg-inner"></div></div>
        <div className="bg-right"><div className="bg-inner"></div></div>
        <div className="bg"><div className="bg-inner"></div></div>
      </div>

      {error && <p>{error}</p>}

      <button type="submit" className="btn block-cube block-cube-hover">
        <div className="bg-top"><div className="bg-inner"></div></div>
        <div className="bg-right"><div className="bg-inner"></div></div>
        <div className="bg"><div className="bg-inner"></div></div>
        <div className="text">Log In</div>
      </button>
    </form>
  );
}

export default Login;
