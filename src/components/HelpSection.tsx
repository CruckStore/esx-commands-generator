import React from "react";

const HelpSection: React.FC = () => {
  return (
    <div className="help-section">
      <h2>Aide et Documentation</h2>
      <p>Bienvenue dans le générateur de commandes ESX. Voici comment utiliser l'outil :</p>
      <ul>
        <li>
          <strong>Nom de la Commande :</strong> Entrez le nom de la commande que vous souhaitez créer. Exemple : <code>setjob</code>
        </li>
        <li>
          <strong>Permissions :</strong> Choisissez le niveau de permission nécessaire pour exécuter la commande. Vous pouvez sélectionner des groupes prédéfinis ou ajouter des groupes personnalisés.
        </li>
        <li>
          <strong>Arguments :</strong> Ajoutez des arguments pour la commande. Exemple : <code>playerId, job, grade</code>
        </li>
        <li>
          <strong>Triggers et Natives :</strong> Ajoutez des actions comme des triggers FiveM ou des natives pour personnaliser les fonctionnalités.
        </li>
        <li>
          <strong>Exportation :</strong> Une fois la commande prête, cliquez sur <code>Générer</code> puis <code>Exporter</code> pour télécharger le fichier Lua.
        </li>
      </ul>
    </div>
  );
};

export default HelpSection;
