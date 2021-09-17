import "./App.css";
import VerticalAnswerSlider from "./VerticalSlider";
import styled from "styled-components";
import ComponentContainer from "./components/ComponentContainer";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const TextContainer = styled.div`
	width: 100%;
	margin-left: 5%;
`;

const IntroText = styled.p`
	color: #871f78;
	text-align: left;
`;

function App() {
	return (
		<Container className="App">
			<h1>React Native Web Portfolio</h1>
			<TextContainer>
				<IntroText>
					Hi, I'm Reno. Below are some of the React (Native) components I have
					made in the past 1.5 years.
				</IntroText>
				<IntroText>
					17-09: Working on extracting components from one of my apps to this
					portfolio. Should be online by 20-09.
				</IntroText>
			</TextContainer>
			<ComponentContainer
				title={"React Native + React Native web Answer Slider"}
			>
				<h3>How likely are you to recommend this product?</h3>
				<VerticalAnswerSlider
					answerArray={[
						"Very likely",
						"Likely",
						"Neutral",
						"Unlikely",
						"Very unlikely",
					]}
				/>
			</ComponentContainer>
		</Container>
	);
}

export default App;
