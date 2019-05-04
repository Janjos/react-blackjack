export class Card {
  constructor (id, image, value) {
    this.id = id
    this.image = image
    this.value = value
  }

  get image () {
    return this.image
  }

  get value () {
    return this.value
  }

  setValue (value) {
    this.value = value
  }
}
