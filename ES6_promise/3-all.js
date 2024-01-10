export async function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'this-is-a-different-photo',
  });
}

export async function createUser() {
  return Promise.resolve({
    status: 200,
    body: {
      firstName: 'Guillaume',
      lastName: 'Salva',
    },
  });
}
