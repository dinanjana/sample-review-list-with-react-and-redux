/**
 * Created by dinanjanag on 8/5/19.
 */
import axios from 'axios';
import { BASE_URL } from '../Constants';

const makeReq = async (type, url, body) => {
  try {
    let response;
    switch (type) {
      case 'GET': {
        response = await axios.get(url);
        break;
      } case 'POST': {
        response = await axios.post(url, body);
        break;

      } case 'DELETE': {
        response = await axios.delete(url, body);
        break;
      } default: {
        response = null;
      }
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getReviews = async () => {
  return makeReq('GET', BASE_URL);
};

const deleteReviews = async () => {};

const saveReview = async () => {};

export {
  getReviews,
  deleteReviews,
  saveReview,
}
