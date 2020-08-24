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
    let arr=[
      "https://res.cloudinary.com/tanzeelah/image/upload/v1596468439/Highlights/Untitled-5_hq5vrw.jpg",
      "https://res.cloudinary.com/tanzeelah/image/upload/v1596468439/Highlights/Untitled-3_ze7tmi.jpg",
      "https://res.cloudinary.com/tanzeelah/image/upload/v1596468438/Highlights/Untitled-1_ae5ulq.jpg",
      "https://res.cloudinary.com/tanzeelah/image/upload/v1596468441/Highlights/Untitled-8_silvwt.jpg",
      "https://res.cloudinary.com/tanzeelah/image/upload/v1596468438/Highlights/Untitled-2_nlffv4.jpg",
      "https://res.cloudinary.com/tanzeelah/image/upload/v1596468439/Highlights/Untitled-4_vfnfrm.jpg",
      "https://res.cloudinary.com/tanzeelah/image/upload/v1596468440/Highlights/Untitled-6_wc4qvs.jpg",
      "https://res.cloudinary.com/tanzeelah/image/upload/v1596468441/Highlights/Untitled-7_wdt3jh.jpg",
      "https://res.cloudinary.com/tanzeelah/image/upload/v1596468441/Highlights/Untitled-9_wraq2d.jpg"
    ]
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