import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import OpenAI from "openai";
import { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

const App: React.FC = () => {
  useEffect(() => {
    // Set up authentication with the OpenAI API
    new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      <Route
          path="*"
          element={
            <Box p={4}>
              <Text fontSize="xl" color="red.500">
                404 - Page Not Found
              </Text>
            </Box>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
