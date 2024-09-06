import { atom, selector, useSetRecoilState, useRecoilValue } from "recoil";

const API_BASE_URL = "http://localhost:3000";

const emailPassState = atom({
  key: "email-pass",
  default: { email: "", password: "" },
});

const logInState = selector({
  key: "log-in-state",
  get: async ({ get }) => {
    const emailPassValues = get(emailPassState);

    const response = await fetch(API_BASE_URL + "/log-in", {
      headers: {
        "content-type": "application/json",
        authorization:
          "Bearer " + emailPassValues.email + " " + emailPassValues.password,
      },
    });
    const json = await response.json();
    return json.profile;
  },
});

export { emailPassState, logInState };
