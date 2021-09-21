import { useHistory, useParams } from "react-router-dom";

export default function (props) {
  const { pets } = props;

  const history = useHistory();

  const { petType } = useParams();

  let filteredPets = pets;

  if (petType) {
    filteredPets = pets.filter((pet) => pet.type === petType);
  }

  console.log("Inside PetsList: ", filteredPets);

  // const handleButton = (event) => {
  //   console.log("Inside handleButton: ", event.target.target);

  //   setButtons(event.target.target);
  // };
  return (
    <ul>
      {filteredPets.map((pet, index) => {
        return (
          <li key={index}>
            <h3>Name: {pet.name}</h3>
            <button
              className="Pet-Button"
              onClick={() => history.push(`/pet/${pet.name}`)}
            >
              View Pet Details
            </button>
          </li>
        );
      })}
    </ul>
  );
}
