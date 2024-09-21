import desktop from "./../../assets/Images/about.png"
import { Element } from "react-scroll"

const About = () => {
	return (
		<Element name="about" className="mb-[230px]">
			<div className="flex justify-center items-start gap-16 ">
				<img className="h-[217px] w-[304px]" src={desktop} loading="lazy" />
				<div className="flex flex-col ">
					<h1 className="text-xs text-primary mb-1 font-bold font-montserrat">
						ABOUT ME
					</h1>
					<h2 className="font-bold text-lg mb-1 leading-tight font-montserrat">
						A dedicated Front-end Developer
						<br /> based in Kaliningrad, Russia
					</h2>
					<p className="text-[11px] w-[354px] text-secondary font-montserrat">
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
