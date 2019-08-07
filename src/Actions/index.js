/**
 * Created by dinanjanag on 8/5/19.
 */
import _ from 'lodash';
import { getReviews, deleteReview, saveReview } from '../Repository/Review';
import {
  LOAD_REVIEWS,
  SELECT_REVIEW,
  DELETE_REVIEW,
  SAVE_REVIEW,
  ENTER_REVIEW
} from '../Events';


const loadReviews = (next, initiate = false) => ({
  type: LOAD_REVIEWS,
  payload: getReviews()
    .then(data => ({ next, initiate, data: _.sortBy(data, 'id') }))
    .catch(e => ({error: e})),
});

const enterReview = (body, rating) => ({
  type: ENTER_REVIEW,
  payload: { body, rating },
});

const saveReviewInDB = (body, rating) => {
  const isValid = body !== '' && rating !== 0;
  const payload = { type: SAVE_REVIEW };
  if (isValid) {
    return payload;
  } else {
    payload.error = true;
    return payload;
  }
};

const selectReview = (id) => ({
  type: SELECT_REVIEW,
  payload: {id},
});

const deleteReviewInDB = (dispatch, id) => {
  deleteReview(id);
  dispatch(loadReviews(false, true));
};

export {
  loadReviews,
  enterReview,
  saveReviewInDB,
  selectReview,
  deleteReviewInDB,
}

