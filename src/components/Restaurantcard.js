import { CDN_URl } from "../utils/constants";
const Restaurantcard = (props) => {
  const { resData } = props;
  console.log(props);
  const imgUrl = { ...props.resData };
  console.log("image", imgUrl[0]);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URl + imgUrl[0].info.cloudinaryImageId}
      ></img>
      <h3>{resData[0].info.name}</h3>
      <h4>{resData[0].info.cuisines.join(", ")}</h4>
      <h4>{resData[0].info.avgRating}</h4>
      <h4>30min</h4>
    </div>
  );
};

export default Restaurantcard;
