import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { dataAtom, dataSelector } from "../atoms/data-atom";
import { authAtom, authSelector } from "../atoms/new-login-atoms";

/* function useLogInUser(email?, password?) {
  const setEmailPassState = useSetRecoilState(authAtom);
  const profileData = useRecoilValue(loginToken);

  useEffect(() => {
    setEmailPassState({ email, password });
  }, [email, password]);

  return profileData;
} */

function useLogInUser() {
  const navigate = useNavigate();
  const setAuthDataState = useSetRecoilState(authAtom);
  const setDataState = useSetRecoilState(dataAtom);
  const userData = useRecoilValue(authSelector);
  const stateData = useRecoilValue(dataSelector);

  async function logIn(email: string, password: string) {
    setAuthDataState({ email, password });
    setDataState(userData);
    console.log("useLogInUser: ", stateData);
    if (userData) {
      navigate("/home");
    }

    return userData;
  }

  return logIn;
}

export { useLogInUser };
