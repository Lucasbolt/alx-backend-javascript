import {uploadPhoto, createUser} from utils.js

export default function handleProfileSignup() {
	Promise.all([uploadPhoto(), createUser()]).then(([upload, create]) => {
		console.log(upload.body, create.firstName, create.lastName);
	})
	.catch((error) => {
		console.error('Signup system offline');
	});
}
