// Helper functions that might be useful throughout the app.

export const isValidCommandName = (name: string) => {
    return /^[a-zA-Z0-9_]+$/.test(name);
  };
  
  export const formatArgs = (args: { name: string; type: string; help: string }[]) => {
    return args.map(arg => ({
      name: arg.name,
      type: arg.type,
      help: arg.help,
    }));
  };
  
  export const formatPermissions = (permissions: string[]) => {
    return permissions.join(", ");
  };
  