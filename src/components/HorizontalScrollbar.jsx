import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../../public/right-arrow.png";
import LeftArrowIcon from "../../public/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button onClick={scrollPrev} className="right-arrow">
      <img src={LeftArrowIcon.src} alt="left-arrow" />
    </button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <button onClick={scrollNext} className="left-arrow">
      <img src={RightArrowIcon.src} alt="right-arrow" />
    </button>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          className="mx-4"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
