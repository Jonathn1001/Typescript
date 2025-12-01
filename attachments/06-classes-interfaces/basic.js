var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.greet = function () {
        console.log("Hello ", this.age);
    };
    return User;
}());
var sang = new User("Sang", 25);
sang.greet();
