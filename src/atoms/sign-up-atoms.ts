import { atom, selector, useSetRecoilState } from "recoil";
const API_BASE_URL = "http://localhost:3000";

const signinAtom = atom({
  key: "signin-atom",
  default: {
    email: "",
    password: "",
  },
});

const signinSelector = selector({
  key: "signin-selector",
  get: async ({ get }) => {
    const emailPassValues = get(signinAtom);
    console.log("signinSelector: ", {
      email: emailPassValues.email,
      password: emailPassValues.password,
    });
    if (emailPassValues.email && emailPassValues.password) {
      const response = await fetch(API_BASE_URL + "/sign-up", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: emailPassValues.email,
          password: emailPassValues.password,
        }),
      });
      const json = await response.json();
      const data = json.profile;
      console.log("data selector: ", data);
      return data;
    } else {
      return "no funciona";
    }
  },
});

export { signinAtom, signinSelector };
