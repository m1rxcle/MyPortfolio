import { Button } from "antd"
import { Modal } from "antd"

// eslint-disable-next-line react/prop-types
const FormModal = ({ open, onClose, loading, handleOk }) => {
	const onSubmit = async (event) => {
		event.preventDefault()
		const formData = new FormData(event.target)

		formData.append("access_key", "ae333b61-9c76-48e8-96bd-24176e3dcd81")

		const object = Object.fromEntries(formData)
		const json = JSON.stringify(object)

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		}).then((res) => res.json())

		if (res.success) {
			console.log("Success", res)
		} else {
			console.log("Error", res)
		}
	}

	return (
		<Modal
			footer={null}
			width={400}
			open={open}
			onCancel={onClose}
			title="Connect with me"
		>
			<form onSubmit={onSubmit} className="flex flex-col">
				<label className="mb-2 font-montserrat font-bold">Your mail</label>
				<input
					className="p-1 outline-secondary border-secondary mb-2  rounded-md"
					name="email"
					type="email"
					placeholder="@mail"
					required
					autoComplete="off"
				/>
				<label className="mb-2 font-montserrat font-bold">Your number</label>
				<input
					className="p-1 outline-secondary border-secondary mb-2 rounded-md"
					name="phone"
					type="tel"
					placeholder="+7 (921) 263-27-95"
					required
					autoComplete="off"
				/>
				<label className="mb-2 font-montserrat font-bold">Your message</label>
				<textarea
					className="p-1 outline-secondary border-secondary mb-2  rounded-md "
					placeholder="message..."
					required
					autoComplete="off"
					name="text"
				></textarea>
				<div className="text-end">
					<Button type="primary" onClick={onClose}>
						Back
					</Button>
					<Button
						loading={loading}
						className="ml-2"
						onClick={handleOk}
						type="primary"
						htmlType="submit"
					>
						Submit
					</Button>
				</div>
			</form>
		</Modal>
	)
}

export default FormModal
