export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](form) {
    if (form === 'number') return this._size;
    if (form === 'string') return this._location;
    return this;
  }
}
