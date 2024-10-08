import { Element } from "react-scroll"

import CardForFirst from "./Cards/CardForFirst"
import CardForSecond from "./Cards/CardForSecond"
import PortfolioTitle from "./PortfolioTitle"

import "./style.css"

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
