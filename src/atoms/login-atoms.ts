import { atom, selector } from "recoil";
const API_BASE_URL = "http://localhost:3000";

const authAtom = atom({
  key: "auth-atom",
  default: {
    email: "",
    password: "",
  },
});

const authSelector = selector({
  key: "auth-selector",
  get: async ({ get }) => {
    const emailPassValues = get(authAtom);

    if (emailPassValues.email && emailPassValues.password) {
      const response = await fetch(API_BASE_URL + "/log-in", {
        headers: {
          "content-type": "application/json",
          authorization:
            "Bearer " + emailPassValues.email + " " + emailPassValues.password,
        },
      });
      const json = await response.json();
      const data = json.profile;

      return data;
    } else {
      return false;
    }
  },
});

export { authAtom, authSelector };
