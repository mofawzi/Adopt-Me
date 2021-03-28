import React, { useEffect, useState, useContext } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

const Details = (props) => {
  const [animalState, setAnimalState] = useState({});
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useContext(ThemeContext);

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
  const { animal, breed, location, description, name, media } = animalState;

  return (
    <div className="details">
      <Carousel media={media} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button style={{ backgroundColor: theme }}>Adopt {name}</button>
        <p>{description}</p>
      </div>
    </div>
  );
};

// Add Error boundary as a HOC for the Details Component
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
