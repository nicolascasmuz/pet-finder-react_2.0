import { atom, selector } from "recoil";
const API_BASE_URL = "http://localhost:3000";

const newReportAtom = atom({
  key: "new-report-atom",
  default: {
    userId: "",
    picURL: "",
    name: "",
    details: "",
    lng: "",
    lat: "",
    ownerEmail: "",
    ownerName: "",
  },
});

const newReportSelector = selector({
  key: "new-report-selector",
  get: async ({ get }) => {
    const newReportData = get(newReportAtom);

    if (newReportData.userId == "") {
      return false;
    } else {
      const response = await fetch(API_BASE_URL + "/report-my-pet", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newReportData),
      });

      const json = await response.json();
      return json;
    }
  },
});

export { newReportAtom, newReportSelector };
