import { withEhState } from "@foursk/eh-react-hooks";
import { interpolateRgb } from "d3-interpolate";
import React, { useRef, useState, useEffect } from "react";
import { Animated, PanResponder, Pressable, StyleSheet } from "react-native";
import LinearGradient from "react-native-web-linear-gradient";
import styled from "styled-components/native";
import { sDimensions, makeRsp, plugRsp } from "./style/responsive";
import { sTheme } from "./lib/theme";
import { useMemo } from "react";

const GRADIENT_COLOR_1 = "#BA2222";
const GRADIENT_COLOR_2 = "#C79A00";
const GRADIENT_COLOR_3 = "#4AB575";
const TRANSITION_DELAY = 500;
const SLIDER_MOVEMENT_MARGIN = 0.9;

// Mobile  w: 320-375, tab  w: 375-768, global  w: 320-1920
//         h: 568-812       h: 812-1024         h: 568-900
// Specs mobile:
// Width: 206-219 @ 332-414
// Height: 191-199 @ 719-896
// Specs Global:
// Width: 206.72-275 @ 1024-1920
// Height: 191-249 @ 905-1428
const Container = withEhState(
	sDimensions,
	withEhState(
		sTheme,
		styled.View`
			flex-direction: row;
			/*
      width: ${makeRsp(
				"width",
				plugRsp("mobile", 200, 230, 195, 240),
				plugRsp("tablet", 230, 270, 220, 280),
				plugRsp("global", 200, 275, 195, 275)
			)};
      */
			height: ${makeRsp(
				"height",
				plugRsp("mobile", 190, 200),
				plugRsp("tablet", 200, 240),
				plugRsp("global", 200, 249)
			)};
			margin-top: 16px;
		`
	)
);

// Mobile  w: 320-375, tab  w: 375-768, global  w: 320-1920
//         h: 568-812       h: 812-1024         h: 568-900
// Specs mobile:
// Width: 19.18-19.98 @ 332-414
// Specs Global:
// Width:  @ 1024-1920
const GradientSliderView = withEhState(
	sDimensions,
	styled(LinearGradient)`
		flex-direction: column;
		height: 100%;
		width: ${makeRsp(
			"width",
			plugRsp("mobile", 19.18, 20),
			plugRsp("tablet", 20, 22.57),
			plugRsp("global", 20, 25)
		)};
		align-items: center;
		justify-content: center;
		align-self: center;
		border-radius: 25px;
	`
);

// mobile: 27.54 - 29.02
// web: 27.54 - 37
const SlideAnswerSpacer = withEhState(
	sDimensions,
	styled.View`
		width: ${makeRsp(
			"width",
			plugRsp("mobile", 27, 30),
			plugRsp("tablet", 30, 33),
			plugRsp("global", 27.54, 37)
		)};
	`
);

// w.m: 160-170
// w.g: 160-213
const AnswerContainer = withEhState(
	sDimensions,
	styled(Animated.View)`
		flex-direction: column-reverse;
		width: ${makeRsp(
			"width",
			plugRsp("mobile", 160, 170, 160, 170),
			plugRsp("tablet", 170, 200, 170, 200),
			plugRsp("global", 180, 213)
		)};
		height: 100%;
		justify-content: space-evenly;
		align-items: center;
		background-color: #ffffff;
		border-radius: ${makeRsp("width", plugRsp("global", 19, 25))};
	`
);

// m.w: 16.11 - 16.78
// g.w: 16.11 - 21
const SliderButton = withEhState(
	sDimensions,
	styled(Animated.View)`
		width: ${makeRsp(
			"width",
			plugRsp("mobile", 16, 17),
			plugRsp("tablet", 17, 19),
			plugRsp("global", 16, 21, 16, 23)
		)};
		height: ${makeRsp(
			"width",
			plugRsp("mobile", 16, 17),
			plugRsp("tablet", 17, 19),
			plugRsp("global", 16, 21, 16, 23)
		)};
		border-radius: ${makeRsp(
			"width",
			plugRsp("mobile", 8, 8.5),
			plugRsp("tablet", 8.5, 9.5),
			plugRsp("global", 8, 10.5, 8, 11.5)
		)};
		background-color: #ffffff;
	`
);

