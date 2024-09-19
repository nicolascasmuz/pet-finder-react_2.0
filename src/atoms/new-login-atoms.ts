import { atom, selector, useSetRecoilState } from "recoil";
const API_BASE_URL = "http://localhost:3000";
import { dataAtom } from "./data-atom";

const authAtom = atom({
  key: "authAtom",
  default: {
    email: "",
    password: "",
  },
});

const authSelector = selector({
  key: "authSelector",
  get: async ({ get }) => {
    const emailPassValues = get(authAtom);
    console.log("authSelector: ", emailPassValues);
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
