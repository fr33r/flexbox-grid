import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'

const Box = (props) => {
	return (
		<div className={props.big !== undefined ? "big-box" : "box"}></div>
	)
}

const App = () => {
  return (
	  <Grid fluid>
		  <Row className="gutter">
			  <Col xs={2}>
				  <Box></Box>
			  </Col>
			  <Col xs={8}>
				  <Box></Box>
			  </Col>
			  <Col xs={2}>
				  <Box></Box>
			  </Col>
		  </Row>
		  <Row className="gutter">
			  <Col xs={4} sm={3} md={2}>
				  <Box></Box>
			  </Col>
			  <Col xs={4} sm={6} md={8}>
				  <Box></Box>
			  </Col>
			  <Col xs={4} sm={3} md={2}>
				  <Box></Box>
			  </Col>
		  </Row>
		  <Row className="gutter">
			  <Col xs={4} sm={3} md={2}>
				  <Row className="bottom-gutter">
					  <Col xs>
						  <Box></Box>
					  </Col>
				  </Row>
				  <Row className="top-gutter">
					  <Col xs>
						  <Box></Box>
					  </Col>
				  </Row>
			  </Col>
			  <Col xs={4} sm={6} md={8}>
				  <Box big></Box>
			  </Col>
			  <Col xs={4} sm={3} md={2}>
				  <Box big></Box>
			  </Col>
		  </Row>
	  </Grid>
  );
}

export default App;
