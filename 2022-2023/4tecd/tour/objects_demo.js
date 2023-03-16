const x = 10;

const switchName = "Cisco";
const switchPorts = 19;

// Objet litéral
const networkSwitch = {
  brand: "cisco",
  portCount: 16,
  openPort(portNumber) {
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

class NetworkSwitch {
  printInformation() {
    console.log(this.brand, this.portCount);
  }
  openPort(portNumber) {
    console.log("port open", portNumber);
  }
}

const switch1 = new NetworkSwitch();
switch1.brand = "dlink";
switch1.portCount = 3;
switch1.openPort(5);
switch1.printInformation();

const switch2 = new NetworkSwitch();
switch2.printInformation();

function isEven(x) {
  return x % 2 === 0;
}
