import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate=useNavigate();
  return (
    <div style={{ margin: "auto", width: "60vw", textAlign: "center" }}>
      <h2 style={{ marginTop: "15vh" }}>Oops! Site not found!</h2>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007eff",
          color: "white",
        }}
        onClick={()=>navigate('/')}
      >
        Go to Home
      </button>
    </div>
  );
}

export default NotFound;
