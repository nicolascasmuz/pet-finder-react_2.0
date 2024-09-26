import { atom, selector } from "recoil";

const emptyData: any = {
  userId: "",
  picURL: "",
  nickname: "",
  email: "",
  password: "",
  address: "",
  location: "",
  lat: "",
  lng: "",
  newUser: "",
  selectedPet: "",
  petsByRadius: [],
  myReportedPets: [],
};

const dataAtom = atom({
  key: "data-atom",
  default: {
    userId: "",
    picURL: "",
    nickname: "",
    email: "",
    password: "",
    address: "",
    location: "",
    lat: "",
    lng: "",
    newUser: "",
    selectedPet: "",
    petsByRadius: [],
    myReportedPets: [],
  },
});

const getDataSelector = selector({
  key: "get-data-selector",
  get: async ({ get }) => {
    const dataValue = get(dataAtom);

    return dataValue;
  },
});

function useInit() {
  const localData = localStorage.getItem("saved-state");
  console.log("localData: ", localData);

  if (!localData) {
    console.log("console.log 01");
    return;
  } else if (
    window.location.pathname == "/main" ||
    window.location.pathname == "/" ||
    window.location.pathname == "/log-in" ||
    window.location.pathname == "/sign-up"
  ) {
    console.log("console.log 02");
    localStorage.setItem("saved-state", JSON.stringify(emptyData));
    return emptyData;
  } else {
    console.log("console.log 03");
    return JSON.parse(localData);
  }
}

const dataSelector = selector({
  key: "data-selector",
  get: async ({ get }) => {
    const userProfile = get(dataAtom);
    localStorage.setItem("saved-state", JSON.stringify(userProfile));

    return userProfile;
  },
});

export { emptyData, dataAtom, getDataSelector, useInit, dataSelector };
