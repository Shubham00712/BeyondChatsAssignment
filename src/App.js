import "./App.css";
import { Routes, Route } from "react-router-dom";
import Setup from "./Components/Setup/Setup";
import UserRegistration from "./Components/UserRegistration/UserRegistration";
import ChatbotIntegration from "./Components/ChatbotIntegration/ChatbotIntegration";
import ChatbotIntegrationResult from "./Components/ChatbotIntegrationResult/ChatbotIntegrationResult";
import ClientWebsiteTest from "./Components/ClientWebsiteTest/ClientWebsiteTest";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserRegistration />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/chatbot-integration" element={<ChatbotIntegration />}/>
        <Route path="/chatbot-integration-result" element={<ChatbotIntegrationResult />}/>
        <Route path="/client-website-test" element={<ClientWebsiteTest />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
