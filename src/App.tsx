import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import openai from "openai";
import { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    // Set up authentication with the OpenAI API
    openai.apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
};

export default App;
