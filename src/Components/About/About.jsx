import desktop from "./../../assets/Images/about.png"
import { Element } from "react-scroll"
import "./style.css"

import { motion } from "framer-motion"

const aboutAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.4 },
	}),
}

const About = () => {
	return (
		<Element name="about" className="mb-[230px]">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={aboutAnimation}
				custom={1}
				className="text-center w-full md:flex md:justify-center md:items-start md:gap-16 "
			>
				<img
					className="hidden md:block md:h-[217px] md:w-[304px] onShadow rounded-2xl"
					src={desktop}
					loading="lazy"
				/>
				<div className="md:flex md:flex-col ">
					<h1 className="text-xs text-primary mb-1 font-bold font-montserrat md:text-start">
						ABOUT ME
					</h1>
					<h2 className="text-justify font-bold text-lg mb-1 px-5 leading-tight font-montserrat w-full md:w-[350px] md:px-0 ">
						A dedicated Front-end Developer based in Kaliningrad, Russia
					</h2>
					<p className="text-justify text-secondary font-montserrat font-semibold w-full px-5 md:text-[11px] md:w-[354px] md:px-0">
						As a junior Front-end Developer. I possess on impressive arsenal of
						skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
						in designing and maintaining responsive websites that offer a smooth
						user experience. My expertise lies in crafting dynamic, engaging
						interfaces through writing clean and optimized code and utilizing
						cutting-edge development tools and techniques. I am also a team
						player who thrives in collaborating with cross-functional teams to
						produce outstanding web applications.
					</p>
				</div>
			</motion.div>
		</Element>
	)
}

export default About
