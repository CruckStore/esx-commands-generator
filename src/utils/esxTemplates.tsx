export const generateAdvancedCommand = (
  name: string,
  permission: string,
  args: { name: string; type: string; help: string }[],
  triggers: string[],
  natives: string[],
  giveItems: string[],
  giveMoney: { account: string; amount: number }[]
) => {
  let commandCode = `
ESX.RegisterCommand(
  "${name}",
  "${permission}",
  function(xPlayer, args) {
    ${args.map((arg) => `console.log("Argument: ${arg.name} - Valeur: " + args.${arg.name});`).join("\n")}
    ${giveItems.map((item) => `xPlayer.addInventoryItem("${item}", 1);`).join("\n")}
    ${giveMoney.map((money) => `xPlayer.addAccountMoney("${money.account}", ${money.amount});`).join("\n")}
    ${triggers.map((trigger) => `TriggerEvent("${trigger}");`).join("\n")}
    ${natives.map((native) => `${native};`).join("\n")}
  },
  true,
  {
    help: "Commande générée pour ${name}",
    validate: true,
    arguments: ${JSON.stringify(args)}
  }
);
`;
  return commandCode;
};
