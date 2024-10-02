import React, { useEffect } from "react";
import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { dataAtom, dataSelector } from "../atoms/data-atom";
import {
  reportedPetsAtom,
  reportedPetsSelector,
} from "../atoms/reported-pets-atoms";

function useReportedPets() {
  const setReportedPetsState = useSetRecoilState(reportedPetsAtom);
  const reportedPetsLoadable = useRecoilValueLoadable(reportedPetsSelector);
  const setDataState = useSetRecoilState(dataAtom);
  const stateData = useRecoilValue(dataSelector);

  console.log(
    "reportedPetsLoadable.contents 1: ",
    reportedPetsLoadable.contents
  );
  useEffect(() => {
    if (
      reportedPetsLoadable.state === "hasValue" &&
      reportedPetsLoadable.contents
    ) {
      console.log(
        "reportedPetsLoadable.contents 2: ",
        reportedPetsLoadable.contents
      );

      /* setDataState((prevState) => ({
        ...prevState,
        myReportedPets: reportedPetsLoadable.contents,
      })); */
    }
  }, [reportedPetsLoadable]);

  async function reportedPets(userId) {
    setReportedPetsState({ userId });
  }

  return reportedPets;
}

export { useReportedPets };
