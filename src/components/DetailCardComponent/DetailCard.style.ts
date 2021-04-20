import styled from "styled-components";

export const DetailBoxContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailBox = styled.div`
  padding: 20px;
  border: 1px solid #999999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const DetailTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 20px;
`;

export const DetailItem = styled.p`
  margin: 0px;
`;

export const DetailTitle = styled.span`
  font-weight: bold;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AirplaneImage = styled.img`
    width: 200px;
    height: 150px;
`;

export const ImageDeleteButton = styled.button`
    width: 100%;
    border: 1px solid #999999;
    cursor: pointer;
    margin-top: 10px;
    padding: 5px 0px;
    transition-duration: 0.2s;
    background-color: white;
    &:hover {
        background-color: red;
    }
    &:focus {
        outline: none;
    }
`;
