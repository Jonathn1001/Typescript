class User {
  hobbies: string[] = []; // default public
  constructor(public name: string, public age: number) {}

  greet() {
    console.log("Hello ", this.name);
  }
}

const sang = new User("Sang", 25);
sang.greet();
