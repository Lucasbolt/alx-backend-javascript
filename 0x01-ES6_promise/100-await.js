import {uploadPhoto, createUser} from './utils';

export default function async asyncUploadUser() {
	try {
		return {photo: await uploadphoto(), user: await createUser()}
	} catch(error) {
		return {photo: null, user: null};
	}
}
