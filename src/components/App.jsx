import { useState } from "react";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";
import User from "./User.jsx";
import "../styles/index.css";

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
    <div className="app-container">
      {user ? (
        <User username={user} onLogout={handleLogout} />
      ) : loggedOut ? (
        <Logout onLogout={() => setLoggedOut(false)} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
