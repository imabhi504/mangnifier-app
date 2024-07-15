import "./style.css";
import { Box } from "theme-ui";
import React, { useRef,ForwardedRef,useEffect } from "react";
import { forwardRef } from 'react';



interface MagnifierProps {
  magnifierRadius: number;
}

const Magnifier = forwardRef(function Magnifier({
  magnifierRadius,
}: MagnifierProps,ref: ForwardedRef<HTMLHeadingElement>) {
  // Store the position of the magnifier and position of the large image relative to the magnifier.
  const magnifierState = {
    top: -80,
    left: -70,
    offsetX: 10,
    offsetY: -40
  };

  // Store whether the magnifier is currently visible.

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Box sx={{ position: "relative" }}>
      <h1 ref={ref}>SMILE</h1>
        
        <Box
          sx={{
            // Constants:
            boxShadow: "0 5px 10px -2px rgba(0, 0, 0, 0.3)",
            pointerEvents: "none",
            position: "absolute",
            border: "4px solid #efefef",
            zIndex: -1,
            display: "block",
            // Set sizing based on the magnifierRadius from props:
            width: 2 * magnifierRadius,
            height: 2 * magnifierRadius,
            borderRadius: magnifierRadius,
            // Set position based on on the magnifier state:
            top: magnifierState.top + "px",
            left: magnifierState.left + "px",
            backgroundPositionX: -1 * magnifierState.offsetX,
            backgroundPositionY: -1 * magnifierState.offsetY,
            // Toggle opacity based on the isVisible state:
            opacity: 1
          }}
        />
      </Box>
    </Box>
  );
})

export default function App() {
  const ref = useRef<InstanceType<typeof HTMLHeadingElement>>(null);

    useEffect(() => {
        const onScroll = () => {
          var scrollPosition = window.pageYOffset;
          var zoomLevel = Math.min(2, 1 + scrollPosition / 500);
          if(ref.current){
            ref.current.style.transform= `scaleX(${zoomLevel})`;
          }
        }
        // clean up code
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
  return (
    <>
    <Magnifier
      magnifierRadius={120}
      ref={ref}
    />
    </>
  );
}
