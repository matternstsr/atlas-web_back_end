import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [usersData, filesData] = await Promise.all([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    return [
      { status: 'fulfilled', value: usersData },
      { status: 'fulfilled', value: filesData },
    ];
  } catch (error) {
    return [
      { status: 'rejected', value: error.toString() },
      { status: 'rejected', value: error.toString() },
    ];
  }
}
