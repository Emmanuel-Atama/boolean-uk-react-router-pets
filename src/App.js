import { useState } from "react";
import PetsList from "./components/PetsList";
import Home from "./pages/Home";
import "./styles.css";

const initialPets = [
  {
    id: 1,
    name: "Skippy",
    type: "Cat",
    ageInYears: 2,
    image:
      "https://med.stanford.edu/news/all-news/2021/09/cat-fur-color-patterns/_jcr_content/main/image.img.476.high.jpg/cat_by-Kateryna-T-Unsplash.jpg"
  },
  {
    id: 2,
    name: "Storm",
    type: "Dog",
    ageInYears: 3,
    image:
      "https://www.hakaimagazine.com/wp-content/uploads/shiba-inu-wool-dogs.jpg"
  },
  {
    id: 3,
    name: "Biggie",
    type: "Dog",
    ageInYears: 6,
    image:
      "https://s.abcnews.com/images/Health/GTY_fat_dog_nt_131107_16x9_1600.jpg"
  },
  {
    id: 4,
    name: "2Pac",
    type: "Dog",
    ageInYears: 5,
    image:
      "https://i.pinimg.com/originals/f3/8a/95/f38a95b0acac3fd7511843e49df8eaa9.jpg"
  },
  {
    id: 5,
    name: "Haley",
    type: "Cat",
    ageInYears: 4,
    image:
      "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/09-17/caring+for+a+savannah+cat+_+close+up+of+a+savannah+cat+face+with+big+green+eyes-min.jpg"
  }
];
export default function App() {
  const [pets, setPets] = useState(initialPets);
  console.log("Inside State: ", pets);
  return (
    <>
      <Home />
      <PetsList pets={pets} />
    </>
  );
}
