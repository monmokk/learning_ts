"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const faker = require("faker");
class Company {
    constructor() {
        this.color = 'red';
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    markerContent() {
        return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map