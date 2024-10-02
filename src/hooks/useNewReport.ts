import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { dataAtom, dataSelector } from "../atoms/data-atom";
import {
  newReportAtom,
  newReportSelector,
} from "../atoms/set-new-report-atoms";

function useNewReport() {
  const navigate = useNavigate();
  const setNewReportState = useSetRecoilState(newReportAtom);
  const newReportLoadable = useRecoilValueLoadable(newReportSelector);
  const setDataState = useSetRecoilState(dataAtom);
  const stateData = useRecoilValue(dataSelector);

  useEffect(() => {
    if (newReportLoadable.state === "hasValue" && newReportLoadable.contents) {
      navigate("/new-reported-pet");
    }
  }, [newReportLoadable, navigate]);

  async function newReport(newReportData) {
    setNewReportState(newReportData);
  }

  return newReport;
}

export { useNewReport };
