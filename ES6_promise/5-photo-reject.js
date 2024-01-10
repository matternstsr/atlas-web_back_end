
export default function uploadPhoto(filename) {
  if (!filename.endsWith('.jpg')) {
    return Promise.reject(new Error(`${filename} cannot be processed`));
  }
  return Promise.resolve(`File ${filename} uploaded successfully`);
}
