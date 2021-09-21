import { useParams } from "react-router-dom";

export default function PetView(props) {
  const { pets } = props;

  const { petName } = useParams();

  const pet = pets.find((pet) => pet.name === petName);

  console.log("Inside petView: ", petName);

  return (
    <>
      <h3>Name: {pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Age: {pet.ageInYears}</p>
      <img src={pet.image} alt="Pet Imange" />
    </>
  );
}
