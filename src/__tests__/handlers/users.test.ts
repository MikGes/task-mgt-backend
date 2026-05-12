// import app from "../../app.js";

const getUsers = (): { name: string; age: number }[] => {
  return [
    { name: "mikiyas", age: 24 },
    { name: "nati", age: 24 }
  ];
};

describe("getUsers", () => {
  it("should return an array of users", () => {
    const res = getUsers();

    expect(res).toEqual([
      { name: "mikiyas", age: 24 },
      { name: "nati", age: 24 }, 
    ]);
  });
});