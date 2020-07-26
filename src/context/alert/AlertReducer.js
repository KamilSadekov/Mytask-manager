import { Show_Alert, Hide_Alert } from "../types"

const handlers = {
	[Show_Alert]: (state, { payload }) => ({ ...payload, visible: true }),
	[Hide_Alert]: state => ({ ...state, visible: false }),
	default: state => state,
}

export const AlertReducer = (state, action) => {
	const handle = handlers[action.type] || handlers.default

	return handle(state, action)
}
