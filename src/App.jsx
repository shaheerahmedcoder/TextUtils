import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  let [text, setText] = useState("");

  function UpperCase(e) {
    e.preventDefault();
    setText(text.toUpperCase());
  }

  function LowerCase(e) {
    e.preventDefault();
    setText(text.toLowerCase());
  }

  function RemoveSpaces(e) {
    e.preventDefault();
    setText(text.replace(/\s+/g, "").trim());
  }

  function WordCount(word) {
    const value = word.split(" ");
    value.filter((res) => {
      return res !== " ";
    });
    return value.length;
  }

  function clearText(e) {
    e.preventDefault();
    setText("");
  }

  function CopyText(e) {
    e.preventDefault();
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Text copied to clipboard!"))
      .catch((err) => console.error("Error copying text:", err));
  }

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "45vh",
          padding: "20px",
        }}
      >
        <form
          style={{
            textAlign: "center",
            padding: "30px",
            marginTop:"100px",
            borderRadius: "12px",
            width: "700px",
            backgroundColor: "grey",
            // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ marginBottom: "15px", fontSize: "22px", color: "#333" }}>
            Enter Text to Analyze further
          </h2>
          <textarea
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text here..."
            style={{
              width: "100%",
              height: "100px",
              padding: "12px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              resize: "none",
              transition: "0.3s",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <button onClick={UpperCase} style={buttonStyle}>
              Uppercase
            </button>
            <button onClick={LowerCase} style={buttonStyle}>
              Lowercase
            </button>
            <button onClick={RemoveSpaces} style={buttonStyle}>
              Remove Spaces
            </button>
            <button onClick={clearText} style={clearButtonStyle}>
              Clear Text
            </button>
            <button onClick={CopyText} style={copyButtonStyle}>
              Copy Text
            </button>
          </div>
        </form>
      </div>

      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h3 style={{ fontSize: "20px", color: "#555" }}>Your Text Summary</h3>
        <h4 style={{ fontSize: "18px", color: "#333" }}>
          Text Length: <strong>{text.length}</strong>
        </h4>
        <h4 style={{ fontSize: "18px", color: "#333" }}>
          Words Count: <strong>{text ? WordCount(text) : 0}</strong>
        </h4>
      </div>
    </>
  );
}

export default App;

const buttonStyle = {
  padding: "10px 15px",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "yellow",
  color: "black",
  transition: "0.3s",
  fontWeight: "bold",
  minWidth: "120px",
};

const clearButtonStyle = {
  ...buttonStyle,
  backgroundColor: "red",
  color:"black",
};

const copyButtonStyle = {
  ...buttonStyle,
  backgroundColor: "blue",
  color:"black"
};
