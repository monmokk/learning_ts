class Vehicle {
  constructor(color: string) {
    
  }
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
vehicle.drive();
vehicle.honk();
