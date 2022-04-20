import React, { useState } from "react"
import { Route, Routes, NavLink } from "react-router-dom"
import '../../styles/mail.css'

//Components
import BoxList from "./BoxList"
import NewBox from "./NewBox/NewBox"
import BoxDetails from "./BoxDetails"
import NewLetter from "./NewLetter/NewLetter"

//Data + Assets
import { initialPOBoxes, initialLetters } from "../../data/post-data"

const PostOffice = (props) => {
	const [boxes, setBoxes] = useState(initialPOBoxes)
	const [letters, setLetters] = useState(initialLetters)

	const nextBoxNumber = Object.keys(boxes).id
	const nextLetterId = Object.keys(letters).id

	const sendLetter = (boxNum, formData) => {
		if (props.handleExchange(.99)) {
			setLetters({ ...letters, [nextLetterId]: formData })
			const updatedLetters = [...boxes[boxNum].letters, nextLetterId]
			setBoxes({ ...boxes, [boxNum]: { ...boxes[boxNum], letters: updatedLetters } })
			return true
		}
	}

	const createBox = (nameArr, cost) => {
		if (props.handleExchange(cost)) {
			setBoxes({ ...boxes, [nextBoxNumber]: { boxHolders: nameArr, letters: [] } })
			return true
		}
	}

	const markAsRead = (id, status) => {
		setLetters({ ...letters, [id]: { ...letters[id], read: status } })
	}

	return (
		<div className="post-office">
			<div className="postoffice-layout">
				<Routes>
					<Route path="/"
						element={<BoxList boxes={boxes} />}
					/>
					<Route path="/:boxNo"
						element={<BoxDetails boxes={boxes} letters={letters} markAsRead={markAsRead} />}
					/>
					<Route path="/letters/new"
						element={<NewLetter boxes={boxes} letters={letters} sendLetter={sendLetter} />}
					/>
					<Route path="/boxes/new"
						element={<NewBox boxes={boxes} createBox={createBox} />}
					/>
				</Routes>
			</div>
			<nav id="ponav">
				<NavLink to="/postoffice">Lobby</NavLink>
				<NavLink to="/postoffice/letters/new"><img src="/diaper.png" alt="Poop" /></NavLink>
				<NavLink to="/postoffice/boxes/new">New PO Box</NavLink>
			</nav>
		</div>
	)

}

export default PostOffice