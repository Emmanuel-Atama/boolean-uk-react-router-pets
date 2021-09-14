export default function (props) {
  const { pets } = props;
  return (
    <ul>
      {pets.map((pet, index) => {
        return (
          <li>
            <h3>Name: {pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>Age: {pet.ageInYears}</p>
            <img src={pet.image} alt="Pet Imange" />
          </li>
        );
      })}
    </ul>
  );
}
