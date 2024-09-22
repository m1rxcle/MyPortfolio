import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons"
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

import { Element } from "react-scroll"
import FormModal from "./Modal"

const Contacts = () => {
	const [loading, setLoading] = useState(false)
	const [open, setOpen] = useState(false)
	const showModal = () => {
		setOpen(true)
	}
	const handleOk = () => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			setOpen(false)
		}, 3000)
	}
	const handleCancel = () => {
		setOpen(false)
	}
	return (
		<Element name="contacts" className="mb-[221px] min-h-44">
			<div className="text-center w-full md:text-start md:pl-8 lg:text-start lg:pl-40 xl:text-start xl:pl-80 2xl:text-start 2xl:pl-[30%]">
				<h1 className="font-bold text-xs text-primary mb-4 font-montserrat">
					CONTACTS
				</h1>
				<h2 className="font-bold text-base mb-7 font-montserrat">
					Don`t be shy! Hit me up!
					<FontAwesomeIcon
						className="ml-[4px]"
						icon={faHandPointDown}
						flip="horizontal"
						style={{ color: "#000000" }}
					/>
				</h2>
			</div>
			<div className="flex justify-center md:pr-[14%] ">
				<div className="flex flex-col items-start md:flex-row md:justify-center md:items-center md:gap-4 md:mr-7">
					<FontAwesomeIcon
						icon={faMapLocationDot}
						style={{ color: "#000000" }}
					/>
					<p
						className="flex flex-col text-xs font-bold font-montserrat mb-5"
						href="#"
					>
						<span className=" font-montserrat">Location</span>
						<span className="text-secondary font-montserrat">
							Kaliningrad,Russia
						</span>
					</p>
					<div className="flex justify-center items-center gap-4">
						<FontAwesomeIcon icon={faEnvelope} style={{ color: "#121212" }} />
					</div>
					<a
						onClick={showModal}
						className="flex flex-col text-xs font-bold"
						href="#"
					>
						<span className=" font-montserrat">Email</span>
						<span className="text-secondary font-montserrat">
							noonebesideu@gmail.com
						</span>
					</a>
					<FormModal
						loading={loading}
						handleOk={handleOk}
						open={open}
						onClose={handleCancel}
					/>
				</div>
			</div>
		</Element>
	)
}

export default Contacts
