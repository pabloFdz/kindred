class Drink {
    constructor(type = DRINK_TYPE_BEER) {
        this._type = type;
      }
    get type() {
        return this._type
    }
}