const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    },
};
// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40,
//   summary(): string {
//     return `My drink has ${this.sugar} grams of sugar`;
//   },
// };
const printSummary = (item) => {
    console.log(item.summary());
};
printSummary(oldCivic);
// printSummary(drink);
//
//# sourceMappingURL=interfaces.js.map