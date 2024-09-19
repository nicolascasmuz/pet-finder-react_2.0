import { atom, selector } from "recoil";
import { dataAtom } from "./data-atom";
const API_BASE_URL = "http://localhost:3000";

const profileSelector = selector({
  key: "profileSelector",
  get: async ({ get }) => {
    const userProfile = get(dataAtom);
    console.log("profileSelector: ", userProfile);

    return userProfile;
  },
});

export { profileSelector };
