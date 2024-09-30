import { atom, selector } from "recoil";

// Función para cargar el estado inicial desde localStorage
function loadInitialState() {
  try {
    const localData = localStorage.getItem("saved-state");
    // Verifica que localData no sea null o cadena vacía
    if (!localData) {
      return JSON.parse(localData);
    } else {
      // Devuelve el estado inicial vacío si no hay nada en localStorage
      return {
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
    }
  } catch (error) {
    console.error("Error al cargar el estado inicial de localStorage: ", error);
    // Si hay un error en el parseo, devolver el estado inicial vacío
    return {
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
  }
}

// Atom con valor inicial desde localStorage
const dataAtom = atom({
  key: "data-atom",
  default: loadInitialState(), // Usamos la función que carga desde localStorage
});

const dataSelector = selector({
  key: "data-selector",
  get: ({ get }) => {
    const userProfile = get(dataAtom);
    localStorage.setItem("saved-state", JSON.stringify(userProfile));
    return userProfile;
  },
  set: ({ set }, newValue) => {
    // Actualiza el atom con el nuevo valor
    set(dataAtom, newValue);
    // Guarda el nuevo valor en localStorage
    localStorage.setItem("saved-state", JSON.stringify(newValue));
  },
});

export { dataAtom, dataSelector };
