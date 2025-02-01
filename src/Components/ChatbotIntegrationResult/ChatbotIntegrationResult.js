import "./chatbotintegrationresult.css";
import success from "../../assets/checked.png";
import fail from "../../assets/cancel.png";

function ChatbotIntegrationResult() {
  const random = Math.random();
  return (
    <div className="result-main-container">
      {random > 0.3 && (
        <div
          className="result-card"
          style={{ border: "1px solid green", boxShadow: "2px 2px 5px green" }}
        >
          <img src={success} alt="success" />
          <h3 style={{ color: "green" }}>Success!</h3>
          <hr></hr>
          <p>Chatbot has been integrated succesfully to your website!!</p>
        </div>
      )}
      {random <= 0.3 && (
        <div
          className="result-card"
          style={{ border: "1px solid red", boxShadow: "2px 2px 5px red" }}
        >
          <img src={fail} alt="fail" />
          <h3 style={{ color: "red" }}>Fail!</h3>
          <hr></hr>
          <p>The chatbot integration with your website was unsuccessful!!</p>
        </div>
      )}
    </div>
  );
}

export default ChatbotIntegrationResult;
