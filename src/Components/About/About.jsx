import desktop from "./../../assets/Images/about.png"
import { Element } from "react-scroll"

const About = () => {
	return (
		<Element name="about" className="mb-[230px]">
			<div className="text-center w-full md:flex md:justify-center md:items-start md:gap-16 ">
				<img
					className="hidden md:block md:h-[217px] md:w-[304px]"
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
					<p className="text-justify text-secondary font-montserrat w-full px-5 md:text-[11px] md:w-[354px] md:px-0">
						As a junior Front-end Developer. I possess on impressive arsenal of
						skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
						in designing and maintaining responsive websites that offer a smooth
						user experience. My expertise lies in crafting dynamic, engaging
						interfaces through writing clean and optimized code and utilizing
						cutting-edge development tools and techniques. I am also a team
						player who thrives in colloborating with cross-functional teams to
						produce outstanding web applications.
					</p>
				</div>
			</div>
		</Element>
	)
}

export default About
