"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Company_1 = require("./Company");
const CustomMap_1 = require("./CustomMap");
const user = new User_1.User();
const company = new Company_1.Company();
const customMap = new CustomMap_1.CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
//# sourceMappingURL=index.js.map