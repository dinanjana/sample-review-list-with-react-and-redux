import React from 'react';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ReviewsListView from './Views/ReviewsListView';
import ButtonsComp from './Views/ButtonsView';
import { Col, Row } from 'react-bootstrap';

function styles () {
    return {
        marginTop:'20px'
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container" style={styles()}>
                <Row>
                  <Col md={4} mdOffset={4}>
                    <ReviewForm />
                    <ReviewsListView />
                  </Col>
                </Row>
                <ButtonsComp/>
            </div>
        )
    }
}

export default App
