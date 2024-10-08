import guitarSchool from "./../../../assets/Images/Guitar-school-project.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

import { faGuitar } from "@fortawesome/free-solid-svg-icons"

import { motion } from "framer-motion"

const CardForSecond = () => {
	const imgAnimation = {
		hidden: {
			x: -500,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}
	const descAnimation = {
		hidden: {
			x: 500,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}
	return (
		<section className="mb-14">
			<div className="flex flex-col  px-5  md:flex-row md:justify-center md:items-center md:gap-[100px] ">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ amount: 0.2, once: true }}
					transition={{ delay: 0.5 }}
					variants={imgAnimation}
				>
					<h3 className="text-base font-bold mb-4 text-center font-montserrat ">
						GUITAR SCHOOL{" "}
						<FontAwesomeIcon icon={faGuitar} style={{ color: "#ff662c" }} />
					</h3>
					<p className="font-semibold text-sm text-secondary mb-4 text-justify w-full leading-tight font-montserrat md:w-64">
						Our guitar school offers training for all levels – from beginners to
						advanced guitarists. Experienced teachers will help to master the
						accommodation, rhythms and technique of playing on electric guitar
						or acoustics.
					</p>
					<div className="flex justify-center gap-12 mb-5 md:flex-row md:justify-around ">
						<span className="font-bold text-base font-montserrat">HTML</span>
						<span className="font-bold text-base font-montserrat">CSS</span>
						<span className="font-bold text-base font-montserrat">SCSS</span>
					</div>
					<div className="flex justify-center gap-14 items-center mb-5 md:flex-row md:justify-between ">
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
				</motion.div>
				<motion.img
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
					variants={descAnimation}
					className="onShadow rounded-xl mb-2 items-center mx-auto h-[230px] w-[300px] md:mb-0 md:mx-0 md:h-[235px] md:w-[333px]"
					src={guitarSchool}
				/>
			</div>
		</section>
	)
}

export default CardForSecond
