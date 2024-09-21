import mazdaProject from "./../../assets/Images/Mazda-project.png"
import guitarSchool from "./../../assets/Images/Guitar-school-project.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { faGuitar } from "@fortawesome/free-solid-svg-icons"

import { Element } from "react-scroll"

const Projects = () => {
	return (
		<Element name="portfolio" className="mb-[400px]">
			<section className="mb-14">
				<div className="text-start pl-[30%]">
					<h1 className="font-bold text-xs text-primary mb-4 font-montserrat">
						PORTFOLIO
					</h1>
					<h2 className="font-bold text-base mb-7 font-montserrat">
						Each project is a unique piece of development{" "}
						<FontAwesomeIcon
							className="ml-[4px]"
							icon={faPuzzlePiece}
							style={{ color: "#B197FC" }}
						/>
					</h2>
				</div>
				<div className="flex justify-center items-center gap-[100px]">
					<img className="h-[235px] w-[333px] rounded-xl" src={mazdaProject} />

					<div>
						<h3 className="text-base font-bold mb-4 text-center font-montserrat ">
							MAZDA GEARS{" "}
							<FontAwesomeIcon
								icon={faGear}
								flip="both"
								style={{ color: "#000000" }}
							/>
						</h3>
						<p className="font-normal text-sm text-secondary mb-4 text-center w-64 leading-tight font-montserrat">
							The project is a platform for finding car parts. Users can enter a
							brand and model of the car to quickly find compatible
							parts.Additionally, users can filter parts and gears based on
							criteria such as price and location.
						</p>
						<div className="flex justify-around mb-5">
							<span className="font-bold text-base font-montserrat">REACT</span>

							<span className="font-bold text-base font-montserrat">
								TYPESCRIPT
							</span>
						</div>
						<div className="flex justify-between items-center">
							<a
								className="font-medium text-base font-montserrat"
								href="https://github.com/m1rxcle/pet-project"
							>
								<span className="flex items-center ">
									Code
									<FontAwesomeIcon className="ml-[4px]" icon={faGithub} />
								</span>
							</a>
							<a
								className="font-medium text-base font-montserrat"
								href="https://m1rxcle.github.io/pet-project/"
							>
								<span className="flex items-center">
									Live Demo
									<FontAwesomeIcon
										className="ml-[4px]"
										icon={faUpRightFromSquare}
										style={{ color: "#272525" }}
									/>
								</span>
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-14">
				<div className="flex justify-center items-center gap-[100px]">
					<div>
						<h3 className="text-base font-bold mb-4 text-center font-montserrat ">
							GUITAR SCHOOL{" "}
							<FontAwesomeIcon icon={faGuitar} style={{ color: "#ff662c" }} />
						</h3>
						<p className="font-normal text-sm text-secondary mb-4 text-center w-64 leading-tight font-montserrat">
							Our guitar school offers training for all levels – from beginners
							to advanced guitarists. Experienced teachers will help to master
							the accommodation, rhythms and technique of playing on electric
							guitar or acoustics.
						</p>
						<div className="flex justify-around mb-5 ">
							<span className="font-bold text-base font-montserrat">HTML</span>
							<span className="font-bold text-base font-montserrat">CSS</span>
							<span className="font-bold text-base font-montserrat">SCSS</span>
						</div>
						<div className="flex justify-between items-center">
							<a
								className="font-medium text-base"
								href="https://github.com/m1rxcle/guitarMan"
							>
								<span className="flex items-center font-montserrat">
									Code
									<FontAwesomeIcon className="ml-[4px]" icon={faGithub} />
								</span>
							</a>
							<a
								className="font-medium text-base"
								href="https://m1rxcle.github.io/guitarMan/"
							>
								<span className="flex items-center font-montserrat">
									Live Demo
									<FontAwesomeIcon
										className="ml-[4px]"
										icon={faUpRightFromSquare}
										style={{ color: "#272525" }}
									/>
								</span>
							</a>
						</div>
					</div>
					<img className="h-[235px] w-[333px] rounded-xl" src={guitarSchool} />
				</div>
			</section>
		</Element>
	)
}

export default Projects
