import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import first from "../images/courses.jpg";
import second from "../images/create_courses.jpg";

const GlossyCard = () => {
  const useGlossEffect = (cardRef, cardContentRef, glossRef) => {
    const mapNumberRange = (n, a, b, c, d) => {
      return ((n - a) * (d - c)) / (b - a) + c;
    };

    const addShineClass = () => {
      requestAnimationFrame(() => {
        glossRef.current.classList.add("gloss--shine");
      });
    };

    const calculateTransformValues = (pointerX, pointerY, cardRect) => {
      const halfWidth = cardRect.width / 2;
      const halfHeight = cardRect.height / 2;
      const cardCenterX = cardRect.left + halfWidth;
      const cardCenterY = cardRect.top + halfHeight;
      const deltaX = pointerX - cardCenterX;
      const deltaY = pointerY - cardCenterY;
      const distanceToCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.max(halfWidth, halfHeight);
      const degree = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 10);
      const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1);
      const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1);
      return { rx, ry, degree, distanceToCenter, maxDistance };
    };

    const applyTransform = (rx, ry, degree, distanceToCenter, maxDistance) => {
      const cardTransform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;
      const glossTransform = `translate(${-ry * 100}%, ${
        -rx * 100
      }%) scale(2.4)`;
      const glossOpacity = mapNumberRange(
        distanceToCenter,
        0,
        maxDistance,
        0,
        0.6
      );

      cardContentRef.current.style.transform = cardTransform;
      glossRef.current.style.transform = glossTransform;
      glossRef.current.style.opacity = glossOpacity.toString();
    };

    const handleMouseMove = ({ clientX, clientY }) => {
      const card = cardRef.current;
      const cardRect = card.getBoundingClientRect();

      const { rx, ry, degree, distanceToCenter, maxDistance } =
        calculateTransformValues(clientX, clientY, cardRect);

      applyTransform(rx, ry, degree, distanceToCenter, maxDistance);
    };

    const handleMouseLeave = () => {
      cardContentRef.current.style.transform = null;
      glossRef.current.style.opacity = 0;
    };

    useEffect(() => {
      const card = cardRef.current;

      addShineClass();

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, [cardRef, cardContentRef, glossRef]);
  };

  const Card = ({
    cardRef,
    cardContentRef,
    glossRef,
    destination,
    name,
    images,
  }) => {
    const navigate = useNavigate();

    useGlossEffect(cardRef, cardContentRef, glossRef);

    const handleButtonClick = () => {
      // Handle button click to navigate to the specified destination
      navigate(destination);
    };

    return (
      <div className="relative mb-8 overflow-hidden">
        <div className="max-w-md w-full mx-auto bg-white rounded-lg p-5 border-4 border-gray-300">
          <div className="card relative" ref={cardRef}>
            <div className="content relative" ref={cardContentRef}>
              <div
                className="gloss absolute top-0 left-0 w-full h-full"
                ref={glossRef}
              />
              <img
                className="w-full rounded-lg"
                src={images}
                alt="chain links"
              />

              <button
                onClick={handleButtonClick}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-sans py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {name}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <Card
          cardRef={useRef(null)}
          cardContentRef={useRef(null)}
          glossRef={useRef(null)}
          name="Create Course"
          images={second}
          destination="/create-course"
        />
        <Card
          cardRef={useRef(null)}
          cardContentRef={useRef(null)}
          glossRef={useRef(null)}
          destination="/courses"
          name=" Courses"
          images={first}
        />
      </div>
    </div>
  );
};

export default GlossyCard;
