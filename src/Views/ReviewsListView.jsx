/**
 * Created by dinanjanag on 8/5/19.
 */
import ReviewsList from '../Components/ReviewsList/ReviewsList';
import { connect } from "react-redux";
import React from 'react'
import { selectReview, deleteReviewInDB } from "../Actions";

const mapStateToProps = state => ({ reviewList: state.reviewList, selected: state.selectedReview });
const mapDispatchToProps = dispatch => ({
  select: (id) => dispatch(selectReview(id)),
  deleteReview: (id) => deleteReviewInDB(dispatch, id),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);


