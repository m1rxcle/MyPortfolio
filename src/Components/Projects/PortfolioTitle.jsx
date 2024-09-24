import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PortfolioTitle = () => {
	return (
		<div className="text-center w-full md:text-start md:pl-20 lg:text-start lg:pl-40 xl:text-start xl:pl-80 2xl:text-start 2xl:pl-[30%]">
			<h1 className="font-bold text-xs text-primary mb-2 font-montserrat md:mb-4">
				PORTFOLIO
			</h1>
			<h2 className="px-5 font-bold text-base text-wrap font-montserrat mb-2 md:px-0 md:mb-7">
				Each project is a unique piece of development{" "}
				<FontAwesomeIcon
					className="ml-[4px]"
					icon={faPuzzlePiece}
					style={{ color: "#B197FC" }}
				/>
			</h2>
		</div>
	)
}

export default PortfolioTitle
