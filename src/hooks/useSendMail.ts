import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { dataAtom, dataSelector } from "../atoms/data-atom";
const API_BASE_URL = "http://localhost:3000";

function useSendMail() {
  const navigate = useNavigate();
  const setDataState = useSetRecoilState(dataAtom);
  const stateData = useRecoilValue(dataSelector);

  async function sendMail(mail) {
    await fetch(API_BASE_URL + "/send-mail", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mail),
    });
  }

  return sendMail;
}

export { useSendMail };
