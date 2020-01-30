import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import Ladder from './images/Ladder.png';
import Elementary from './images/Elementary.png';
import ExtendoBrush from './images/ExtendoBrush.png';
import Shiny from './images/Shiny.png';
import Floor from './images/Floor.png';
import Bucket from './images/Bucket.png';
import Window from './images/Window.png';
import Windoow from './images/Windoow.png';
import High from './images/High.png';
import Fan from './images/Fan.png';
import Door from './images/Door.png';
import Squeak from './images/Squeak.png';
import Showerhead from './images/Showerhead.png';
import Hall from './images/Hall.png';
import Squeeak from './images/Squeeak.png';
import Win from './images/Win.png';
import Vac from './images/Vac.png';
import Before1 from './images/Before1.png';
import Before2 from './images/Before2.png';
import During1 from './images/During1.png';
import During2 from './images/During2.png';
import After1 from './images/After1.png';
import Befoore from './images/Befoore.png';
import Duriing from './images/Duriing.png';
import Afteer from './images/Afteer.png';

function Photos() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    Elementary,
    ExtendoBrush,
    Shiny,
    Floor,
    Bucket,
    Window,
    Windoow,
    Squeak,
    Squeeak,
    Win,
    High,
    Door,
    Showerhead,
    Hall,
    Before1,
    Before2,
    During1,
    During2,
    After1,
    Duriing,
    Befoore,
    Afteer,
    Fan,
    Vac,
    Ladder,
  ];

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div align='center' className='hotdog' style={{margin: -15}}>
      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ margin: "2px" }}
          alt=""
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
        />
      )}
    </div>
  );
}
export default Photos;
