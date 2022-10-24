const cloudinary = require("cloudinary").v2;
const uploadImage = async (files:string, folder:string) => {
  const upload = cloudinary.uploader.upload(files, {
    resource_type: "auto",
    folder: folder,
  });
  return upload;
};
 
export default uploadImage