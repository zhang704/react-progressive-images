/*
 * @Author: 张伟伦
 * @Date: 2020-08-25 09:25:19
 * @LastEditors: 张伟伦
 * @LastEditTime: 2020-08-25 09:25:58
 * @FilePath: /progressive-images/src/hooks/useIntersectionObserver.js
 */
import { useEffect } from "react";
const useIntersectionObserver = ({ target, onIntersect, threshold = 0.1, rootMargin = "0px" }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold
    });
    const current = target.current;
    observer.observe(current);
    return () => {
      observer.unobserve(current);
    };
  });
};
export default useIntersectionObserver;