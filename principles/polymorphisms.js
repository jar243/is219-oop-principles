class Vehicle {

  getMaxPassengers() {
    return null
  }

}

class Car extends Vehicle {

  constructor(seats) {
    super()
    this._seats = seats
  }

  getMaxPassengers() {
    return this._seats
  }

}

class Train extends Vehicle {

  constructor(trainCars, seatsPerCar) {
    super()
    this._trainCars = trainCars
    this._seatsPerCar = seatsPerCar
  }

  getMaxPassengers() {
    return this._trainCars * this._seatsPerCar
  }

}

module.exports = {
  'Vehicle': Vehicle,
  'Car': Car,
  'Train': Train
}