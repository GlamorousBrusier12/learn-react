import Pet from './Pet'
const Details = ({pet})=>{
    return (
        <div>
            <h2>Hi mowa! Welcome to 301 Daries</h2>
            {/* <Pet 
                name = {pet.name} 
                breed={pet.breed} 
                animal = {pet.animal} 
                key={pet.id} 
                images = {pet.images}
                location={`${pet.city}, ${pet.state}`}
                id={pet.id}
            /> */}
        </div>
    );
}
export default Details;