import React from "react";
import { Button } from "react-native-elements";

import "./App.css";

function App() {
  function onClick() {
    const data = {
      title: "afkasd",
      url: "http://localhost:3000/",
      text: "onBase",
    };

    const shareBase = window.navigator.share;
    console.log(data, "data");
    if (shareBase) {
      shareBase(data);
    }
  }

  const resso = {
    onClick,
    title: "here's how you click react",
  };

  return (
    <>
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")}) format('truetype');
        }

        @font-face {
          font-family: 'FontAwesome';
          src: url(${require("react-native-vector-icons/Fonts/FontAwesome.ttf")}) format('truetype');
        }
      `}</style>

      <div className="App">
        <header className="App-header">
          <Button {...resso} />
        </header>
      </div>
    </>
  );
}

export default App;
