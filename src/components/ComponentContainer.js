import styled from "styled-components";

const Container = styled.div`
	border: 2px solid;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 8px;
	background-color: #d3d3d3;
	border-radius: 6px;
`;

const ContainerTitle = styled.h2`
	text-align: left;
	border-bottom: 1px solid;
	padding-left: 8px;
	padding-right: 8px;
`;

export default function ComponentContainer({ title, children }) {
	return (
		<Container>
			<ContainerTitle>{title}</ContainerTitle>
			{children}
		</Container>
	);
}
