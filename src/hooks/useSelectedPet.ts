import { useSetRecoilState, useRecoilValue } from "recoil";
import { dataAtom, dataSelector } from "../atoms/data-atom";

function useSelectedPet() {
  const setDataState = useSetRecoilState(dataAtom);
  const stateData = useRecoilValue(dataSelector);

  async function selectedPet(petId) {
    const foundPet = stateData.myReportedPets.find((p: any) => {
      return p.id == petId;
    });

    setDataState((prevState) => ({
      ...prevState,
      selectedPet: foundPet ? foundPet : {},
    }));
  }

  return selectedPet;
}

export { useSelectedPet };
