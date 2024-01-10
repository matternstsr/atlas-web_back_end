export default function uploadPhoto(fileName) {
  return Promise((resolve, reject) => {
    if (fileName.endsWith('.jpg')) {
      resolve(`File ${fileName} uploaded successfully`);
    } else {
      reject(Error(`${fileName} cannot be processed`));
    }
  });
}
