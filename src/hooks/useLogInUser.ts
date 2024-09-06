import { useEffect } from "react";
import {
  atom,
  selector,
  useSetRecoilState,
  useRecoilValue,
  useRecoilCallback,
} from "recoil";
/* import { emailPassState, logInState } from "../atoms/log-in-atoms"; */
import { logInUserSelector } from "../atoms/new-atoms";

/* export function useLogIn(email?, password?) {
  const setRecoilLogIn = useSetRecoilState(logInState);
  const logInData = useRecoilValue(logInDataState);
  useSetState(logInData);

  useEffect(() => {
    if (email && password) {
      setRecoilLogIn({ email, password });
    }
  }, [email, password]);

  return logInData;
} */

/* function useLogInUser(email?, password?) {
  const setEmailPassState = useSetRecoilState(emailPassState);
  const profileData = useRecoilValue(logInState);

  useEffect(() => {
    setEmailPassState({ email, password });
  }, [email, password]);

  return profileData;
}

export { useLogInUser }; */

export const useLogInUser = () => {
  const logInUser = useSetRecoilState(logInUserSelector);

  return async (email: string, password: string) => {
    await logInUser({ email, password });
  };
};
