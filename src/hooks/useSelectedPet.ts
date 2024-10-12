import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { dataAtom, dataSelector } from "../atoms/data-atom";
import {
  missingPetsAtom,
  missingPetsSelector,
} from "../atoms/missing-pets-atoms";

function useSelectedPet() {
  const navigate = useNavigate();
  const missingPetsState = useSetRecoilState(missingPetsAtom);
  const missingPetsLoadable = useRecoilValueLoadable(missingPetsSelector);
  const setDataState = useSetRecoilState(dataAtom);
  const stateData = useRecoilValue(dataSelector);

  useEffect(() => {
    if (
      missingPetsLoadable.state === "hasValue" &&
      missingPetsLoadable.contents
    ) {
      setDataState((prevState) => ({
        ...prevState,
        selectedPet: missingPetsLoadable.contents,
      }));
      navigate("/selected-pet-map");
    }
  }, [missingPetsLoadable]);

  async function selectMyReportedPet(petId) {
    const foundPet = stateData.myReportedPets.find((p: any) => {
      return p.id == petId;
    });

    setDataState((prevState) => ({
      ...prevState,
      selectedPet: foundPet ? foundPet : {},
    }));
  }

  async function selectMissingPet(missingPet) {
    missingPetsState(missingPet);
  }

  return { selectMyReportedPet, selectMissingPet };
}

export { useSelectedPet };
