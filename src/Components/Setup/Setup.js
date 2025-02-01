import { useState } from "react";
import "./setup.css";
import { useNavigate } from "react-router-dom";

function Setup() {
  const [showData, setShowData] = useState(false);
  const [showChunkData, setShowChunkData] = useState(false);
  const [chunkData, setChunkData] = useState([]);
  const [canContinue, setCanContinue] = useState(false);
  const [orgData, setOrgData] = useState({
    name: "",
    url: "",
    description: "",
  });

  const navigate = useNavigate();

  const webpages = [
    {
      id: 1,
      url: "https://dummyurlfortesting.com/page1",
      status: "Scraped",
      chunks: ["Dummy Data 1", "Dummy Data 2"],
    },
    {
      id: 2,
      url: "https://dummyurlfortesting.com/page2",
      status: "Pending",
      chunks: [],
    },
    {
      id: 3,
      url: "https://dummyurlfortesting.com/page3",
      status: "Scraped",
      chunks: ["Dummy Data A", "Dummy Data B"],
    },
    {
      id: 4,
      url: "https://dummyurlfortesting.com/page4",
      status: "Pending",
      chunks: [],
    },
  ];

  const setupOrganisation = () => {
    if (orgData.name.length === 0) {
      alert("Kindly enter organisation name");
      return;
    }
    if (orgData.url.length === 0) {
      alert("Kindly enter website url");
      return;
    }
    if (orgData.description.length === 0) {
      alert("Kindly enter uebsite description");
      return;
    }
    setTimeout(() => {
      setShowData(true);
      setCanContinue(true);
    }, 600);
  };

  const fetchDescription = async () => {
    try {
      if (orgData.url.length < 1) {
        alert("Please proved URL");
        return;
      }
      const response = await fetch(orgData.url);
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, "text/html");

      const metaDescription = doc.querySelector(
        'meta[name="description"]'
      ).content;
      if (metaDescription)
        setOrgData((prev) => ({ ...prev, description: metaDescription }));
      else
        setOrgData((prev) => ({
          ...prev,
          description: "No meta description found",
        }));
    } catch (error) {
      console.error("Error fetching meta description:", error);
      alert("Failed to fetch meta description (CORS Policy)");
    }
  };

  return (
    <div>
      <div
        className="company-logo"
        style={{ marginTop: "5px", marginBottom: "10px" }}
      >
        <h1>BeyondChats</h1>
        <p>A ChatBot Company</p>
      </div>
      <div className="setup-container">
        <div>
          <h2>Setup Organisation</h2>
          <div className="setup-form">
            <label>Company Name:</label>
            <input
              type="text"
              placeholder="Enter your Company Name"
              onChange={(e) =>
                setOrgData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <label>Company Website URL:</label>
            <input
              type="text"
              placeholder="Enter your Company website URL"
              onChange={(e) =>
                setOrgData((prev) => ({ ...prev, url: e.target.value }))
              }
            />
            <div style={{ marginBottom: "4px", position: "relative" }}>
              <label>Company Description:</label>
              <button id="auto-fetch-btn" onClick={fetchDescription}>
                auto-fetch
              </button>
            </div>
            <textarea
              value={orgData.description}
              type="text"
              placeholder="Enter your Company Description"
              onChange={(e) =>
                setOrgData((prev) => ({ ...prev, description: e.target.value }))
              }
            />
            <button onClick={setupOrganisation} id="setup-btn">
              Setup
            </button>
          </div>
        </div>
        {showData && (
          <div className="scrape-table">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "10%" }}>S.No.</th>
                  <th style={{ width: "50%" }}>Webpage</th>
                  <th style={{ width: "20%" }}>Status</th>
                  <th style={{ width: "20%" }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {webpages.map((webpage, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{webpage.id}</td>
                      <td>
                        <a href={webpage.url} target="_blank" rel="noreferrer">
                          {webpage.url.substring(
                            0,
                            webpage.url.length > 30 ? 30 : webpage.url.length
                          )}
                          {webpage.url.length > 30 ? "..." : ""}
                        </a>
                      </td>
                      <td>{webpage.status}</td>
                      <td>
                        <span
                          style={{cursor:'pointer'}}
                          onClick={() => {
                            setChunkData(webpage.chunks);
                            setShowChunkData(true);
                          }}
                        >
                          View Details
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {showChunkData && <div className="overlay-bg"></div>}
            {showChunkData && (
              <div className="chunk-container">
                <div
                  style={{
                    textAlign: "end",
                    paddingRight: "10px",
                    margin: "6px 0",
                  }}
                  onClick={() => {
                    setChunkData([]);
                    setShowChunkData(false);
                  }}
                >
                  <span id="close-btn" style={{cursor:'pointer'}}>Close</span>
                </div>
                <hr style={{ margin: "2px" }}></hr>
                {chunkData.length === 0 ? (
                  <p
                    style={{
                      paddingLeft: "5px",
                      fontWeight: "bold",
                      fontStyle: "oblique",
                    }}
                  >
                    Pending...
                  </p>
                ) : (
                  <ul>
                    {chunkData.map((chunk, idx) => {
                      return <li key={idx}>{chunk}</li>;
                    })}
                  </ul>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      {canContinue && (
        <div style={{ textAlign: "center" }}>
          <button
            id="continue-btn"
            onClick={() => navigate("/chatbot-integration")}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default Setup;
