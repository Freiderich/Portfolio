import { useEffect } from "react";
import "../styles/Navbar.css";
import Navbar from "./Navbar.jsx";
import Sections from "./Sections.jsx";

function User({ username = "Student" }) {
  useEffect(() => {
    // Load Feather icons
    const script = document.createElement("script");
    script.src = "https://unpkg.com/feather-icons";
    script.onload = () => window.feather.replace();
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Navbar username={username} />
      <Sections username={username} />
    </div>
  );
}

export default User;
