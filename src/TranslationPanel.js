import React, { useState } from "react";
import "./TranslationPanel.css";

const TranslationPanel = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLanguage, setFromLanguage] = useState("en");
  const [toLanguage, setToLanguage] = useState("bn");

  const translateText = async () => {
    try {
      const apiUrl =
        toLanguage === "bn"
          ? "http://165.232.184.61:5000/english"
          : "http://165.232.184.61:5000/bangla";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: text,
        }),
      });
      const data = await response.json();
      setTranslatedText(data.result);
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="header">
        <img
          src="/images/lang_of_bd.png"
          style={{
            height: "70px",
            padding: "15px 0px 10px 40px",
          }}
        />
        <img
          src="/images/profile.png"
          style={{
            height: "70px",
            padding: "15px 40px 10px 0px",
          }}
        />
      </div>
      <div className="body">
        <div>
          <button
            style={{
              background: "#2191A4",
              borderRadius: "5px",
              borderColor: "#FFFFFF",
              height: "40px",
              width: "120px",
              color: "white",
              fontSize: "16px",
            }}
            onClick={translateText}
          >
            Translate
          </button>
        </div>
        <div className="translation-box">
          <div className="translation-box-header">
            <div className="header-box-style">
              {/* <label>Translate from:</label> */}
              <button
                className="button-style"
                onClick={() => setFromLanguage("en")}
                style={{
                  marginRight: "5px",
                  background: fromLanguage === "en" ? "#034E6F" : "none",
                  color: fromLanguage === "en" ? "white" : "#034E6F",
                }}
              >
                English
              </button>
              <button
                className="button-style"
                onClick={() => setFromLanguage("bn")}
                style={{
                  background: fromLanguage === "bn" ? "#034E6F" : "none",
                  color: fromLanguage === "bn" ? "white" : "#034E6F",
                }}
              >
                Bangla
              </button>
            </div>
            <div
              className="translation-box-middle-border"
              style={{ marginLeft: "-40px" }}
            ></div>
            <div className="header-box-style">
              {/* <label>Translate to:</label> */}
              <button
                className="button-style"
                onClick={() => setToLanguage("bn")}
                style={{
                  marginRight: "5px",
                  background: toLanguage === "bn" ? "#034E6F" : "none",
                  color: toLanguage === "bn" ? "white" : "#034E6F",
                }}
              >
                Bangla
              </button>
              <button
                className="button-style"
                onClick={() => setToLanguage("en")}
                style={{
                  background: toLanguage === "en" ? "#034E6F" : "none",
                  color: toLanguage === "en" ? "white" : "#034E6F",
                }}
              >
                English
              </button>
            </div>
          </div>
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',

          }}>
          <div
            style={{
              display: "flex",
              width: "50%",
              height: "100%",
            }}
          >
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to translate"
              // rows={4}
              // cols={50}
              style={{
                height: "calc(100% - 140px)",
                width: "100%",
                border: "none",
                padding: "20px",
                overflow: "auto",
              }}
            />
            
          </div>
          <div
              className="translation-box-middle-border"
              style={{ height: "347px" }}
            ></div>
          <div
            style={{
              height: "calc(100% - 140px)",
              width: "50%",
              border: "none",
              padding: "20px",
              overflow: "auto",
              display: 'flex',

            }}
          >
            {translatedText}
          </div>
          </div>
        </div>

        {/* <div>
          <label>Translate from:</label>
          <select
            value={fromLanguage}
            onChange={(e) => setFromLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="bn">Bangla</option>
          </select>
        </div>
        <div>
          <label>Translate to:</label>
          <select
            value={toLanguage}
            onChange={(e) => setToLanguage(e.target.value)}
          >
            <option value="bn">Bangla</option>
            <option value="en">English</option>
          </select>
        </div> */}

        {/* <button onClick={translateText}>Translate</button> */}
      </div>
    </div>
  );
};

export default TranslationPanel;
