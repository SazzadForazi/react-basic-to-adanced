import { memo } from "react";

const OurAppTitles = () => {
  console.log("OurAppTitles rendered");
  return (
    <div>
      <h1>Our App</h1>
    </div>
  );
};

export default memo(OurAppTitles);
