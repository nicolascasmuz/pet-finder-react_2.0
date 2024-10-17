import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUDNAME,
  api_key: process.env.REACT_APP_CLOUDINARY_APIKEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_APISECRET,
});

export { cloudinary };
