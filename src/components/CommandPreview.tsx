import React from "react";

interface CommandPreviewProps {
  code: string;
}

const CommandPreview: React.FC<CommandPreviewProps> = ({ code }) => (
  <div className="command-preview">
    <h3>Code généré</h3>
    <pre>{code}</pre>
    <button
      onClick={() => {
        const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "command.lua";
        link.click();
      }}
    >
      Exporter la commande
    </button>
  </div>
);

export default CommandPreview;
