/**
 * Created by dinanjanag on 8/5/19.
 */
import { createStore, applyMiddleware } from 'redux';
import { LOAD_REVIEWS_FULFILLED, SAVE_REVIEW_FULFILLED, SELECT_REVIEW, DELETE_REVIEW_FULFILLED, ENTER_REVIEW } from  '../Events';
import { getNextIndex, getCurrentPageNumber } from '../Logic';
import { MAX_NUMBER_OF_REVIEWS } from '../Constants';
import promise from 'redux-promise-middleware';
import _ from 'lodash';

const initialState = {
  reviewList: [],
  selectedReview: null,
  pagination: {
    total: 0,
    index: 0,
    currentPageNumber: 1,
  },

  review: {
    body: '',
    rating: 0,
  },

  error: null,
};

const errorReducer = (state, action) => {
  return _.set(state, 'error', action.payload.error);
};

const reducer = (state = initialState, action) => {
  console.log(`Event fired: ${JSON.stringify(action)}`);

  if (_.has(action, 'payload.error')) {
    return errorReducer(state, action);
  }

  switch (action.type) {
    case LOAD_REVIEWS_FULFILLED: {
      let nextIndex = getNextIndex(
        action.payload.data.length, state.pagination.index,
        action.payload.initiate ,action.payload.next);
      return {
        reviewList: action.payload.data.slice(
          nextIndex, nextIndex + MAX_NUMBER_OF_REVIEWS),
        selectedReview: null,
        pagination: {
          total: action.payload.data.length,
          index: nextIndex,
          currentPageNumber: getCurrentPageNumber(
            action.payload.data.length, nextIndex),
        },
        error: state.error,
      }
    }

    case ENTER_REVIEW: {
      return _.chain(state)
      .set('state.review.body', action.payload.body)
      .set('state.review.rating', action.payload.rating)
      .value();
    }

    case SAVE_REVIEW_FULFILLED: {
      return _.chain(state)
      .clone(state)
      .set('state.review.body', '')
      .set('state.review.rating', 0)
      .value();
    }

    case SELECT_REVIEW: {
      return _.chain(state)
      .clone()
      .set('selectedReview', action.payload.id)
      .value();
    }

    case DELETE_REVIEW_FULFILLED: {
      return _.chain(state).clone().set('reviewList')
    }

    default:
      return state;
  }
};

const Reviews = createStore(reducer, initialState, applyMiddleware(promise));

export default Reviews;

