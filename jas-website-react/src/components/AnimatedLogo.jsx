import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

function AnimationPath({ toggle, delay }) {
  const [length, setLength] = useState(null);
  const animatedStyle = useSpring({
    strokeDashoffset: toggle ? 0 : length,
    strokeDasharray: length,
    config: { duration: 1000 },
    delay,
  });

  return {
    style: animatedStyle,
    ref: (ref) => {
      if (ref) {
        setLength(ref.getTotalLength());
      }
    },
  };
}

function Logo({ color, d, transform, toggle }) {
  const animationStrokeProps = AnimationPath({ toggle });
  const animationFillStyle = useSpring({
    fill: toggle ? color : "#fff",
    delay: 1000,
  });

  return (
    <animated.path
      {...animationStrokeProps}
      style={{
        ...animationStrokeProps.style,
        ...animationFillStyle,
      }}
      fill="#fff"
      stroke={color}
      strokeWidth="2"
      d={d}
      transform={transform}
    />
  );
}

function AnimatedLogo() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385.97 440.27">
      <Logo
        color="#FFEA63"
        d="M455.87,537.68a47.49,47.49,0,0,0-11.86-32c-7.39-8.2-17.13-12.71-27.43-12.71V473.45h0c21.66,0,39.27-20,39.28-44.67h19.55c0,24.63,17.62,44.68,39.28,44.68h0V493h0c-10.29,0-20,4.51-27.41,12.71a47.49,47.49,0,0,0-11.86,32Zm-8.06-54.49a61,61,0,0,1,10.73,9.44,64.53,64.53,0,0,1,7.1,9.54,64.6,64.6,0,0,1,7.11-9.54,60.3,60.3,0,0,1,10.73-9.44,62,62,0,0,1-17.84-19A62.1,62.1,0,0,1,447.81,483.19Z"
        transform="translate(-236.33 -281.58)"
        toggle={toggle}
      />

      <Logo
        color="#1D1D1B"
        d="M57.21 98.31h98.11v19.56H57.21Z"
        transform=""
        toggle={toggle}
      />

      <Logo
        color="#1D1D1B"
        d="M465.64,399.45c18.22,0,30.5,9.63,36.73,28.42h20.47c-7.89-30.94-28.2-48-57.2-48s-49.31,17-57.2,48h20.47C435.14,409.08,447.42,399.45,465.64,399.45Z"
        transform="translate(-236.33 -281.58)"
        toggle={toggle}
      />
      <Logo
        color="#1D1D1B"
        d="M380.66,329.56h20.47c-7.89-30.94-28.2-48-57.2-48-47.6,0-60.18,45.34-60.18,69.31V525.08h19.56V350.91c0-2,.72-49.77,40.62-49.77C362.15,301.14,374.44,310.78,380.66,329.56Z"
        transform="translate(-236.33 -281.58)"
        toggle={toggle}
      />
      <Logo
        color="#1D1D1B"
        d="M334.15,389.66V554.22c0,2-.71,49.77-40.62,49.77-18.22,0-30.5-9.63-36.72-28.42H236.33c7.89,30.94,28.2,48,57.2,48,47.6,0,60.18-45.33,60.18-69.3V389.66Z"
        transform="translate(-236.33 -281.58)"
        toggle={toggle}
      />
      <Logo
        color="#1D1D1B"
        d="M565.11,702.3c-39.91,0-40.62-47.74-40.63-49.75V639.06c0-22-10.58-61.94-49.06-68.41v-33H455.86v33c-38.48,6.46-49.06,46.42-49.06,68.41v30.36c0,11.32,2.26,22.9,6.19,31.77,5.92,13.33,15.66,20.67,27.45,20.67,8.63,0,24.19-3.47,31.39-26.66a91.19,91.19,0,0,0,3.59-25.78V590.73c28.93,7.92,29.5,46.53,29.51,48.32l0,13.5v9.78h.63c3,24.74,17.86,59.53,59.56,59.53,29,0,49.3-17,57.19-48H601.83C595.6,692.66,583.32,702.3,565.11,702.3ZM455.86,669.42a70.73,70.73,0,0,1-2.71,20c-4,12.9-10.33,12.9-12.71,12.9-3.69,0-6.91-3-9.57-9-2.83-6.37-4.51-15.28-4.51-23.84V639.08c0-1.82.58-40.43,29.51-48.36Z"
        transform="translate(-236.33 -281.58)"
        toggle={toggle}
      />
    </svg>
  );
}

export default AnimatedLogo;
