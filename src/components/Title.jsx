import { memo } from "react";

const Title = ({ value }) => {
  return <p>The value of rendering is:{value}</p>;
};

export default memo(Title);
