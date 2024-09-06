import { useEffect } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

export const emptyData = {
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

export const dataState = atom({
  key: "data",
  default: {
    userId: "",
    picURL: "",
    nickname: "",
    email: "",
    password: "",
    address: "",
    location: "",
    newUser: "",
    selectedPet: "",
    petsByRadius: [],
    myReportedPets: [],
  },
});

export const getDataState = selector({
  key: "get-data",
  get: async ({ get }) => {
    const dataValue = get(dataState);

    return dataValue;
  },
});

export function useInit() {
  const localData = localStorage.getItem("saved-state");
  const setStateRef = useSetState;

  useEffect(() => {
    if (!localData) {
      return;
    } else if (
      window.location.pathname == "/main" ||
      window.location.pathname == "/" ||
      window.location.pathname == "/log-in" ||
      window.location.pathname == "/sign-up"
    ) {
      setStateRef(emptyData);
    } else {
      setStateRef(JSON.parse(localData));
    }
  }, []);
}

export function useGetState() {
  const data = useRecoilValue(getDataState);

  return data;
}

export function useSetState(newState) {
  const [data, setData] = useRecoilState(dataState);
  useEffect(() => {
    setData({ ...data, ...newState });
    localStorage.setItem("saved-state", JSON.stringify(data));
  }, [newState]);
}