const AnswerView = withEhState(
	sDimensions,
	styled(Pressable)`
		/* background-color: ${({ isSelected }) => isSelected} */
		width: 100%;
		height: ${({ height }) => height};
		justify-content: center;
		border-radius: ${makeRsp("width", plugRsp("global", 23, 25))};
		z-index: 1;
	`
);

//fontsize.m: 18-20
//fontsize.g: 18-24
const AnswerText = withEhState(
	sDimensions,
	styled(Animated.Text)`
		font-family: "Inter, Helvetica";
		font-style: normal;
		font-weight: ${({ isSelected }) => (isSelected ? 600 : 400)};
		font-size: ${makeRsp("width", plugRsp("global", 18, 24))};
		line-height: ${makeRsp("width", plugRsp("global", 22, 29))};
		text-align: center;
	`
);

const BackgroundColorView = withEhState(
	sDimensions,
	styled(Animated.View)`
		position: absolute;
		width: 100%;
		height: ${({ itemHeightPct }) => itemHeightPct};
		/* background-color: ${({ color }) => color}; */
		z-index: 0;
		top: ${({ topPos }) => topPos};
		border-radius: ${makeRsp("width", plugRsp("global", 23, 25))};
	`
);

const shadows = StyleSheet.create({
	boxShadow: {
		shadowColor: "rgb(62, 85, 90)",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 3,
	},
});

// Preferred 2 funcs over 1 func with an extra param everywhere
function startAnim(anim, toVal, duration) {
	Animated.timing(anim, {
		toValue: toVal,
		duration: duration ? duration : TRANSITION_DELAY,
		useNativeDriver: false,
	}).start();
}

function colorSwitch(anim, toVal) {
	Animated.timing(anim, {
		toValue: toVal,
		duration: TRANSITION_DELAY + 200,
		useNativeDriver: false,
	}).start();
}

function getCurrentAnswerIndex(choiceVal, totalItemAmt) {
	if (choiceVal <= 0) return 0;
	if (choiceVal >= 100) return totalItemAmt - 1;
	const ansIndex = Math.ceil(choiceVal / (100 / totalItemAmt)) - 1;
	return ansIndex;
}

function buttonLocToAnswer(buttonLoc, boxHeight, margin) {
	const val = 50 - (50 / ((boxHeight * margin) / 2)) * buttonLoc;
	if (val < 0) return 0;
	if (val > 100) return 100;
	return val;
}

function renderAnswerValues(
	answerArray,
	userAnswer,
	currentColor,
	slideAnim,
	colorAnimInterp,
	setCurrButtonLoc,
	buttonAnim,
	textBoxColorAnimInterp,
	answerNumber,
	answerBoxHeight
) {
	if (answerArray.length < 3 || answerArray.length > 7)
		return console.log(
			"Error! Need between 3 and 7 values, but got: ",
			answerArray.length
		);

	// gets the percentage height an item has relative to the view.
	const itemHeightPct = `${100 / answerArray.length}%`;
	return (
		<AnswerContainer>
			{answerArray.map((answer, idx) => (
				<AnswerView
					key={idx}
					onPress={() => {
						const limit = (answerBoxHeight * SLIDER_MOVEMENT_MARGIN) / 2;
						const newButtonLoc =
							(-(idx * ((limit * 2) / answerArray.length)) +
								limit -
								limit / answerArray.length) *
							(1 - SLIDER_MOVEMENT_MARGIN + 1);
						setCurrButtonLoc(newButtonLoc);
						startAnim(buttonAnim, newButtonLoc);
					}}
					/* isSelected can be shortened to just {currentColor}, but I fear it might be less
            robust. Just a gut feeling. */
					isSelected={currentColor}
					height={itemHeightPct}
				>
					<AnswerText
						/* Setting of color must be done inline. */
						style={{
							color: answerNumber === idx ? colorAnimInterp : "rgb(47, 70, 75)",
						}}
					>
						{answer}
					</AnswerText>
				</AnswerView>
			))}
			{/* Background for the text. This one DOES have to be absolute. Since the items
        are laid out in an evenly spaced manner, 1 item's height = totalHeight / # of items.
        This allows for a consistent animation, regardless of # of answer vals.  */}
			<BackgroundColorView
				itemHeightPct={itemHeightPct}
				topPos={0}
				style={{
					backgroundColor: textBoxColorAnimInterp,
					transform: [{ translateY: slideAnim }],
				}}
			/>
		</AnswerContainer>
	);
}

