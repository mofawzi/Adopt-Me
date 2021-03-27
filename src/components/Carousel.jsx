import React, { Component } from 'react'

export class Carousel extends Component {
  state = {
    photos: [],
    active: 0
  }

  // Get limited num of images for each pet --> Filtering on the props itself
  static getDerivedStateFromProps({ media }) {
    // Defauly image
    let photos = ['http"//placeorgi.com/600/600']

    if(media.length) {
      photos = media.map(({large}) => large)
    }

    return {photos}
  }

  // Update active image
  indexClickHandler = (e) => {
    this.setState({
      // The + sign is to turn that index of dataset attr to a number
      active: +e.target.dataset.index
    })
  }

  render() {
    const {photos, active} = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="Animal" />

        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img 
            key={photo}
            onClick={this.indexClickHandler}
            data-index={index}
            src={photo}
            className={index === active ? "active" : ""}
            alt="Animal thumbnail" 
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel
