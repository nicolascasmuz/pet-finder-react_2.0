import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { signinAtom, signinSelector } from "../atoms/sign-up-atoms";

function useSignUpUser() {
  const navigate = useNavigate();
  const setAuthDataState = useSetRecoilState(signinAtom);
  const userData = useRecoilValue(signinSelector);

  async function signUp(email: string, password: string) {
    setAuthDataState({ email, password });
    console.log("useSignUpUser: ", userData);
    if (userData.createdUser == true) {
      navigate("/location");
    }

    return userData;
  }

  return signUp;
}

export { useSignUpUser };
