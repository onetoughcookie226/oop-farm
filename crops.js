// crops.js
// add to crops.js



class Crop {
    constructor(acres) {
      this.acres = acres
    }
    getYieldInEuros() {
       return this.price * this.getYieldInKg() 
    //    getYieldInEuros() * 1.5
    }
    getCosts() {
        return this.costs * this.acres
    }
  }
  

class Wheat extends Crop {
    constructor(...args) {
        super(...args)
        this.price = 1.5
        this.costs = 340
      }
 
    getYieldInKg() {
      return Math.pow(this.acres * 1.5, 1.3)
    }
  }
 

class Sugarcane extends Crop {
    constructor(...args) {
        super(...args)
        this.price = 2
        this.costs = 166 
      }
 
   
    getYieldInKg() {
      return Math.pow(this.acres * 2.6, 1.1)
    }
  }

module.exports = {Wheat, Crop, Sugarcane}
//   module.exports.wheat = 'Wheat'
//   module.exports.sugarcane = 'Sugarcane'

