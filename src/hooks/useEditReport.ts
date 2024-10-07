import React, { useEffect } from "react";
import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { dataAtom, dataSelector } from "../atoms/data-atom";
import { editReportAtom, editReportSelector } from "../atoms/edit-report-atoms";

function useEditReport() {
  const setEditReportState = useSetRecoilState(editReportAtom);
  const editReportLoadable = useRecoilValueLoadable(editReportSelector);
  const setDataState = useSetRecoilState(dataAtom);
  const stateData = useRecoilValue(dataSelector);

  console.log("editReportLoadable.contents 1: ", editReportLoadable.contents);
  useEffect(() => {
    if (
      editReportLoadable.state === "hasValue" &&
      editReportLoadable.contents
    ) {
      console.log(
        "editReportLoadable.contents 2: ",
        editReportLoadable.contents
      );

      setDataState((prevState) => ({
        ...prevState,
        selectedPet: editReportLoadable.contents,
      }));
    }
  }, [editReportLoadable]);

  async function editReport(editedData) {
    setEditReportState(editedData);
  }

  return editReport;
}

export { useEditReport };
