import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { connect } from "react-redux";
import Review from './Review';

const styles = {
    wrapper: {
        marginTop: '20px'
    }
};



const ReviewsList = (props) => {
    const {reviewList} = props;
  return (
    <div style={styles.wrapper}>
        <ListGroup>
            {/*<h5>Display the list of reviews here...</h5>*/}
            { reviewList.map(
              (review) => (
                <Review
                    body={review.body}
                    rating={review.rating}
                />))
            }
        </ListGroup>
    </div>
  );
};

export default ReviewsList;