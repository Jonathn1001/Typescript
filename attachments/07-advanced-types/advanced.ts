type DataStorage = {
  [prop: string]: string | number; // placeholder for dynamic properties - as Record<string, string>
};

let someObj: Record<string, boolean | number> = {};
someObj.isCorrect = false;

const store: DataStorage = {};

store.id = "xyz-123";
store.name = "My Data Store";
store.zipCode = 70000;

let roles = ["admin", "editor", "guest"] as const;
const firstRole = roles[0];

const dataEntries = {
  entry1: 0.1,
  entry2: 0.3,
} satisfies Record<string, number>;
