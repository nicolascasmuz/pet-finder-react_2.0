import { atom } from "recoil";
import { selectorFamily } from "recoil";

// Define el tipo de User
export type User = {
  id: number;
  email: string;
  nickname: string;
  picURL: string;
  address?: string;
  location?: string;
  lat?: string;
  lng?: string;
  [key: string]: any; // Permite propiedades adicionales
};

export const userState = atom<User | null>({
  key: "userState",
  default: null, // Estado inicial del usuario
});

export const logInUserSelector = selectorFamily<
  User | null,
  { email: string; password: string }
>({
  key: "logInUserSelector",
  get:
    ({ email, password }) =>
    async () => {
      try {
        const response = await fetch("http://localhost:3000/log-in", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${email} ${password}`,
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Error al iniciar sesión");
        }

        const data = await response.json();
        return data.profile as User; // Devuelve el perfil del usuario logueado.
      } catch (error) {
        console.error("Error en la autenticación:", error);
        return null;
      }
    },
});
