import authReducer from "../../reducers/auth";

test("should setup default state", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});

test("should login and setup uid", () => {
  const action = {
    type: "LOGIN",
    uid: "jdjdjdjd",
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should logout and remove uid", () => {
  const action = {
    type: "LOGOUT",
  };
  const state = authReducer({ uid: "jdjdjdjd" }, action);
  expect(state).toEqual({});
});
