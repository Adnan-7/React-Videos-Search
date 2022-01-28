import axios from 'axios';
const KEY = 'AIzaSyCJ9HDWWFF29xUQRxBjD2a7yjYLNOwdsag';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 20,
    key: KEY,
  },
});
