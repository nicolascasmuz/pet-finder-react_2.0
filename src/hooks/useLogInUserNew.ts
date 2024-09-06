import { useRecoilState, useRecoilCallback } from "recoil";
import { userState, User, logInUserSelector } from "../atoms/new-atoms";

export function useLogInUser() {
  const [user, setUser] = useRecoilState<User | null>(userState);

  const logIn = useRecoilCallback(
    ({ snapshot }) =>
      async (email: string, password: string): Promise<User | null> => {
        const fetchUser = logInUserSelector({ email, password });
        const userData = await snapshot.getPromise(fetchUser);

        if (userData) {
          setUser(userData);
        } else {
          console.error(
            "Error: No se pudo obtener la información del usuario."
          );
        }

        return userData;
      }
  );

  return { user, logIn };
}
