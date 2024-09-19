import { atom, selector, useSetRecoilState } from "recoil";
const API_BASE_URL = "http://localhost:3000";
import { dataAtom } from "./data-atom";

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
    const emailValue = get(signinAtom)["email"];
    const passValue = get(signinAtom)["password"];
    console.log("signinSelector: ", { emailValue, passValue });
    if (emailValue && passValue) {
      const response = await fetch(API_BASE_URL + "/sign-up", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ emailValue, passValue }),
      });
      const json = await response.json();
      const data = json.profile;
      if (data.createdUser == true) {
        data.newUser = true;
      } else if (data.createdUser == false) {
        data.newUser = false;
      }
      return data;
    } else {
      return false;
    }
  },
});

export { signinAtom, signinSelector };
