import { useState } from "react";
const BOWLERS = ['Harshal Patel', 'Avesh Khan', 'Jasprit Bumrah', 'Mohmmad Siraj'];
const SearchParams = ()=>{
    const [location, setLocation] = useState("Madhavadhara, Vizag");
    const [bowler, setBowler] = useState("");
    const [breed, setBreeds] = useState("");
    const BREEDS = [];
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" onChange={(e)=>setLocation(e.target.value)} value= {location} placeholder="location" type="text"/>
                </label>
                <label htmlFor="bowler">
                    Most Valuable Bowler
                    <select id="bowler"
                     value={bowler}
                     onChange={e=>setBowler(e.target.value)}
                     onBlur={e=>setBowler(e.target.value)}
                     >
                    <option></option>
                    {
                        BOWLERS.map(bowler=>{
                            return (<option key={bowler} value={bowler}>
                                {bowler}
                            </option>)
                        })
                    }
                    </select>
                </label>
                <label htmlFor="breed">
                    Most Valuable Breed
                    <select id="breed"
                     value={breed}
                     onChange={e=>setBreeds(e.target.value)}
                     onBlur={e=>setBreeds(e.target.value)}
                     >
                    <option></option>
                    {
                        BREEDS.map(breed=>{
                            return (<option key={breed} value={breed}>
                                {breed}
                            </option>)
                        })
                    }
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default SearchParams;