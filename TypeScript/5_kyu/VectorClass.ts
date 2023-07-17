export class Vector {
  private listNumber: Array<number>;

  constructor(components: number[]) {
    this.listNumber = components;
  }

  private validateLength(params: Array<number>) {
    if (this.listNumber.length != params.length) {
      throw new Error("Wrong length!");
    }
  }

  public getListNumber(): Array<number> {
    return this.listNumber;
  }

  public equals(params: Vector): Boolean {
    return this.toString() === params.toString();
  }

  public toString(): String {
    return "(" + this.listNumber.toString() + ")";
  }

  public add(params: Vector): Vector {
    this.validateLength(params.getListNumber());

    let newArr: Array<number> = [];
    this.listNumber.forEach((v, i) => {
      newArr[i] = v + params.getListNumber()[i];
    });

    return new Vector(newArr);
  }

  public subtract(params: Vector): Vector {
    this.validateLength(params.getListNumber());

    let newArr: Array<number> = [];
    this.listNumber.forEach((v, i) => {
      newArr[i] = v - params.getListNumber()[i];
    });

    return new Vector(newArr);
  }

  public dot(params: Vector): number {
    this.validateLength(params.getListNumber());

    let number = 0;
    this.listNumber.forEach((v, i) => {
      number += v * params.getListNumber()[i];
    });

    return number;
  }

  public norm(): number {
    let number = 0;
    this.listNumber.forEach((v, i) => {
      number += v ** 2;
    });

    return number ** 0.5;
  }
}
