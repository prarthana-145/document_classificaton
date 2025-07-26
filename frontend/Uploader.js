import React, { useState } from "react"

export default function Uploader({ onResult }) {
	const [file, setFile] = useState(null)
	const [preview, setPreview] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const onFileChange = (e) => {
		const f = e.target.files[0]
		if (!f) return
		setFile(f)
		setPreview(URL.createObjectURL(f))
		setError(null)
		onResult(null)
	}

	const onUpload = async () => {
		if (!file) return
		setLoading(true)
		setError(null)
		try {
			const data = new FormData()
			data.append("file", file)

			const res = await fetch("http://localhost:8000/classify", {
				method: "POST",
				body: data,
			})
			const json = await res.json()
			onResult(json.document_type)
		} catch (err) {
			setError("Error: Could not upload.")
		} finally {
			setLoading(false)
		}
	}

	return (
		<div>
			<input type="file" accept="image/*" onChange={onFileChange} />
			{preview && (
				<img
					src={preview}
					alt="preview"
					style={{ maxWidth: "100%", marginTop: "1rem" }}
				/>
			)}
			<br />
			<button onClick={onUpload} disabled={loading}>
				{loading ? "Classifying..." : "Classify"}
			</button>
			{error && <p style={{ color: "red" }}>{error}</p>}
		</div>
	)
}
