import React from "react";
import { ReactFullscreenCarousel } from "react-fullscreen-carousel";
import Clothes from "../../pictures/carousel/clothes.png";
import Energy from "../../pictures/carousel/energy.png";
import Food from "../../pictures/carousel/food.png";
import Med from "../../pictures/carousel/med.png";

const data = [
  { img: { Clothes }, alt: "image" },
  { img: { Energy }, alt: "image" },
  { img: { Food }, alt: "image" },
  { img: { Med }, alt: "image" },
];

const MyComponent: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <main>
      {open ? (
        <ReactFullscreenCarousel
          slides={data}
          handleClose={() => setOpen(false)}
          closeButtonElement={(onClick: () => void) => (
            <MyCustomCloseButton onClick={onClick} />
          )}
          prevButtonElement={(onClick: () => void) => (
            <MyCustomPrevButton onClick={onClick} />
          )}
          nextButtonElement={(onClick: () => void) => (
            <MyCustomNextButton onClick={onClick} />
          )}
        />
      ) : null}
      <button onClick={() => setOpen(true)}>Open images</button>
    </main>
  );
};

export default MyComponent;
