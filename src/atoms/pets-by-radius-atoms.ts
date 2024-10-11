import { atom, selector } from "recoil";
const API_BASE_URL = "http://localhost:3000";

const petsByRadiusAtom = atom({
  key: "pets-by-radius-atom",
  default: {
    userID: "",
    lat: "",
    lng: "",
    distance: "",
  },
});

const petsByRadiusSelector = selector({
  key: "pets-by-radius-selector",
  get: async ({ get }) => {
    const petsByRadiusValues = get(petsByRadiusAtom);

    if (petsByRadiusValues.userID) {
      const response = await fetch(
        API_BASE_URL +
          "/pets-near-to?lat=" +
          petsByRadiusValues.lat +
          "&lng=" +
          petsByRadiusValues.lng +
          "&radius=" +
          petsByRadiusValues.distance
      );

      const json = await response.json();
      const filteredMissingPets = json.filter((p) => {
        return p.found == false && p.userId != petsByRadiusValues.userID;
      });
      return filteredMissingPets;
    } else {
      false;
    }
  },
});

export { petsByRadiusAtom, petsByRadiusSelector };
