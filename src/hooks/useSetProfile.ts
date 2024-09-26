import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useSetRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
} from "recoil";
import { dataAtom, dataSelector } from "../atoms/data-atom";
import { profileAtom, profileSelector } from "../atoms/set-profile-atoms";
import mapboxgl from "mapbox-gl";
import MapboxClient from "mapbox";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoibmljb2xhc2Nhc211eiIsImEiOiJjbGlnazg2cjExZTdvM21tcWl6eGU5bDM0In0.EtaC4N7nb_NuwfddaKZaow";
mapboxgl.accessToken = MAPBOX_TOKEN;
const mapboxClient = new MapboxClient(MAPBOX_TOKEN);

function useSetProfile() {
  const navigate = useNavigate();
  const setProfileDataState = useSetRecoilState(profileAtom);
  const profileDataLoadable = useRecoilValueLoadable(profileSelector);
  const setDataState = useSetRecoilState(dataAtom);
  const stateData = useRecoilValue(dataSelector);

  const emptyData: any = {
    userId: "",
    picURL: "",
    nickname: "",
    email: "",
    password: "",
    address: "",
    location: "",
    lat: "",
    lng: "",
    newUser: "",
    selectedPet: "",
    petsByRadius: [],
    myReportedPets: [],
  };

  useEffect(() => {
    if (
      profileDataLoadable.state === "hasValue" &&
      profileDataLoadable.contents
    ) {
      emptyData.email = profileDataLoadable.contents.email;
      emptyData.password = profileDataLoadable.contents.password;
      emptyData.address = profileDataLoadable.contents.address;
      emptyData.location = profileDataLoadable.contents.location;
      emptyData.lat = profileDataLoadable.contents.lat;
      emptyData.lng = profileDataLoadable.contents.lng;
      setDataState(emptyData);
      navigate("/home");
    }
  }, [profileDataLoadable, navigate]);

  async function setProfile(address: string, town: string) {
    mapboxClient.geocodeForward(
      `${address} ${town}`,
      {
        country: "ar",
        autocomplete: true,
        language: "es",
      },
      async function locationData(err, data, res) {
        if (!err) {
          const [lng, lat] = data.features[0].geometry.coordinates;

          const address = data.features[0].place_name_es.split(",")[0];

          const location = data.features[0].place_name_es
            .split(",")[1]
            .slice(1);

          const setProfileData = {
            email: stateData.email,
            password: stateData.password,
            address,
            location,
            lat,
            lng,
          };
          setProfileDataState(setProfileData);
        }
      }
    );
  }

  return setProfile;
}

export { useSetProfile };
