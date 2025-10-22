import '../styles/Logout.css';

function Logout({ onLogout }) {
  return (
    <div className="outer-cube">
      <div className="outer-bg-top"><div className="outer-bg-inner"></div></div>
      <div className="outer-bg-right"><div className="outer-bg-inner"></div></div>
      <div className="outer-bg"><div className="outer-bg-inner"></div></div>

      <div className="logout-box">
        <h1>You have been logged out.</h1>
        <p>Thank you for using the Portfolio.</p>

        <button
          className="block-cube block-cube-hover btn-cube"
          onClick={onLogout}
        >
          <div className="bg-top"><div className="bg-inner"></div></div>
          <div className="bg-right"><div className="bg-inner"></div></div>
          <div className="bg"><div className="bg-inner"></div></div>
          <div className="text">Log In Again</div>
        </button>
      </div>
    </div>
  );
}

export default Logout;
