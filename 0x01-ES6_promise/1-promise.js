/**
 * @param {string} success - just a random string.
 * @return {promise} returns a settled promise.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({status: 200, body: 'Success'});
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

