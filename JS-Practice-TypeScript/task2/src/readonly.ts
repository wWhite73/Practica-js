export type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// Использование MyReadonly
export interface User {
  name: string;
  age: number;
}

export const user: MyReadonly<User> = {
  name: "Alice",
  age: 30,
};

// user.name = "Bob"; // Ошибка компиляции