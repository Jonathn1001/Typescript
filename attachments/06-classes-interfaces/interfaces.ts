interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: "admin" | "moderator";
}
class AuthenticatableUser implements Authenticatable {
  constructor(public email: string, public password: string) {}

  login(): void {}

  logout(): void {}
}

let user: Authenticatable;
