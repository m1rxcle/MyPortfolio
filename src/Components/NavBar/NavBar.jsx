import { Link } from "react-scroll"
import "./style.css"
import { useState } from "react"
import { faFaceSmileWink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const NavBar = () => {
	const [active, setActive] = useState(false)
	const handleHover = () => {
		setActive(!active)
	}
	return (
		<nav className="text-center w-full py-3 fixed top-0 md:left-0 md:right-0 bg-white md:mx-auto  md:flex md:justify-between md:items-center md:px-10 md:pt-5 md:z-10 ">
			<button
				onClick={handleHover}
				className="cursor-pointer font-montserrat font-extrabold text-2xl transition-transform duration-500 ease-in-out appear"
			>
				{active ? (
					<>
						m1rxcle.dev
						<FontAwesomeIcon
							className="right"
							icon={faFaceSmileWink}
							style={{ color: "#000000" }}
						/>
					</>
				) : (
					"m1rxcle.dev"
				)}
			</button>
			<ul className="hidden md:flex md:gap-6 md:font-bold">
				<li>
					<Link
						className="font-montserrat cursor-pointer"
						to="home"
						smooth={true}
						duration={500}
						offset={-120}
						spy={true}
						activeClass="active-link"
					>
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
