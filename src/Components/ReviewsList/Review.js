import React from 'react'
import { ListGroupItem, } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

const placeholder = {
        "body": "Morbi mollis vehicula dolor at auctor.",
        "stars": 5
};

const Review = ({ body, rating }) => {
  return (
    <ListGroupItem>
      <p>{body}</p>
      <StarRatingComponent
        name="star-rating"
        value={rating}
        editing={false}
      />
    </ListGroupItem>
  )
};

export default Review