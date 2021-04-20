import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DetailContainer } from "./styles";
import AirplaneDeatilCard from "../components/DetailCardComponent/DetailCard";
import { AirplaneItemDetailModel } from "../shared/interfaces";

interface RootState {
    infoAirplaneDetail: AirplaneItemDetailModel;
  }

const DetailsPage = () => {
  const [airplane, setAirplane] = useState<AirplaneItemDetailModel>();
  const airplaneDetail = useSelector(
    (state: RootState) => state.infoAirplaneDetail
  );

  useEffect(() => {
    airplaneDetail && setAirplane(airplaneDetail);
  }, [airplaneDetail]);
  console.log("airplane", airplane);
  return (
    <DetailContainer>
      {airplane && <AirplaneDeatilCard detailData={airplane} />}
    </DetailContainer>
  );
};

export default DetailsPage;
