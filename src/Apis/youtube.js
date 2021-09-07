import axios from "axios";

const KEY = "AIzaSyCetWCO3QN_lZnx8sALpxYmdkBlLNaNWeg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

// youtube.get('/search')
