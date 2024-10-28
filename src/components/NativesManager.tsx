import React from "react";

interface NativesManagerProps {
  natives: string[];
  setNatives: React.Dispatch<React.SetStateAction<string[]>>;
}

const NativesManager: React.FC<NativesManagerProps> = ({ natives, setNatives }) => {
  const addNative = () => {
    setNatives([...natives, ""]);
  };

  const updateNative = (index: number, value: string) => {
    const newNatives = [...natives];
    newNatives[index] = value;
    setNatives(newNatives);
  };

  return (
    <div>
      <h3>Ajouter des Natives FiveM</h3>
      {natives.map((native, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Native"
            value={native}
            onChange={(e) => updateNative(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={addNative}>Ajouter un Native</button>
    </div>
  );
};

export default NativesManager;
