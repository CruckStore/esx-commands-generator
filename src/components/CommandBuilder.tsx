import React, { useState } from "react";
import CommandOptions from "./CommandOptions";
import TriggerManager from "./TriggerManager";
import NativesManager from "./NativesManager";
import InventoryManager from "./InventoryManager";
import PermissionsManager from "./PermissionsManager";
import { generateAdvancedCommand } from "../utils/esxTemplates";

const CommandBuilder: React.FC<{ onGenerate: (code: string) => void }> = ({ onGenerate }) => {
  const [commandName, setCommandName] = useState("");
  const [permission, setPermission] = useState<string[]>([]);
  const [triggers, setTriggers] = useState<string[]>([]);
  const [natives, setNatives] = useState<string[]>([]);
  const [argumentsList, setArgumentsList] = useState<{ name: string; type: string; help: string }[]>([]);
  const [giveItems, setGiveItems] = useState<string[]>([]);
  const [giveMoney, setGiveMoney] = useState<{ account: string; amount: number }[]>([]);
  
  const handleGenerate = () => {
    const command = generateAdvancedCommand(
      commandName,
      permission.join(", "),
      argumentsList,
      triggers,
      natives,
      giveItems,
      giveMoney
    );
    onGenerate(command);
  };

  return (
    <div>
      <h2>Créer une Commande ESX Avancée</h2>
      <input
        type="text"
        placeholder="Nom de la commande"
        value={commandName}
        onChange={(e) => setCommandName(e.target.value)}
      />
      <PermissionsManager selectedPermissions={permission} setPermissions={setPermission} />
      <CommandOptions argumentsList={argumentsList} setArgumentsList={setArgumentsList} />
      <InventoryManager giveItems={giveItems} setGiveItems={setGiveItems} />
      <TriggerManager triggers={triggers} setTriggers={setTriggers} />
      <NativesManager natives={natives} setNatives={setNatives} />
      <button onClick={handleGenerate}>Générer la commande</button>
    </div>
  );
};

export default CommandBuilder;
