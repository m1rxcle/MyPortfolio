import { Element } from "react-scroll"

import CardForFirst from "./Cards/CardForFirst"
import CardForSecond from "./Cards/CardForSecond"

import "./style.css"

const Projects = () => {
	return (
		<Element name="portfolio" className="mb-[480px]">
			<section className="mb-14">
				<CardForFirst />
			</section>
			<section className="mb-14">
				<CardForSecond />
			</section>
		</Element>
	)
}

export default Projects
