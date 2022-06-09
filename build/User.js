"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const faker = require("faker");
class User {
    constructor() {
        this.color = 'red';
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }
    markerContent() {
        return `User Name: ${this.name}`;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map