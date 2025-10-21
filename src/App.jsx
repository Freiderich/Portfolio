import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

function App() {
  const [user, setUser] = useState(null);
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogin = (username) => {
    setUser(username);
    setLoggedOut(false);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedOut(true);
  };

  return (
    <div>
      {user ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h1>Welcome, {user}!</h1>
          <button
            onClick={handleLogout}
            className="btn block-cube block-cube-hover"
          >
            <div className="bg-top"><div className="bg-inner"></div></div>
            <div className="bg-right"><div className="bg-inner"></div></div>
            <div className="bg"><div className="bg-inner"></div></div>
            <div className="text">Logout</div>
          </button>
        </div>
      ) : loggedOut ? (
        <Logout onLogout={() => setLoggedOut(false)} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
