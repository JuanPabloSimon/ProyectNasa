import React, { useState, useEffect } from "react";
import Picture from "../Picture/picture";
import "./picturesContainer.css";

const PictureContainer = (props) => {
  const [pictures, setPictures] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (props.rover && props.camera) {
      let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${props.rover}/photos?sol=1000&page=1&camera=${props.camera}&api_key=WbpnFhZNc17TUhmWpbT4HadIU8A39Z84pbraZ36Q`;
      fetch(url)
        .then((res) => res.json())
        .then((result) => setPictures(result.photos));

      if (isloading === true) {
        setTimeout(() => {
          setIsloading(false);
        }, 2000);
      } else {
        setIsloading(true);
        setTimeout(() => {
          setIsloading(false);
        }, 2000);
      }
    }
  }, [props]);

  return (
    <div className="picturesContainer">
      <h1 className="titles"> {props.camera}</h1>
      {props.rover && props.camera ? (
        <div>
          {isloading ? (
            <h2> Searching </h2>
          ) : (
            <div className={pictures.length > 0 ? "pictureList" : ""}>
              {pictures.length > 0 ? (
                pictures.map((el, index) => <Picture key={index} props={el} />)
              ) : (
                <h2 className="titles"> NO PICTURES fOUND</h2>
              )}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default PictureContainer;
