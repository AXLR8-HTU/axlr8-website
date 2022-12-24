import React from 'react';
import image1 from "../resources/images/ab.jpg";
import gallerypng from "../resources/icons/gallery.png"



const Photos = () => {
    const photos = [
        {imgUrl: image1, id:0},
        {imgUrl: image1, id:1},
        {imgUrl: image1, id:2},
        {imgUrl: image1, id:3},
        {imgUrl: image1, id:4},
        {imgUrl: image1, id:5},
        {imgUrl: image1, id:6},
    ]
    const date = "May 25th, 2021";
  return (
    <div className='box'>
        <div className='flex'>
        <div>
          <div className="title">Photos</div>
          <p><span>{date}</span> - {photos.length} Images</p>
        </div>
        <img src={gallerypng} alt="png" />
      </div>
        <div className="images">
          {photos.map((picture)=>
            <div className="image" key={picture.id}>
                <img src={picture.imgUrl} alt="image" />
            </div>
          )}
          <div className="image">
            <img className='big' src={image1} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Photos;