import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import imageOne from "/src/assets/imageOne.jpg"
import imageTwo from "/src/assets/imageTwo.jpg"
import imageThree from "/src/assets/imageThree.jpg"
import imageFour from "/src/assets/imageFour.jpg"
import imageFive from "/src/assets/imageFive.jpg"

const HeroSection = () => {
  const [imagePath, setImagePath] = useState(0);
  const imageArr = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
  ];

  useEffect(() => {
    if (imagePath <= 4) {
      setTimeout(() => {
        setImagePath(imagePath + 1);
      }, 5000);
    } else {
      setImagePath(0);
    }
  }, [imagePath]);

  return (
    <Container fluid className="m-0 p-0">
      <div
        className="carousal d-flex align-items-center justify-content-end"
        style={{ background: `url(${imageArr[imagePath]})` }}
      >
        <div className="hero-content me-md-5 me-3 pe-3">
          <h1 className="m-0 fw-bold py-1">Raining Offers for</h1>
          <h1 className="m-0 fw-bold py-1">This Season!</h1>
          <p className="m-0 fw-bold py-1 fs-6">Upto 25% Off For New User</p>
          <button className="btn btn-warning mt-2 py-2">Check Now</button>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
