var Person = /** @class */ (function () {
    function Person() {
        //   constructor(private fisrtName: string, private lastName: string) {}
        this._firstName = "";
        this._lastName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        set: function (name) {
            if (name.trim() === "") {
                throw new Error("Invalid first name.");
            }
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        set: function (name) {
            if (name.trim() === "") {
                throw new Error("Invalid last name.");
            }
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this._firstName + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Person.greet = function () {
        console.log("Hello");
    };
    return Person;
}());
var elgnas = new Person();
elgnas.firstName = "Sang";
elgnas.lastName = "El";
console.log(elgnas.fullName);
Person.greet();
