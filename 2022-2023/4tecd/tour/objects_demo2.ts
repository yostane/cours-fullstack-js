import { NetworkSwitch } from "./NetworkSwitch";

// const NetworkSwitch = require("./NetworkSwitch");

const x = 10;

const switchName = "Cisco";
const switchPorts = 19;

// Objet litéral
const networkSwitch = {
  brand: "cisco",
  portCount: 16,
  openPort(portNumber: number): void {
    console.log("port open", portNumber);
  },
};
networkSwitch.openPort(4);

/* en JSON: JavaScipt Object Notation
{
  "brand": "cisco",
  "portCount": 16,
}
*/

const switch1 = new NetworkSwitch("dlink", 3);
switch1.openPort(5);
switch1.printInformation();
console.log(switch1.brand);

const switch2 = new NetworkSwitch("cisco", 12);
switch2.printInformation();

function isEven(x: number): boolean {
  return x % 2 === 0;
}
