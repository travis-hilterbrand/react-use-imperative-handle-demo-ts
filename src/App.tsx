import React from "react";

import "./App.css";
import Countdown, { CountdownActionRef, CountdownRef } from "./Countdown";

function App() {
  const actionRef = React.useRef<CountdownActionRef>(null);
  const countdownRef = React.useRef<CountdownRef>(null);
  const handleAlertClick = () => {
    actionRef.current?.triggerAlert();
  };
  const handleFocusClick = () => {
    if (countdownRef.current) {
      const input = countdownRef.current.querySelector<HTMLInputElement>(
        "input"
      );
      if (input) {
        input.focus();
      }
    }
  };

  return (
    <div className="App">
      <Countdown ref={countdownRef} action={actionRef} label={"Countdown"} />
      <div>
        <button onClick={handleAlertClick}>Alert</button>
      </div>
      <div>
        <button onClick={handleFocusClick}>Focus</button>
      </div>
    </div>
  );
}

export default App;
