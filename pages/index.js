import "@/app/globals.css";
import { useState } from "react";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SearchExercises from "@/components/SearchExercises";

const index = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [Exercises, setExercises] = useState([]);

  return (
    <main>
      <Navbar />
      <HeroSection />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </main>
  );
};

export default index;
