import React, { useEffect, useState, useContext } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import { navigate } from "@reach/router";
import Modal from "./Modal";

const Details = (props) => {
  const [animalState, setAnimalState] = useState({});
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    pet.animal(props.id).then(({ animal }) => {
      setAnimalState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        url: animal.url,
      });
      setLoading(false);
    }, console.error);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  const {
    animal,
    breed,
    location,
    description,
    name,
    media,
    url,
  } = animalState;

  const toggleModal = () => setShowModal(!showModal);

  const adopt = () => navigate(url);

  return (
    <div className="details">
      <Carousel media={media} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <button onClick={toggleModal} style={{ backgroundColor: theme }}>
          Adopt {name}
        </button>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {name} ?</h1>
              <div className="buttons">
                <button onClick={adopt}>Yes</button>
                <button onClick={toggleModal}>No, I'm a monster</button>
              </div>
            </div>
          </Modal>
        ) : null}
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
