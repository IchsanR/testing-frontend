// init store
const initialState = {
	nilai: 0,
};

// init reducer
const countReducer = (state = initialState, action) => {
	switch (action.type) {
		case "tambah":
			return { ...state, nilai: state.nilai + 1 };
		case "kurang":
			return { ...state, nilai: state.nilai - 1 };
		default:
			return state;
	}
};

export default countReducer;
