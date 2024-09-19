import { atom, selector } from "recoil";

// Atom para el estado del email del usuario
export const emailState = atom<string | null>({
  key: "emailState",
  default: null,
});

// Atom para el estado de la contraseña del usuario
export const passwordState = atom<string | null>({
  key: "passwordState",
  default: null,
});

// Selector para la información del usuario autenticado
export const userAuthState = selector({
  key: "userAuthState",
  get: async ({ get }) => {
    const email = get(emailState);
    const password = get(passwordState);

    if (!email || !password) return null;

    // Realizar la solicitud al backend
    try {
      const response = await fetch("http://localhost:3000/log-in", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${email} ${password}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }

      const data = await response.json();
      return data.profile;
    } catch (error) {
      console.error("Error en la autenticación del usuario:", error);
      return null;
    }
  },
});
