import React, { useEffect, useState } from "react";
import pet from "@frontendmasters/pet";

const Details = (props) => {
  const [animalState, setAnimalState] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pet.animal(props.id).then(({ animal }) => {
      setAnimalState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
      });
      setLoading(false);
    }, console.error);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const { animal, breed, location, description, name } = animalState;

  return (
    <div className="details">
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Details;
