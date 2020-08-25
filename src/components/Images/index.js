/*
 * @Author: 张伟伦
 * @Date: 2020-08-25 09:28:02
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-25 09:28:02
 * @FilePath: /progressive-images/src/components/Images/index.js
 */
import React from "react";
import "./index.css";
const Image = props => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <React.Fragment>
      <img
        className="image thumb"
        alt={props.alt}
        src={props.thumb}
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="image full"
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={props.alt}
        src={props.src}
      />
    </React.Fragment>
  );
};
export default Image;