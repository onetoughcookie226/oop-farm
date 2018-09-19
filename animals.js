
class Animal {
    constructor(age) {
        this.age = age
      }
    getValueInEuros() {
        this.getWeightInKg() * this.price
    }
  }


class Pig extends Animal {
    constructor(age) {
        super(age)
        this.price = 4
     
      }
    getWeightInKg() {
        const maxWeight = 700
        const weightAcordingToAge = this.age * 2.3
        return Math.min(weightAcordingToAge, maxWeight)
        }  
    }  


    
class Cow extends Animal {
    constructor(age) {
        super(age)
        this.price = 5
     
    }
    getWeightInKg() {
        const maxWeight = 1200
        const weightAcordingToAge = this.age * 1.5
        return Math.min(weightAcordingToAge, maxWeight)
        }  

  
    } 
    


class Horse extends Animal {
    constructor(age) {
        super(age)
        this.price = 10
    }
    getWeightInKg() {
        const maxWeight = 1000
        const weightAcordingToAge = this.age * 1.7
        return Math.min(weightAcordingToAge, maxWeight)
        }  
  

    }      
    

module.exports = {Cow, Pig, Horse}


