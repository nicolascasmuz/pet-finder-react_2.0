import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { dataAtom, dataSelector } from "../atoms/data-atom";
import { signinAtom, signinSelector } from "../atoms/sign-up-atoms";

function useSignUpUser() {
  const navigate = useNavigate();
  const setAuthDataState = useSetRecoilState(signinAtom);
  const setDataState = useSetRecoilState(dataAtom);
  const userData = useRecoilValue(signinSelector);
  const stateData = useRecoilValue(dataSelector);

  async function signUp(email: string, password: string) {
    setAuthDataState({ email, password });
    setDataState(userData);
    console.log("useSignUpUser: ", stateData);
    if (userData.newUser == true) {
      navigate("/location");
    }

    return userData;
  }

  return signUp;
}

export { useSignUpUser };
