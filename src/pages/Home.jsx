import { Link } from "react-router-dom";

export default function () {
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
        </li>
        <li>
          <Link to="/types/dog">Dog</Link>
        </li>
        <li>
          <Link to="/types/cat">Cat</Link>
        </li>
        <li>
          <Link to="/">Back</Link>
        </li>
      </section>
    </main>
  );
}
