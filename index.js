// index.js


class Farm {
    constructor(name) {
    // Add the property name and assign a paramiter name

      this.name = name
      this.crops = []
    }
  
    addCrop(crop) {
      this.crops.push(crop)
    }

    calculateIncome() {
    return this.crops
        .map(crop => crop.getYieldInEuros())
        .reduce((a,b) => a + b, 0)
    }   

  }

  module.exports.Farm = Farm
// Adding  property
//   module.exports.Foo = Foo

// Different notaion
// module.exports = {Farm}
//moduale is an object, export is an object ,the property is Farm, the value is Farm
