import { Element } from "react-scroll"

import CardForFirst from "./Cards/CardForFirst"
import CardForSecond from "./Cards/CardForSecond"

import "./style.css"
import PortfolioTitle from "./PortfolioTitle"

const Projects = () => {
	return (
		<Element name="portfolio" className="mb-[480px]">
			<PortfolioTitle />
			<CardForFirst />
			<CardForSecond />
		</Element>
	)
}

export default Projects
