export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return new Error();
    })
    .catch((error) => {
      console.log('Got a response from the API with an error:', error);
      throw new Error('Error from handleResponseFromAPI');
    });
}
