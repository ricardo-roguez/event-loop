export class MySuperClass<T> {
    private _data!: T;
  
    setData(value: T) {
      this._data = value;
    }
  
    checkValue(): boolean {
      return this._data === undefined || this._data === null;
    }
  
    logValue(): void {
      console.log('El valor es:', this._data);
    }
}
  