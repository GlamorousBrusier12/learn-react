import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";

import Result from './Result';
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, updateAnimal] = useState("");
  const [location, updateLocation] = useState("Seattle, WA");
  const [breed, updateBreed] = useState("");
  const [pets,setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  async function getBreeds() {
      const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
      const json = await res.json();
      setPets(json.pets);
    }
    useEffect(()=>{getBreeds();}, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="search-params">
      <form
      onSubmit={(e)=>{
          e.preventDefault();
          getBreeds();
      }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;