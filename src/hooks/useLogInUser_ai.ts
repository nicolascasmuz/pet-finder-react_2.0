import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  emailState,
  passwordState,
  userAuthState,
} from "../atoms/log-in-atoms_ai";

export const useLogInUser = () => {
  const setEmail = useSetRecoilState(emailState);
  const setPassword = useSetRecoilState(passwordState);
  const userAuth = useRecoilValue(userAuthState);

  const logInUser = async (email: string, password: string) => {
    // Actualiza los estados de email y password
    setEmail(email);
    setPassword(password);

    try {
      // Llama al selector para obtener el usuario autenticado
      const profile = await userAuth;
      console.log("Usuario autenticado:", profile);
      return profile;
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      return null;
    }
  };

  return logInUser;
};
