import { Link } from "react-scroll"
import { useState } from "react"

import "./style.css"

const NavBar = () => {
	const [clickName, setClickName] = useState(false)
	const handleClick = () => setClickName((prev) => !prev)
	return (
		<nav className="text-center w-full py-3 fixed top-0  z-10 md:left-0 md:right-0 bg-white md:mx-auto  md:flex md:justify-between md:items-center md:px-10 md:pt-5 md:z-10 ">
			<button onClick={handleClick} className="font-montserrat font-extrabold text-2xl transition-transform duration-500 ease-in-out appear">
				{clickName ? <span> ( ◡‿◡ *) </span> : <span>m1rxcle.dev</span>}
			</button>
			<ul className="hidden md:flex md:gap-6 md:font-bold">
				<li>
					<Link className="font-montserrat cursor-pointer" to="home" smooth={true} duration={500} offset={-120} spy={true} activeClass="active-link">
						Home
					</Link>
				</li>

				<li>
					<Link
						className="font-montserrat  cursor-pointer "
						to="about"
						smooth={true}
						duration={500}
						offset={-120}
						spy={true}
						activeClass="active-link"
					>
						About
					</Link>
				</li>

				<li>
					<Link
						className="font-montserrat  cursor-pointer"
						to="portfolio"
						smooth={true}
						duration={500}
						offset={-120}
						spy={true}
						activeClass="active-link"
					>
						Project
					</Link>
				</li>

				<li>
					<Link
						className="font-montserrat  cursor-pointer"
						to="contacts"
						smooth={true}
						duration={500}
						offset={-500}
						spy={true}
						activeClass="active-link"
					>
						Contacts
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
