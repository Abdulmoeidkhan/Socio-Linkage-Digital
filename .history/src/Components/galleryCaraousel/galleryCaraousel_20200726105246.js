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
    let arr=["https://res.cloudinary.com/tanzeelah/image/upload/v1594745296/Cover%20Photos/Untitled-8_aij9qx.jpg","https://res.cloudinary.com/tanzeelah/image/upload/v1594745295/Cover%20Photos/Untitled-1_remeuh.jpg","https://res.cloudinary.com/tanzeelah/image/upload/v1594745294/Cover%20Photos/Untitled-9_bcmsdy.jpg","https://res.cloudinary.com/tanzeelah/image/upload/v1594745293/Cover%20Photos/Untitled-7_pecrtb.jpg","https://res.cloudinary.com/tanzeelah/image/upload/v1594745291/Cover%20Photos/Untitled-2_reojs6.jpg","https://res.cloudinary.com/tanzeelah/image/upload/v1594745290/Cover%20Photos/Untitled-4_kselx4.jpg","https://res.cloudinary.com/tanzeelah/image/upload/v1594745290/Cover%20Photos/Untitled-6_ix7pvi.jpg","https://res.cloudinary.com/tanzeelah/image/upload/v1594745290/Cover%20Photos/Untitled-3_nkzaap.jpg","https://res.cloudinary.com/tanzeelah/image/upload/v1594745290/Cover%20Photos/Untitled-5_su4wkx.jpg"]
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