// METHOD FOR GETTING RGB VALUES SEPARATELY TO MANUALLY INTERPOLATE:
// var rgb = 'rgb(200, 12, 53)';
// rgb = rgb.replace(/[^\d,]/g, '').split(',');
// console.log(rgb);
function getInterpolatedColor(color_1, color_2, interp) {
	const colorInterpolator = interpolateRgb(color_1, color_2);
	return colorInterpolator(interp);
}

export default function VerticalAnswerSlider({ answerArray }) {
	// currButtonLoc ranges from - to + component height * margin / 2.
	const [currButtonLoc, setCurrButtonLoc] = useState(0);

	// currButtonLoc is converted to user's choice on a scale of 0-100
	// by inverting the value (*-1), incrementing currButtonLoc
	// by 100 and then dividing by 2 in a useEffect.
	// Initial state is 50 since it is the center value, which is where the button starts.
	const [userAnswer, setUserAnswer] = useState(50);
	// Base color starts at the middle as well, so the center color.
	const [currentColor, setCurrentColor] = useState(GRADIENT_COLOR_2);
	// AnswerBox is instantiated with a non-zero value, and then immediately updated to
	// reflect the answer box's height once it is rendered.
	const [answerBoxHeight, setAnswerBoxHeight] = useState(1);
	// Sets the currently selected answer as an index val between 0 and arr.length-1.
	const [answerNumber, setAnswerNumber] = useState(
		getCurrentAnswerIndex(userAnswer, answerArray.length)
	);
	// Sets the color of the colored box around the Answer Text values
	const textBoxColorAnim = useRef(new Animated.Value(0.5)).current;
	const textBoxColorAnimInterp = textBoxColorAnim.interpolate({
		inputRange: [0, 0.5, 1],
		outputRange: [GRADIENT_COLOR_1, GRADIENT_COLOR_2, GRADIENT_COLOR_3],
	});
	// Sets the color of the currently selected text
	const colorAnim = useRef(new Animated.Value(0)).current;
	const colorAnimInterp = colorAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ["rgb(47, 70, 75)", "rgb(255, 255, 255)"],
	});
	// slideAnim handles the location of the colored box around the Answer Text values
	const slideAnim = useRef(new Animated.Value(100)).current;
	// buttonAnim handles the location of the button inside the slider.
	const buttonAnim = useRef(new Animated.Value(0)).current;
	// gestureOffset must be an object because updating it inside the panResponder
	// leads to issue if it's created as a State.
	// UPDATE: should be able to change it to a state now, if preferred.
	const gestureOffset = { y: 0 };

	useEffect(() => {
		gestureOffset.y = currButtonLoc;
		// Set current answer value (0-100) based on button location.
		// Current buttonLoc range: [-90, 90].
		setUserAnswer(
			buttonLocToAnswer(currButtonLoc, answerBoxHeight, SLIDER_MOVEMENT_MARGIN)
		);
		// Check if the new answer value changes the selection item, so that
		// A text color change can trigger on change.
		setAnswerNumber(getCurrentAnswerIndex(userAnswer, answerArray.length));
		setCurrentColor(
			userAnswer < 50
				? getInterpolatedColor(
						GRADIENT_COLOR_3,
						GRADIENT_COLOR_2,
						userAnswer / 50
				  )
				: getInterpolatedColor(
						GRADIENT_COLOR_2,
						GRADIENT_COLOR_1,
						userAnswer / 50 - 1
				  )
		);
		// Update the offset in case the user clicked on a text answer.
		gestureOffset.y = currButtonLoc;
		// Animation to change the colored box's color around text answers.
		startAnim(textBoxColorAnim, -(userAnswer - 100) / 100);
		// Animation to move the colored box around text answers.
		startAnim(
			slideAnim,
			getCurrentAnswerIndex((userAnswer - 100) * -1, answerArray.length) *
				(answerBoxHeight / answerArray.length)
		);
	}, [currButtonLoc, userAnswer, answerBoxHeight]);

	useEffect(() => {
		colorAnim.setValue(0);
		colorSwitch(colorAnim, 1);
	}, [answerNumber, answerBoxHeight, colorAnim]);

	const panResponder = useMemo(
		() =>
			PanResponder.create({
				// Ask to be the responder:
				onStartShouldSetPanResponder: (evt, gestureState) => true,
				onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
				onMoveShouldSetPanResponder: (evt, gestureState) => true,
				onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

				onPanResponderGrant: (evt, gestureState) => {
					// The gesture has started. Show visual feedback so the user knows
					// what is happening!
					// gestureState.d{x,y} will be set to zero now
				},
				onPanResponderMove: (evt, gestureState) => {
					// The most recent move distance is gestureState.move{X,Y}
					// The accumulated gesture distance since becoming responder is
					// gestureState.d{x,y}
					if (
						gestureState.dy + gestureOffset.y >=
							-(0.5 * answerBoxHeight * SLIDER_MOVEMENT_MARGIN) &&
						gestureState.dy + gestureOffset.y <=
							0.5 * answerBoxHeight * SLIDER_MOVEMENT_MARGIN
					) {
						buttonAnim.setValue(gestureOffset.y + gestureState.dy);
					}
				},
				onPanResponderTerminationRequest: (evt, gestureState) => true,
				onPanResponderRelease: (evt, gestureState) => {
					// The user has released all touches while this view is the
					// responder. This typically means a gesture has succeeded
					let limit = 0.5 * answerBoxHeight * SLIDER_MOVEMENT_MARGIN;

					// "Snaps" the slider button to the limit value if the button is within a certain
					// percentage of its max-min.
					let snapVal = 1.05;
					let totalOffset = gestureState.dy + gestureOffset.y;
					if (totalOffset * snapVal < -limit) {
						if (!(totalOffset < -limit)) {
							buttonAnim.setValue(-limit);
						}
						gestureOffset.y = -limit;
						setCurrButtonLoc(-limit);
					} else if (totalOffset * snapVal > limit) {
						if (!(totalOffset > limit)) {
							buttonAnim.setValue(limit);
						}
						gestureOffset.y = limit;
						setCurrButtonLoc(limit);
					} else {
						let tempOffset =
							totalOffset * snapVal > limit
								? limit
								: totalOffset * snapVal < -limit
								? -limit
								: totalOffset;
						gestureOffset.y = tempOffset;
						setCurrButtonLoc(tempOffset);
					}
				},
				onPanResponderTerminate: (evt, gestureState) => {
					// Another component has become the responder, so this gesture
					// should be cancelled
				},
				onShouldBlockNativeResponder: (evt, gestureState) => {
					// Returns whether this component should block native components from becoming the JS
					// responder. Returns true by default. Is currently only supported on android.
					return true;
				},
			}),
		[currButtonLoc, answerBoxHeight]
	);
	return (
		<Container>
			<GradientSliderView
				colors={[GRADIENT_COLOR_1, GRADIENT_COLOR_2, GRADIENT_COLOR_3]}
				locations={[0, 0.4964, 0.9929]}
			>
				<SliderButton
					style={{ transform: [{ translateY: buttonAnim }] }}
					{...panResponder.panHandlers}
				/>
			</GradientSliderView>
			<SlideAnswerSpacer />
			<AnswerContainer
				style={shadows.boxShadow}
				onLayout={(e) => {
					setAnswerBoxHeight(e.nativeEvent.layout.height);

					slideAnim.setValue(
						(answerBoxHeight / answerArray.length) *
							(getCurrentAnswerIndex(userAnswer, answerArray.length) - 1)
					);
				}}
			>
				{renderAnswerValues(
					answerArray,
					userAnswer,
					currentColor,
					slideAnim,
					colorAnimInterp,
					setCurrButtonLoc,
					buttonAnim,
					textBoxColorAnimInterp,
					answerNumber,
					answerBoxHeight
				)}
			</AnswerContainer>
		</Container>
	);
}
