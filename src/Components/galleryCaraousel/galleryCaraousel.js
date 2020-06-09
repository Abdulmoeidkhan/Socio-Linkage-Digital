import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import "./galleryCaraousel.css"


class Gallery extends React.Component {
  state = {
    currentIndex: 0,
    itemsInSlide: 1,
    responsive : {
        0: { items: 1 },
        767: { items: 2 },
        1024: { items: 3 },
      },
    galleryItems: this.galleryItems(),
  }

  galleryItems() {
    return Array(7)
      .fill()
      .map((item, i) => <img className="item" alt="https://dummyimage.com/300x200/000/fff" src="https://dummyimage.com/300x200/000/fff"/>)
  }

  slidePrevPage = () => {
    const currentIndex = this.state.currentIndex - this.state.itemsInSlide
    this.setState({ currentIndex })
  }

  slideNextPage = () => {
    const {
      itemsInSlide,
      galleryItems: { length },
    } = this.state
    let currentIndex = this.state.currentIndex + itemsInSlide
    if (currentIndex > length) currentIndex = length

    this.setState({ currentIndex })
  }

  handleOnSlideChange = (event) => {
    const { itemsInSlide, item } = event
    this.setState({ itemsInSlide, currentIndex: item })
  }

  render() {
    const { currentIndex, galleryItems, responsive } = this.state

    return (
      <div>
          <div onClick={() => this.slidePrevPage()} className="cardIcon"><i className="fa fa-chevron-left"></i></div>
        <AliceCarousel
          items={galleryItems}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
        />
        <div onClick={() => this.slideNextPage()} className="cardIcon"><div><i className="fa fa-chevron-right"></i></div></div>
      </div>
    )
  }
}


export default Gallery