import "./chatbotintegration.css";
import { useState } from "react";

function ChatbotIntegration() {
  const [showInstructions, setShowInstructions] = useState(false);
  return (
    <div>
      <div
        className="company-logo"
        style={{ marginTop: "5px", marginBottom: "10px" }}
      >
        <h1>BeyondChats</h1>
        <p>A ChatBot Company</p>
      </div>
      <div className="integration-main-container">
        <div className="integration-section">
          <a
            href={window.location.origin + "/BeyondChatsAssignment/client-website-test"}
            target="_blank"
            rel="noreferrer"
          >
            <button className="integration-main-btn">Test Chatbot</button>
          </a>
        </div>
        <div className="integration-section">
          <button
            className="integration-main-btn"
            onClick={() => setShowInstructions(true)}
          >
            Integrate on your website
          </button>
        </div>
        <div className="integration-section">
          <a
            href={window.location.origin + "/BeyondChatsAssignment/chatbot-integration-result"}
            target="_blank"
            rel="noreferrer"
          >
            <button className="integration-main-btn">Test Integration</button>
          </a>
        </div>
        {showInstructions && (
          <div className="instructions-container">
            <div>
              <h4>Copy code to {`<head>`} tag:</h4>
              <p>
                Copy the below script tag to the head tag of your website.
                <br></br>
                {`<script src="https://dummyscript/beyondchats/chatbot-integraion"></script>`}
              </p>
            </div>
            <div>
              <h4>Email Instructions</h4>
              <p>
                Enter email where you would like to get the detailed
                instructions for integrating the chatbot to your website.
              </p>
              <input type="email" placeholder="Enter your Email" />
              <button
                id="email-btn"
                onClick={() => {
                  alert("Email sent");
                  setShowInstructions(false);
                }}
              >
                Send Instructions
              </button>
            </div>
          </div>
        )}
      </div>
      {showInstructions && (
        <div
          className="overlay-div"
          onClick={() => setShowInstructions(false)}
        ></div>
      )}
    </div>
  );
}

export default ChatbotIntegration;
