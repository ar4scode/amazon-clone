import zeroStar from "../assets/ratings/rating-0.png";
import zeroHalfStar from "../assets/ratings/rating-05.png";
import oneStar from "../assets/ratings/rating-10.png";
import oneHalfStar from "../assets/ratings/rating-15.png";
import twoStar from "../assets/ratings/rating-20.png";
import twoHalfStar from "../assets/ratings/rating-25.png";
import threeStar from "../assets/ratings/rating-30.png";
import threeHalfStar from "../assets/ratings/rating-35.png";
import fourStar from "../assets/ratings/rating-40.png";
import fourHalfStar from "../assets/ratings/rating-45.png";
import fiveStar from "../assets/ratings/rating-50.png";

// Map ratings to images
const ratingImages = {
  0: zeroStar,
  0.5: zeroHalfStar,
  1: oneStar,
  1.5: oneHalfStar,
  2: twoStar,
  2.5: twoHalfStar,
  3: threeStar,
  3.5: threeHalfStar,
  4: fourStar,
  4.5: fourHalfStar,
  5: fiveStar,
};

const Rating = ({ rating }) => {
  return (
    <img className="w-20 xl:w-25" src={ratingImages[rating] || zeroStar} alt={`Rating: ${rating}`} />
  );
};

export default Rating;
