import { useState } from "react";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => setUser(username);
  const handleLogout = () => setUser(null);

  return (
    <div>
      {user ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h1>Welcome, {user}!</h1>
          <button onClick={handleLogout} className="btn block-cube block-cube-hover">
            <div className="bg-top"><div className="bg-inner"></div></div>
            <div className="bg-right"><div className="bg-inner"></div></div>
            <div className="bg"><div className="bg-inner"></div></div>
            <div className="text">Logout</div>
          </button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
