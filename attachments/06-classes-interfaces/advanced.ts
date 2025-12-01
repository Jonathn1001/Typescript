class Person {
  //   constructor(private fisrtName: string, private lastName: string) {}
  private _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid first name.");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid last name.");
    }
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + this._lastName;
  }

  static greet() {
    console.log("Hello");
  }
}

const elgnas = new Person();
elgnas.firstName = "Sang";
elgnas.lastName = "El";
console.log(elgnas.fullName);
Person.greet();

class Employee extends Person {
  constructor(public jobTitle: string) {
    super();
  }

  work() {}
}

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {}
}

class SidebarElement extends UIElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }

  //..
}
