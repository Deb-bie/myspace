import { Link } from "react-router-dom";
import "./SearchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img 
    //   src={item.photos[0]} 
        src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
      alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">
            {/* {item.name} */}
            Tower Street Apartments
        </h1>
        <span className="siDistance">
            {/* {item.distance} */}
            500m from center
        </span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
            {/* {item.desc} */}
            description 
            </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {/* {item.rating &&  */}
        <div className="siRating">
          <span>Excellent</span>
          <button>
            {/* {item.rating} */}
            8.9
            </button>
        </div>
        {/* // } */}
        <div className="siDetailTexts">
          <span className="siPrice">
            $20
            {/* {item.cheapestPrice} */}
        </span>
          <span className="siTaxOp">Includes taxes and fees</span>
          {/* <Link to={`/hotels/${item._id}`}> */}
          <button className="siCheckButton">See availability</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
