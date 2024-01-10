import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName).catch((error) => error), // Catch the rejection and treat it as a resolved promise
  ]).then((results) => {
    return results.map((result, index) => ({
      status: index === 0 ? 'fulfilled' : 'rejected',
      value: result,
    }));
  });
}
