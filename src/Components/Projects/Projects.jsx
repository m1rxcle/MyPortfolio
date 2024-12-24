import { Element } from "react-scroll"

import CardForFirst from "./Cards/CardForFirst"
import CardForSecond from "./Cards/CardForSecond"
import PortfolioTitle from "./PortfolioTitle"

import "./style.css"
import { CardForThird } from "./Cards/CardForThird"

const Projects = () => {
	return (
		<Element name="portfolio" className="mb-[480px]">
			<PortfolioTitle />
			<CardForFirst />
			<CardForSecond />
			<CardForThird />
		</Element>
	)
}

export default Projects
