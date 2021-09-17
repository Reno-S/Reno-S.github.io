import "./App.css";
import VerticalAnswerSlider from "./VerticalSlider";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

function App() {
	return (
		<Container className="App">
			<h1>React Native + React Native web Answer Slider</h1>
			<h2>How likely are you to recommend this product?</h2>
			<VerticalAnswerSlider
				answerArray={[
					"Very likely",
					"Likely",
					"Neutral",
					"Unlikely",
					"Very unlikely",
				]}
			/>
		</Container>
	);
}

export default App;
