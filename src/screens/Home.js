import React, { Fragment, useContext, useEffect } from "react"

import { Form } from "../components/Form"
import { Notes } from "../components/Notes"

import { FirebaseContext } from "../context/firebase/firebaseContext"
import { Load } from "../components/Load"
export const Home = () => {
	const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)

	useEffect(() => {
		fetchNotes()
		// eslint-disable-next-line
	}, [])
	return (
		<Fragment>
			<Form />
			<hr />
			{loading ? <Load /> : <Notes notes={notes} onRemove={removeNote} />}
		</Fragment>
	)
}
