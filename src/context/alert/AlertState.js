import React, { useReducer } from "react"
import { AlertContext } from "./AlertContext"
import { AlertReducer } from "./AlertReducer"
import { Show_Alert, Hide_Alert } from "../types"

export const AlertState = ({ children }) => {
	const [state, dispatch] = useReducer(AlertReducer, { visible: false })

	const show = (text, type = "warning") => {
		return dispatch({
			type: Show_Alert,
			payload: { text, type },
		})
	}

	const hide = () => {
		dispatch({ type: Hide_Alert })
	}
	return (
		<AlertContext.Provider value={{ show, hide, alert: state }}>
			{children}
		</AlertContext.Provider>
	)
}
