import React from "react";
import "./container1.css";

function Container1() {
  const [dimensions, setDimensions] = React.useState({
    styles: {
      height: window.innerHeight * 0.8,
      fontSize: window.innerHeight / 50
    },
  });
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        styles: {
          height: window.innerHeight * 0.8,
          fontSize: window.innerHeight / 50
        },
      });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };

  });
  return (
    <div className="container" style={dimensions.styles}>
      <div className="block1">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="block2">
        <div className="bchild1"></div>
        <div className="bchild2"></div>
      </div>
    </div>
  );
}

export default Container1;
