import React from "react";
import Link from "next/link";

function ScrollToTopOnMount() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return null;
}

const ExerciseCard = ({ exercise }) => {
  return (
    <div>
      <ScrollToTopOnMount />
      <Link href={`/exercise/${exercise.id}`} passHref>
        <a className="exercise-card">
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
          <div className="flex flex-row mt-4">
            <button className="ml-4 text-white bg-red-500 text-sm rounded-full px-4 py-2 capitalize">
              {exercise.bodyPart}
            </button>
            <button className="ml-4 text-white bg-yellow-500 text-sm rounded-full px-4 py-2 capitalize">
              {exercise.target}
            </button>
          </div>
          <p className="ml-4 text-black font-bold mt-3 pb-2 capitalize text-xl">
            {exercise.name}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default ExerciseCard;
