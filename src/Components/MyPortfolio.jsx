import { useState } from "react"
import About from "./About/About"
import Contacts from "./Contacts/Contacts"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import NavBar from "./NavBar/NavBar"
import Projects from "./Projects/Projects"
import { useEffect } from "react"
import Loader from "./Loader/Loader"

const MyPortfolio = () => {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 2550)
	}, [loading])
	return (
		<>
			{loading ? (
				<div className="bg-[#e6e6e6]  w-full h-300px">
					<Loader />
				</div>
			) : (
				<div>
					<NavBar />
					<Header />
					<About />
					<Projects />
					<Contacts />
					<Footer />
				</div>
			)}
		</>
	)
}

export default MyPortfolio
