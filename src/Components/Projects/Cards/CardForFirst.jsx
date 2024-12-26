import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

import mazdaProject from "./../../../assets/Images/mazda-video.mp4"
import { useRef } from "react"

const CardForFirst = () => {
	const videoRef = useRef(null)

	return (
		<section className="mb-14">
			<div className="flex flex-col  px-5  md:flex-row md:justify-center md:items-center md:gap-[100px] ">
				<div
					className="cursor-pointer hover:scale-110 transition-all duration-200 ease-linear"
					onMouseEnter={() => videoRef.current.play()}
					onMouseLeave={() => videoRef.current.pause()}
				>
					<video
						ref={videoRef}
						className="onShadow rounded-xl mb-2 items-center mx-auto h-[180px] w-[320px] md:h-[180px] md:w-[320px] md:mb-0 md:mx-0 pointer-events-none "
					>
						<source src={mazdaProject} type="video/mp4" />
					</video>
				</div>

				<div>
					<h3 className="text-base font-bold mb-4 text-center font-montserrat  ">
						MAZDA GEARS <FontAwesomeIcon icon={faGear} flip="both" style={{ color: "#000000" }} />
					</h3>
					<p className="font-semibold text-sm text-secondary mb-4 text-justify w-full leading-tight font-montserrat md:w-64">
						The project is a platform for finding car parts. Users can enter a brand and model of the car to quickly find compatible
						parts.Additionally, users can filter parts and gears based on criteria such as price and location.
					</p>
					<div className="flex justify-center gap-12 mb-5 md:flex-row md:justify-around ">
						<span className="font-bold text-base font-montserrat">REACT</span>

						<span className="font-bold text-base font-montserrat">TYPESCRIPT</span>
					</div>
					<div className="flex justify-center gap-14 items-center md:flex-row md:justify-between ">
						<a className="font-medium text-base font-montserrat" href="https://github.com/m1rxcle/pet-project">
							<span className="flex items-center ">
								Code
								<FontAwesomeIcon className="ml-[4px]" icon={faGithub} />
							</span>
						</a>
						<a className="font-medium text-base font-montserrat" href="https://m1rxcle.github.io/pet-project/">
							<span className="flex items-center">
								Live Demo
								<FontAwesomeIcon className="ml-[4px]" icon={faUpRightFromSquare} style={{ color: "#272525" }} />
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CardForFirst
