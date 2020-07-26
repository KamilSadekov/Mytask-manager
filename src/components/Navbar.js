import React from "react"

import { NavLink } from "react-router-dom"

export const Navbar = () => (
	<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
		<div className="navbar-brand">Task App</div>

		<ul className="navbar-nav mr-auto">
			<li className="nav-item">
				<NavLink className="nav-link" to="/" exact>
					Главная
				</NavLink>
			</li>
			<li className="nav-item mr-auto">
				<NavLink className="nav-link" to="/About">
					О нас
				</NavLink>
			</li>
		</ul>
	</nav>
)
