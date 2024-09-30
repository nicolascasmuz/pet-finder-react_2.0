import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { dataAtom, dataSelector } from "../atoms/data-atom";
import { editDataAtom, editDataSelector } from "../atoms/set-edit-data-atoms";

function useEditData() {
  const navigate = useNavigate();
  const setEditDataState = useSetRecoilState(editDataAtom);
  const editDataLoadable = useRecoilValueLoadable(editDataSelector);
  const setDataState = useSetRecoilState(dataAtom);
  const stateData = useRecoilValue(dataSelector);

  useEffect(() => {
    if (editDataLoadable.state === "hasValue" && editDataLoadable.contents) {
      const newProfileData = {
        userId: stateData.userId,
        picURL: editDataLoadable.contents.picURL,
        nickname: editDataLoadable.contents.nickname,
        email: editDataLoadable.contents.email,
        password: stateData.password,
        address: editDataLoadable.contents.address,
        location: editDataLoadable.contents.location,
        lat: editDataLoadable.contents.lat,
        lng: editDataLoadable.contents.lng,
        newUser: stateData.newUser,
        selectedPet: stateData.selectedPet,
        petsByRadius: stateData.petsByRadius,
        myReportedPets: stateData.myReportedPets,
      };
      setDataState(newProfileData);
    }
  }, [editDataLoadable, navigate]);

  async function editData(newData) {
    setEditDataState(newData);
  }

  return editData;
}

export { useEditData };
