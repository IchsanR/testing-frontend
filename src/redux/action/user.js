import axios from "axios";

// get pakai reducer
export const getList = () => {
	return {
		type: "GET_LIST_USER",
		payload: axios({
			url: "http://localhost:4002/recipe",
			// url: "http://jsonplaceholder.typicode.com/users",
			method: "GET",
			// headers: {
			// 	'content-type': 'application/json'
			// }
		}),
	};
};

// insert, update, delete tanpa reducer
// export const insert = (body) => {
// 	return new Promise((resolve, reject) => {
// 		axios
// 			.post("")
// 			.then((response) => {
// 				resolve(response);
// 			})
// 			.catch((err) => {
// 				reject(err);
// 			});
// 	});
// };
