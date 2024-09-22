import me from "./../../assets/Images/Me.jpeg"
import handShake from "./../../assets/Icons/handShake.png"
import rusFlag from "./../../assets/Icons/flag.png"
import gitHub from "./../../assets/Icons/gitHub.png"
import telegram from "./../../assets/Icons/telegram.png"
import css from "./../../assets/Icons/css.png"
import js from "./../../assets/Icons/js.png"
import react from "./../../assets/Icons/react.png"
import ts from "./../../assets/Icons/ts.png"
import tailwind from "./../../assets/Icons/tailwind.png"
import sass from "./../../assets/Icons/sass.png"
import html from "./../../assets/Icons/html.png"

import { Element } from "react-scroll"

import "./style.css"

const Header = () => {
	return (
		<>
			<Element name="home" className="min-h-[891px] ">
				<header className="flex flex-col text-center mb-96 mt-48 md:flex-row md:justify-center md:items-center ">
					<div className="md:mr-32">
						<h2 className="text-4xl font-montserrat font-extrabold mb-[38px] md:text-start  ">
							Front-End React
							<br />
							<span className="inline-flex  items-center">
								Developer
								<img className="ml-2 pt-2" src={handShake} alt="handShake" />
							</span>
						</h2>

						<p className="font-montserrat px-5 text-base text-secondary mb-[38px] md:text-start md:w-[400px] md:px-0">
							Hi, Im Denis Novikov. A passionate Front-end React Developer based
							in Kaliningrad,
							<span className="inline-flex items-center  ">
								Russia <img className="ml-2 " src={rusFlag} alt="" />
							</span>
						</p>
						<div className="flex justify-center mb-10 md:flex-row md:justify-start md:mb-0 ">
							<a target="_blank" href="https://github.com/m1rxcle">
								<img
									src={gitHub}
									className="w-[35px] h-[30px] mr-2 rounded-md"
								/>
							</a>
							<a
								target="_blank"
								href="https://web.telegram.org/k/#@noonebesidesu"
							>
								<img src={telegram} className="w-[30px] h-[30px] rounded-md" />
							</a>
						</div>
					</div>
					<img
						className="mx-auto md:mx-0 w-[232px] h-[230px] rounded-full border-4 border-dark transition-transform duration-500 ease-out floating-border-on-hover"
						src={me}
					/>
				</header>
				<footer className="hidden md:flex md:justify-center md:items-center ">
					<div className="mr-14">
						<div className="flex gap-3 ">
							<h3 className="font-semibold font-montserrat text-lg">
								Tech Stack
							</h3>
							<p>|</p>
						</div>
					</div>
					<div className="flex gap-10 ">
						<p
							className="transition-transform duration-500 ease-out bigger"
							href="#"
						>
							<img src={css} alt="css" />
						</p>
						<p
							className="transition-transform duration-500 ease-out bigger"
							href="#"
						>
							<img src={js} alt="js" />
						</p>
						<p
							className="transition-transform duration-500 ease-out bigger"
							href="#"
						>
							<img src={react} alt="react" />
						</p>
						<p
							className="transition-transform duration-500 ease-out bigger"
							href="#"
						>
							<img src={ts} alt="ts" />
						</p>
						<p
							className="transition-transform duration-500 ease-out bigger"
							href="#"
						>
							<img
								className="w-[35px] h-[30px]"
								src={tailwind}
								alt="tailwind"
							/>
						</p>
						<p
							className="transition-transform duration-500 ease-out bigger"
							href="#"
						>
							<img src={sass} alt="sass" />
						</p>
						<p
							className="transition-transform duration-500 ease-out bigger"
							href=""
						>
							<img src={html} alt="" />
						</p>
					</div>
				</footer>
			</Element>
		</>
	)
}

export default Header
