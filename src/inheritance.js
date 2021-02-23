class Mammal {

  isAlive() {
    return true
  }

}

class Human extends Mammal {

  canSpeak() {
    return true
  }

}

module.exports = {
  'Mammal': Mammal,
  'Human': Human
}