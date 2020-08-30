import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

const Box = styled.div`
	background-color: white;
	height: ${props => props.theme.flexboxgrid.boxSize}rem;
	border: ${props => props.theme.flexboxgrid.boxBorderSize}rem solid red;
`;

const BigBox = styled(Box)`
	height: ${props =>
		props.theme.flexboxgrid.boxSize * 2 +
		props.theme.flexboxgrid.boxBorderSize * 2 +
		props.theme.flexboxgrid.gutterWidth}rem;
`;

const StyledRow = styled(Row)`
	/* if nothing provided or gutter_bottom */
	padding-bottom: ${props =>
		props.gutter_top === undefined
			? props.theme.flexboxgrid.gutterWidth / 2
			: 0}rem;
	/* if nothing provided or gutter_top */
	padding-top: ${props =>
		props.gutter_bottom === undefined
			? props.theme.flexboxgrid.gutterWidth / 2
			: 0}rem;
`;

const theme = {
	flexboxgrid: {
		// Defaults
		gridSize: 12, // columns
		gutterWidth: 2, // rem
		outerMargin: 2, // rem
		mediaQuery: "only screen",
		container: {
			sm: 46, // rem
			md: 61, // rem
			lg: 76 // rem
		},
		breakpoints: {
			xs: 0, // em
			sm: 48, // em
			md: 64, // em
			lg: 75 // em
		},
		boxSize: 3, // em
		boxBorderSize: 0.25 // em
	}
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Grid fluid>
				<StyledRow>
					<Col xs={2}>
						<Box></Box>
					</Col>
					<Col xs={8}>
						<Box></Box>
					</Col>
					<Col xs={2}>
						<Box></Box>
					</Col>
				</StyledRow>
				<StyledRow>
					<Col xs={4} sm={3} md={2}>
						<Box></Box>
					</Col>
					<Col xs={4} sm={6} md={8}>
						<Box></Box>
					</Col>
					<Col xs={4} sm={3} md={2}>
						<Box></Box>
					</Col>
				</StyledRow>
				<StyledRow>
					<Col xs={4} sm={3} md={2}>
						<StyledRow gutter_bottom>
							<Col xs>
								<Box></Box>
							</Col>
						</StyledRow>
						<StyledRow gutter_top>
							<Col xs>
								<Box></Box>
							</Col>
						</StyledRow>
					</Col>
					<Col xs={4} sm={6} md={8}>
						<BigBox></BigBox>
					</Col>
					<Col xs={4} sm={3} md={2}>
						<BigBox></BigBox>
					</Col>
				</StyledRow>
			</Grid>
		</ThemeProvider>
	);
};

export default App;
