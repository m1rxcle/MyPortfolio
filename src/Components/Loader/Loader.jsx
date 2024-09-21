import "./style.css"

const Loader = () => {
	return (
		<div>
			<h1 className="text-3xl text-dark flex items-center justify-center h-[100vh] font-bold font-montserrat transition-all duration-150 ease-out ">
				<span className="transition-all duration-150 ease-out m">M</span>
				<span className="transition-all duration-150 ease-out  i">1</span>
				<span className="transition-all duration-150 ease-out r">R</span>
				<span className="transition-all duration-150 ease-out x">X</span>
				<span className="transition-all duration-150 ease-out  c">C</span>
				<span className="transition-all duration-150 ease-out l">L</span>
				<span className="transition-all duration-150 ease-out e">E</span>
			</h1>
		</div>
	)
}

export default Loader
