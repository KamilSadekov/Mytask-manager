import React, { useState, useContext } from "react"
import { AlertContext } from "../context/alert/AlertContext"
import { FirebaseContext } from "../context/firebase/firebaseContext"

export const Form = () => {
	const [state, setstate] = useState("")
	const alert = useContext(AlertContext)
	const firebase = useContext(FirebaseContext)

	const submitHandler = event => {
		event.preventDefault()

		if (state.trim()) {
			firebase
				.addNote(state.trim())
				.then(() => {
					alert.show("Заметка была создана", "success")
				})
				.catch(() => {
					alert.show("Что-то пошло не так", "warning")
				})

			setstate("")
		} else {
			alert.show("Введите название заметки".toUpperCase(), "danger")
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					placeholder="Добавить задачу !"
					value={state}
					onChange={e => setstate(e.target.value)}
				/>
			</div>
		</form>
	)
}
