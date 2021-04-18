import React from "react";
import background from "../../images/airplane.png";
import { MapFlightMarker } from "./Marker.style";

const Marker = (props: any) => {
  return (
    <div>
      <MapFlightMarker
        style={{
          backgroundImage: `url(${background})`,
          transform: `rotate(${props.direction}deg)`,
        }}
      />
    </div>
  );
};

export default Marker;
