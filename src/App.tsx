import React, { useState } from "react";
import "./assets/styles/App.css";
import CommandBuilder from "./components/CommandBuilder";
import CommandPreview from "./components/CommandPreview";
import HelpSection from "./components/HelpSection";

const App: React.FC = () => {
  const [generatedCommand, setGeneratedCommand] = useState<string>("");

  const handleGenerateCommand = (code: string) => {
    setGeneratedCommand(code);
  };

  return (
    <div className="App">
      <h1>ESX Commands Generator</h1>
      <HelpSection />
      <CommandBuilder onGenerate={handleGenerateCommand} />
      {generatedCommand && <CommandPreview code={generatedCommand} />}
    </div>
  );
};

export default App;
