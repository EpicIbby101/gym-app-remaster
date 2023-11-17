import React from "react";
import Icon from "../../public/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <button
      type="button"
      className={`bodyPart-card flex items-center justify-center ${bodyPart === item ? "border-t-4 border-red-600" : ""} bg-gray-300 w-64 h-72 cursor-pointer gap-12`}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon.src} alt="dumbbell" className="w-10 h-10" />
      <div>
        <p className="text-2xl font-bold text-gray-900 capitalize">{item}</p>
      </div>
    </button>
  );
};

export default BodyPart;
