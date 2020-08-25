/*
 * @Author: 张伟伦
 * @Date: 2020-08-25 09:19:48
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-25 09:31:19
 * @FilePath: /progressive-images/src/components/ImageContainer/index.js
 */
import React from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import Image from '../Images';
import "./index.css";

const ImageContainer = props => {
  const ref = React.useRef();
  const [isVisible, setIsVisible] = React.useState(false);
  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        setIsVisible(true);
        observerElement.unobserve(ref.current);
      }
    }
  });
  const aspectRatio = (props.height / props.width) * 100;
  return (
    <div
      ref={ref}
      className="image-container"
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      {isVisible && (
        <Image {...props} />
      )}
    </div>
  );
};
export default ImageContainer;