import algoliasearch from "algoliasearch";

const client = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APPID,
  process.env.REACT_APP_ALGOLIA_ADMINAPIKEY
);

const missingPetsIndex = client.initIndex("missingpets");
const profilesIndex = client.initIndex("profiles");

export { missingPetsIndex, profilesIndex };
