export default function handleResponse(promise) {
  promise.then((result) => {
    console.log('Got a response from the API');
    return ({status: 200, body: 'success'});
  })
      .catch((error) => {
        console.error('Error occured');
        return new Error();
      });
}
