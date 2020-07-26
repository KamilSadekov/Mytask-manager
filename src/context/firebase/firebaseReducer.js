import { SHOW_LOADER, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from "../types"

const handlers = {
	[SHOW_LOADER]: state => ({ ...state, loading: true }),
	[ADD_NOTE]: (state, { payload }) => ({
		...state,
		note: [...state.notes, payload],
	}),
	[FETCH_NOTES]: (state, { payload }) => ({
		...state,
		notes: payload,
		loading: false,
	}),
	[REMOVE_NOTE]: (state, { payload }) => ({
		...state,
		notes: state.notes.filter(note => note.id !== payload),
	}),
	default: state => state,
}

export const FirebaseReducer = (state, action) => {
	const handle = handlers[action.type] || handlers.default
	return handle(state, action)
}
