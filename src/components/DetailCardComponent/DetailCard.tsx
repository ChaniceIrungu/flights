import React from "react";
import { useSelector } from "react-redux";

interface RootState {
    infoAirplaneDetail: any;
}

const AirplaneDeatilCard = () => {
  const detailData: any = useSelector((state: RootState) => state.infoAirplaneDetail);
  detailData && console.log("detail data", detailData)
  return (
    <div>
      <p>airplane details</p>
    </div>
  );
};

export default AirplaneDeatilCard;
