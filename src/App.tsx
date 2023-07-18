import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* main div */}
      <div
        style={{
          marginLeft: "5vw",
          marginRight: "5vw",
          backgroundColor: "black",
          height: "250px",
        }}
      >
        {/* header div */}
        <div
          style={{
            color: "yellow",
            border: "2px solid white",
            height: "50px",
            paddingTop: "20px",
            fontWeight: "600",
          }}
        >
          npChatBot Site
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            color: 'white'
          }}
        >
          <div>ONE</div>
          <div>TWO</div>
        </div>
      </div>
    </div>
  );
}

export default App;
