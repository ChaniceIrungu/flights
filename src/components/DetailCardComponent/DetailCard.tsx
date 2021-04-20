import React from "react";
import { useDispatch } from "react-redux";
import { AirplaneItemDetailModel } from "../../shared/interfaces";
import {
  DetailBoxContainer,
  DetailBox,
  DetailTextWrapper,
  DetailItem,
  DetailTitle,
  ImageDeleteButton,
  ImageContainer,
  AirplaneImage,
} from "./DetailCard.style";
import { JetPhotos } from "../../api-interfaces";
import { GET_DETAIL_INFO } from "../../store/actionName/actionNames";
import axios from "axios";
import { URL } from "../../config/api";

interface DetailboxPropsModel {
  detailData: AirplaneItemDetailModel;
}

const AirplaneDeatilCard: React.FC<DetailboxPropsModel> = ({ detailData }) => {
  const dispatch = useDispatch();
  const deleteImage = (selectedImage: JetPhotos) => {
    axios.delete(URL + "jetPhotos/" + selectedImage._id)
    .then(function() {
      dispatch({ type: GET_DETAIL_INFO, payLoad: detailData.details });
    })
  };
  return (
    <DetailBoxContainer>
      {detailData && (
        <DetailBox>
          <ImageContainer>
            {detailData.airplaneImages &&
              detailData.airplaneImages.length !== 0 && (
                <React.Fragment>
                  <AirplaneImage
                    src={detailData.airplaneImages[0].airplane_image}
                    alt="airplane "
                  />
                  <ImageDeleteButton
                    onClick={() => deleteImage(detailData.airplaneImages[0])}
                  >
                    DELETE
                  </ImageDeleteButton>
                </React.Fragment>
              )}
          </ImageContainer>
          {detailData.details && (
            <DetailTextWrapper>
              <DetailItem>
                <DetailTitle>Airplane name: </DetailTitle>
                {detailData.details.callSign}
              </DetailItem>
              <DetailItem>
                <DetailTitle>Origin Country: </DetailTitle>
                {detailData.details.oriCountry}
              </DetailItem>
            </DetailTextWrapper>
          )}
        </DetailBox>
      )}
    </DetailBoxContainer>
  );
};

export default AirplaneDeatilCard;
