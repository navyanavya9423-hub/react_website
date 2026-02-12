import React, { useState } from "react";
import "./App.css";

import HeaderBar from "./components/HeaderBar";
import TextEditor from "./components/TextEditor";
import InfoPage from "./components/InfoPage";
import Notification from "./components/Notification";
import ReviewCards from "./components/ReviewCards";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [theme, setTheme] = useState("light");
  const [notification, setNotification] = useState(null);

  const triggerNotification = (message, category) => {
    setNotification({ text: message, category: category });

    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#2c3e50";
      triggerNotification("Dark theme activated", "success");
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "#ffffff";
      triggerNotification("Light theme activated", "success");
    }
  };

  return (
    <BrowserRouter>

      <HeaderBar
        appName="SmartText Editor"
        theme={theme}
        switchTheme={switchTheme}
      />

      <Notification notification={notification} />

      <Routes>
        <Route path="/" element={<TextEditor heading="Type your content here..." />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/feedback" element={<ReviewCards />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
