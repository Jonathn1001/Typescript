// const appUser = {
//   name: 'Max',
//   age: 35,
//   permissions: [{ id: 'p1', title: 'Admin', description: 'Admin access' }],
// };

// type AppUser = typeof appUser;

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};

type Perms = ["permissions"]; // access the type "permissions" which is array of "permission" object type.
type Perm = Perms[number]; // access to the single nested type "permission", nested object

type Names = string[];
type Name = Names[number];
