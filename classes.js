class pet {
    constructor(name) {
      this.name = name
      this.hunger = 100
      this.thirst = 100
      this.happiness = 100
      this.energy = 100
      this.toilet = 100
      this.speed = 100
    }
  
    sleep() {
      this.energy -= 40
    }
  
    drink() {
      this.thirst -= 20
    }
  
    feed() {
      this.hunger -= 20
    }
  
    fast() {
      this.speed -= 40
    }
  
    time() {
      this.thirst += 5
      this.hunger += 5
      this.energy += 5
      this.speed += 5
    }
  }
  
  export class fox extends pet {
    constructor(name) {
      super(name)
      this.foxHunt = 0
      this.foxGroom = 0
      this.foxPlay = 0
    }
  }
  
  export class panther extends pet {
    constructor(name) {
      super(name)
      this.pantherScareOff = 0
      this.pantherPlay = 0
      this.pantherChill = 0
    }
  }
  
  export class bear extends pet {
    constructor(name) {
      super(name)
      this.bearScratch = 0
      this.bearPaddle = 0
      this.bearHang = 0
    }
  }
  
  // export const add = (num1, num2) => {
  
  // }