import { Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import OpenAI from "openai";

const Index = () => {
  const [response, setResponse] = useState("");

  const generatePrompt = async () => {
    try {
      const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      });
      const result = await openai.completions.create({
        model: "text-davinci-003",
        prompt: "Generate a prompt template for an AI model.",
        max_tokens: 100,
      });
      setResponse(result.choices[0].text);
    } catch (error) {
      console.error("Error generating prompt:", error);
    }
  };

  return (
    <div>
      <Button onClick={generatePrompt}>
        Generate Prompt <FaPlus />
      </Button>
      <div>{response}</div>
    </div>
  );
};

export default Index;