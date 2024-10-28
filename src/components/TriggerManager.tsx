import React from "react";

interface TriggerManagerProps {
  triggers: string[];
  setTriggers: React.Dispatch<React.SetStateAction<string[]>>;
}

const TriggerManager: React.FC<TriggerManagerProps> = ({ triggers, setTriggers }) => {
  const addTrigger = () => {
    setTriggers([...triggers, ""]);
  };

  const updateTrigger = (index: number, value: string) => {
    const newTriggers = [...triggers];
    newTriggers[index] = value;
    setTriggers(newTriggers);
  };

  return (
    <div>
      <h3>Ajouter des Triggers</h3>
      {triggers.map((trigger, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Nom du Trigger"
            value={trigger}
            onChange={(e) => updateTrigger(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={addTrigger}>Ajouter un Trigger</button>
    </div>
  );
};

export default TriggerManager;
