import React, { useReducer } from "react"
import axios from "axios"

import { FirebaseContext } from "./firebaseContext"

import { FirebaseReducer } from "./firebaseReducer"
import { SHOW_LOADER, REMOVE_NOTE, ADD_NOTE, FETCH_NOTES } from "../types"

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({ children }) => {
	const initialState = {
		notes: [],
		loading: false,
	}
	const [state, dispatch] = useReducer(FirebaseReducer, initialState)

	const showLoad = () => dispatch({ type: SHOW_LOADER })

	const fetchNotes = async () => {
		showLoad()
		const result = await axios.get(`${url}/notes.json`)

		const payload = Object.keys(result.data).map(key => {
			return {
				...result.data[key],
				id: key,
			}
		})

		dispatch({
			type: FETCH_NOTES,
			payload,
		})
	}

	const addNote = async title => {
		const note = {
			title,
			date: new Date().toJSON(),
		}
		try {
			const result = await axios.post(`${url}/notes.json`, note)
			const payload = {
				...note,
				id: result.data.name,
			}
			dispatch({ type: ADD_NOTE, payload })
		} catch (e) {
			throw new Error(e.message)
		}
	}

	const removeNote = async id => {
		await axios.delete(`${url}/notes/${id}.json`)
		dispatch({
			type: REMOVE_NOTE,
			payload: id,
		})
	}

	return (
		<FirebaseContext.Provider
			value={{
				showLoad,
				addNote,
				removeNote,
				fetchNotes,
				loading: state.loading,
				notes: state.notes,
			}}
		>
			{children}
		</FirebaseContext.Provider>
	)
}
