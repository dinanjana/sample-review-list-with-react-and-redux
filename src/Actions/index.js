/**
 * Created by dinanjanag on 8/5/19.
 */

import { getReviews, deleteReviews, saveReview } from '../Repository/Review';
import { LOAD_REVIEWS, SELECT_REVIEW, DELETE_REVIEW, SAVE_REVIEW } from  '../Events';


const loadReviews = (next, initiate = false) => ({
  type: LOAD_REVIEWS,
  payload: getReviews().then(data => ({ next, initiate, data })).catch(e => ({error: e})),
});

export {
  loadReviews,
}

