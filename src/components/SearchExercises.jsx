import { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "@/utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center mt-16">
        <h1 className="font-bold text-4xl lg:text-6xl text-rose-400 mb-8 text-center">
          Awesome Exercises You <br /> Should Know
        </h1>

        <div className="relative mb-16">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            className="h-16 px-6 w-[400px] md:w-[600px] lg:w-[1170px] bg-white rounded-full"
          />
          <button
            className="search-btn bg-red-600 hover:bg-red-700 text-white px-10 h-16 absolute right-0 rounded-full"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="w-full relative p-4">
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            isBodyParts
          />
        </div>
      </div>
    </div>
  );
};

export default SearchExercises;
