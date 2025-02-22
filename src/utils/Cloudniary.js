import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localfile) => {
  try {
    if (!localfile) {
      throw new Error("Please provide a file to upload");
    }
    // upload file
    const uploadResult = await cloudinary.uploader.upload(localfile, {
      resource_type: "auto",
    });
    // file upload msg

    console.log(uploadResult,uploadResult.url);
    return uploadResult.url;
  } catch (error) {
    console.log(error);
    // remove local saved temp file as upload oprn failed
    fs.unlinkSync(localfile);

  }
};


export { uploadCloudinary };