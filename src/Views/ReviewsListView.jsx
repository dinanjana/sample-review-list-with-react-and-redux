/**
 * Created by dinanjanag on 8/5/19.
 */
import ReviewsList from '../Components/ReviewsList/ReviewsList';
import { connect } from "react-redux";
import React from 'react'

const mapStateToProps = state => ({ reviewList: state.reviewList });
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);


