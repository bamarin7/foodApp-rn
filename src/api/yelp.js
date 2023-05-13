import axios from "axios";

export default axios.create({
  baseURL:'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer bGmn2yFpOOOpxPgvKzpFFK9kLSCQJfaajf1Nr0gZuPn62dCl5iK6KcXYTRi0oKMODHO_0ZMW9EHzPRQtvTbdBKfI3xCv7R-bnrcQdc1Bcs0nGgvieALQu-jauDbcY3Yx'
  }
});
