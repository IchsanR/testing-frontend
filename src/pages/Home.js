import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tambahData, kurangData } from "../redux/action/count";
import { getList } from "../redux/action/user";

const Home = () => {
	// untuk get action
	const dispatch = useDispatch();

	// useSelector untuk get reducer
	const state = useSelector((state) => {
		return state.count;
	});

	const user = useSelector((state) => {
		return state.user;
	});

	const onTambah = () => {
		dispatch(tambahData());
	};

	const onKurang = () => {
		dispatch(kurangData());
	};

	useEffect(() => {
		dispatch(getList());
	}, []);

	// insert
	// const onSubmit = () => {
	// 	insert(body)
	// 		.then(() => {})
	// 		.catch(() => {});
	// };
	return (
		<div>
			<h1>Halaman Home</h1>
			Nilai : {state.nilai}
			<hr />
			<button
				onClick={() => {
					onTambah();
				}}>
				Tambah
			</button>
			<button
				onClick={() => {
					onKurang();
				}}>
				Kurang
			</button>
			{/* get user */}
			{/* {JSON.stringify(user)} */}
			{
                user.isLoading ? (
                    <h1>Loading</h1>
                ) : user.isError ? (
                    <h1>Error</h1>
                ) : (
                    user.data.map((item, index) => (
                        <div key={index}>
                            {item.name}
                        </div>
                    ))
                )
            }

		</div>
	);
};

export default Home;
