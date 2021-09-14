import { Link } from "react-router-dom";

export default function (props) {
  return (
    <main>
      <div className="App Main-header">
        <h1>Mintz Pet Adoption</h1>
        <h3>
          <i>There's A Home For Every Pet!</i>
        </h3>
      </div>
      <section>
        <h2>Home Page</h2>
        <ul></ul>
        <li>
          <Link to="pets">Our Pets</Link>
          {/* {props.pets.map((pet, index) => {
            console.log("Inside Pets Map: ", pet);
            return <></>;
          })} */}
        </li>
      </section>
    </main>
  );
}
