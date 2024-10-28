import React, { useState } from "react";

interface PermissionsManagerProps {
  selectedPermissions?: string[];
  setPermissions?: React.Dispatch<React.SetStateAction<string[]>>;
}

const PermissionsManager: React.FC<PermissionsManagerProps> = ({
  selectedPermissions = [],
  setPermissions,
}) => {
  const [customPermission, setCustomPermission] = useState("");

  const predefinedPermissions = ["user", "admin", "superadmin"];

  const togglePermission = (permission: string) => {
    if (!setPermissions) return;

    if (selectedPermissions.includes(permission)) {
      setPermissions(selectedPermissions.filter((perm) => perm !== permission));
    } else {
      setPermissions([...selectedPermissions, permission]);
    }
  };

  const addCustomPermission = () => {
    if (customPermission.trim() && setPermissions) {
      setPermissions([...selectedPermissions, customPermission.trim()]);
      setCustomPermission("");
    }
  };

  return (
    <div className="permissions-manager">
      <h3>Configurer les Permissions</h3>

      <div>
        <h4>Permissions Prédéfinies</h4>
        {predefinedPermissions.map((perm) => (
          <div key={perm}>
            <input
              type="checkbox"
              checked={selectedPermissions.includes(perm)}
              onChange={() => togglePermission(perm)}
            />
            <label>{perm}</label>
          </div>
        ))}
      </div>

      <div>
        <h4>Ajouter une Permission Personnalisée</h4>
        <input
          type="text"
          placeholder="Nom du groupe personnalisé"
          value={customPermission}
          onChange={(e) => setCustomPermission(e.target.value)}
        />
        <button onClick={addCustomPermission}>Ajouter</button>
      </div>
    </div>
  );
};

export default PermissionsManager;
