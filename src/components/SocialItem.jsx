import React from "react";

function SocialItem({ icon, url }) {
  console.log(url);
  return (
    <a href={url} target="_blank" rel="noreferrer" className="z-20 ">
      <h1>{icon}</h1>
    </a>
  );
}

export default SocialItem;
