import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App({ signOut, user }) {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>Hello React App with AWS</h2>
				{user ? (
					<>
						<h3>私は権限を持っています:{user.username}</h3>
						<button onClick={signOut}></button>
					</>
				) : (
					<h3>権限を持っていません</h3>
				)}
			</header>
		</div>
	);
}

export default withAuthenticator(App);

// https://youtu.be/m9ZjW1md_OQ?t=770
// 必ずこのディレクトリに移動してから実行すること
