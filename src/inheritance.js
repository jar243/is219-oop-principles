class Mammal {

  isAlive() {
    return true
  }

}

class Human extends Mammal {

  constructor() {
    super()
  }

  canSpeak() {
    return true
  }

}

module.exports = {
  'Mammal': Mammal,
  'Human': Human
}