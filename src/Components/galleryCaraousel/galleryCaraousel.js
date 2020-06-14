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
    let arr=["https://res.cloudinary.com/tanzeelah/image/upload/v1591918848/World%20Days/International_Day_Of_Sign_Languages_23_Sep_j7hlxl.jpg","https://res.cloudinary.com/tanzeelah/image/upload/v1591918834/World%20Days/International_Day_of_Peace_21_Sep_jlag9a.jpg","https://res.cloudinary.com/tanzeelah/image/upload/v1591918861/World%20Days/International_Literacy_Day_8_Sep_xol7ea.jpg","https://res.cloudinary.com/tanzeelah/image/upload/v1591918833/World%20Days/International_Day_Of_Charity_5_Sep_dd97wl.jpg","https://res.cloudinary.com/tanzeelah/image/upload/v1591918866/World%20Days/World_Humanitarian_Day_19_Aug_pqpmgl.jpg"]
    return arr
      .map((item, i) => <img className="item" alt={item} src={item}/>
    )
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
      <div className="desktopClass">
          <div onClick={() => this.slidePrevPage()} className="cardIcon"><i className="fa fa-chevron-left"></i></div>
        <AliceCarousel
          items={galleryItems}
          slideToIndex={currentIndex}
          responsive={responsive}
          onInitialized={this.handleOnSlideChange}
          onSlideChanged={this.handleOnSlideChange}
          onResized={this.handleOnSlideChange}
          // autoPlay={true}
          // autoPlayInterval={2000}
        />
        <div onClick={() => this.slideNextPage()} className="cardIcon"><div><i className="fa fa-chevron-right"></i></div></div>
      </div>
    )
  }
}


export default Gallery