export default function handleResponseFromAPI(promise) {
  promise
    .then((data) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch((error) => {
      console.log('Got a response from the API');
      return new Error();
    });
}