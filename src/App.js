import React, { useState } from "react";
import { Button, Text } from "react-native-elements";

import "./App.css";

function App() {
  const [onSeto, setonSeto] = useState();
  function onPress() {
    const data = {
      title: "afkasd",
      url: "http://localhost:3000/",
      text: "onBase",
    };

    const shareBase = window.navigator.share;
    console.log({ data, shareBase });
    setonSeto(!onSeto);
    if (shareBase) {
      shareBase(data);
    }
    if (navigator.share) {
      navigator.share(data);
    }
  }
  const style = { background: onSeto ? "red" : "green", color: "white" };

  const textocon = {
    style,
    // h1:true
    children: "here's some text",
  };

  const resso = {
    // containerStyle: style,
    buttonStyle: style,
    onPress,
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
          <hr style={{ margin: "2% 0", width: "100%" }} />
          <Text {...textocon} />
        </header>
      </div>
    </>
  );
}

export default App;
