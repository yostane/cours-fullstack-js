export class NetworkSwitch {
  constructor(readonly brand: string, readonly portCount: number) {}

  printInformation(): void {
    console.log(this.brand, this.portCount);
  }
  openPort(portNumber: number): void {
    console.log("port open", portNumber);
  }
}
