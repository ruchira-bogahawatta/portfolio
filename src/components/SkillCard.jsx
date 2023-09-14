import React from "react";

const SkillCard = ({ IconUrl, alt, scale = 100, width = 50, additionalClass = "" , maxWidth = 50}) => {
  const scaleClass = `scale-${scale}`;
  const widthClass = `w-[${width}%]`;


  return (
    <div className="rounded-lg shadow-md shadow-[#cacaca] p-2">
      <img
        className={`${widthClass} ${scaleClass} max-w-[50px] mx-auto  ${additionalClass}`}
        src={IconUrl}
        alt={alt}
      />
    </div>
  );
};

export default SkillCard;
