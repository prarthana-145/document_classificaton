import React, { useState } from "react"
import "./App.css"
import Uploader from "./Uploader"

function App() {
	const [result, setResult] = useState(null)

	return (
		<div className="App">
			<h1>🧾 Document Classifier</h1>
			<p>Upload a receipt, payslip, cheque, or tax form and classify it.</p>
			<Uploader onResult={setResult} />
			{result && (
				<div className="result">
					<h3>Prediction:</h3>
					<p>{result}</p>
				</div>
			)}
		</div>
	)
}

export default App
