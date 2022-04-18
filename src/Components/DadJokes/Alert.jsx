
import React, { Component } from 'react'
import Button from '@bit/react-bootstrap.react-bootstrap.button'
import Alert from '@bit/react-bootstrap.react-bootstrap.alert'
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';

class Example extends React.Component {
	constructor(props) {
		super(props);

		this.state = { show: true };
	}

	render() {
		const handleHide = () => this.setState({ show: false });
		const handleShow = () => this.setState({ show: true });

return (
  <>
    <Alert show={this.state.show} variant="success" style={{ maxWidth: 500 }}>
      <Alert.Heading>How's it going?!</Alert.Heading>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
        eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
        amet fermentum.
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={handleHide} variant="outline-success">
          Close me ya'll!
        </Button>
      </div>
    </Alert>

    {!this.state.show && <Button onClick={handleShow}>Show Alert</Button>}
  </>
);
}
}

export default Example