import { Button } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import openai from "openai";

const Index = () => {
  const [response, setResponse] = useState("");

  const generatePrompt = async () => {
    try {
      const result = await openai.Completion.create({
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