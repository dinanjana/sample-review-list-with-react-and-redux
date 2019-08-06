/**
 * Created by dinanjanag on 8/5/19.
 */
import { createStore, applyMiddleware } from 'redux';
import { LOAD_REVIEWS_FULFILLED, SAVE_REVIEW, DELETE_REVIEW, SELECT_REVIEW } from  '../Events';
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
    case LOAD_REVIEWS_FULFILLED:
      try {
        let nextIndex = getNextIndex(
          action.payload.data.length, state.index,
          action.payload.initiate ,action.payload.next);
        return {
          reviewList: action.payload.data.slice(
            nextIndex, nextIndex+MAX_NUMBER_OF_REVIEWS),
          selectedReview: null,
          pagination: {
            total: action.payload.data.length,
            index: nextIndex,
            currentPageNumber: getCurrentPageNumber(
              action.payload.length, nextIndex),
          },
          error: state.error,
        }
      } catch (e) {
        console.error(e);
      }

    default:
      return state;
  }
};

const Reviews = createStore(reducer, initialState, applyMiddleware(promise));

export default Reviews;

