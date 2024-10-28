import React from "react";

interface CommandOptionsProps {
  argumentsList: { name: string; type: string; help: string }[];
  setArgumentsList: React.Dispatch<React.SetStateAction<{ name: string; type: string; help: string }[]>>;
}

const CommandOptions: React.FC<CommandOptionsProps> = ({ argumentsList, setArgumentsList }) => {
  const addArgument = () => {
    setArgumentsList([...argumentsList, { name: "", type: "string", help: "" }]);
  };

  const updateArgument = (index: number, key: "name" | "type" | "help", value: string) => {
    const newArgs = [...argumentsList];
    newArgs[index][key] = value;
    setArgumentsList(newArgs);
  };

  return (
    <div>
      <h3>Configurer les Arguments</h3>
      {argumentsList.map((arg, index) => (
        <div key={index} className="arg-row">
          <input
            type="text"
            placeholder="Nom de l'argument"
            value={arg.name}
            onChange={(e) => updateArgument(index, "name", e.target.value)}
          />
          <select
            value={arg.type}
            onChange={(e) => updateArgument(index, "type", e.target.value)}
          >
            <option value="string">String</option>
            <option value="number">Number</option>
            <option value="player">Player</option>
            <option value="coordinate">Coordinate</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            value={arg.help}
            onChange={(e) => updateArgument(index, "help", e.target.value)}
          />
        </div>
      ))}
      <button onClick={addArgument}>Ajouter un argument</button>
    </div>
  );
};

export default CommandOptions;
