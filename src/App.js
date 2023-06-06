import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Hello React App with AWS</h2>
			</header>
		</div>
	);
}

export default App;

// https://youtu.be/m9ZjW1md_OQ?t=770
// 必ずこのディレクトリに移動してから実行すること
