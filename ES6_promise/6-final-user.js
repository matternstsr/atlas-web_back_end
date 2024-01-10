export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((results) => {
      return results.map((result, index) => ({
        status: result.status,
        value: result.status === 'fulfilled'
          ? index === 0 ? { firstName, lastName } : result.value
          : result.reason,
      }));
    });
}