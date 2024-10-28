import React from "react";

interface InventoryManagerProps {
  giveItems: string[];
  setGiveItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const InventoryManager: React.FC<InventoryManagerProps> = ({ giveItems, setGiveItems }) => {
  const addItem = () => {
    setGiveItems([...giveItems, ""]);
  };

  const updateItem = (index: number, value: string) => {
    const newItems = [...giveItems];
    newItems[index] = value;
    setGiveItems(newItems);
  };

  return (
    <div>
      <h3>Ajouter des Objets à Donner</h3>
      {giveItems.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Nom de l'objet"
            value={item}
            onChange={(e) => updateItem(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={addItem}>Ajouter un Objet</button>
    </div>
  );
};

export default InventoryManager;
