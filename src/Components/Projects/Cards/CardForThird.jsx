import miraFoodVideo from "./../../../assets/Images/mira-food-video.mp4"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faPizzaSlice, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react"

export const CardForThird = () => {
	const videoRef = useRef(null)

	return (
		<section className="mb-14">
			<div className="flex flex-col  px-5  md:flex-row md:justify-center md:items-center md:gap-[100px] ">
				<div>
					<h3 className="text-base font-bold mb-4 text-center font-montserrat ">
						MIRA FOOD <FontAwesomeIcon icon={faPizzaSlice} style={{ color: "#ff662c" }} />
					</h3>
					<p className="font-semibold text-sm text-secondary mb-4 text-justify w-full leading-tight font-montserrat md:w-64">
						We are committed to providing you with the finest selection of groceries delivered right to your doorstep. Our mission is simple: to make
						grocery shopping effortless, convenient, and enjoyable for everyone.Browse through our categories, add items to your cart
					</p>
					<div className="flex justify-center gap-12 mb-5 md:flex-row md:justify-around ">
						<span className="font-bold text-base font-montserrat">Nextjs</span>
						<span className="font-bold text-base font-montserrat">Prisma</span>
					</div>
					<div className="flex justify-center gap-14 items-center mb-5 md:flex-row md:justify-between ">
						<a className="font-medium text-base" href="https://github.com/m1rxcle/mira-food">
							<span className="flex items-center font-montserrat">
								Code
								<FontAwesomeIcon className="ml-[4px]" icon={faGithub} />
							</span>
						</a>
						<a className="font-medium text-base" href="https://mira-food.vercel.app">
							<span className="flex items-center font-montserrat">
								Live Demo
								<FontAwesomeIcon className="ml-[4px]" icon={faUpRightFromSquare} style={{ color: "#272525" }} />
							</span>
						</a>
					</div>
				</div>
				<div
					className="cursor-pointer hover:scale-110 transition-all duration-200 ease-linear"
					onMouseEnter={() => videoRef.current?.play()}
					onMouseLeave={() => videoRef.current?.pause()}
				>
					<video
						ref={videoRef}
						className="onShadow rounded-xl mb-2 items-center mx-auto h-[230px] w-[300px] md:mb-0 md:mx-0 md:h-[235px] md:w-[333px]"
					>
						<source src={miraFoodVideo} type="video/mp4" />
					</video>
				</div>
			</div>
		</section>
	)
}
