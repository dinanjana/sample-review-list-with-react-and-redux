import React from 'react'
import { ListGroupItem, } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import StarRatingComponent from 'react-star-rating-component';

const Review = ({ body, rating, id, select, deleteReview, selected }) => {
  return (
    <ListGroupItem onClick = {() => select(id)}>
      <p>{body}</p>
      <StarRatingComponent
        name="star-rating"
        value={rating}
        editing={false}
      />
      <Button disabled={ selected !== id } onClick={() => deleteReview(id)}>Delete</Button>
    </ListGroupItem>
  )
};

export default Review