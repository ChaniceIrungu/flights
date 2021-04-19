import axios from "axios";

////////////////////APIS//////////

const URL = "https://gentle-temple-27938.herokuapp.com/";

// Get a two-dimensional array of airplanes that are currently in the air in mainland Portugal.
export function getAllFlights() {
  return axios.get(URL + "allFlights");
}

// Get a two-dimensional array of a maximum of 5 images of an airplane with a given ICAO code.
export function getAirplaneImages(icao) {
  return axios.get(URL + "airplaneImages/:" + icao);
}

// Get all the images that were already inserted with the endpoint above.
export function getJetPhotos() {
  return axios.get(URL + "jetPhotos");
}

// Get all the images that were already inserted with the endpoint above.
export function postJetPhotos() {
  return axios.post(URL + "jetPhotos");
}

// update the images.
export function updateJetPhotos(imageId) {
  return axios.put(URL + "jetPhotos/:" + imageId);
}

// Request body params .
export function deleteJetPhotos(imageId) {
  return axios.delete(URL + "jetPhotos/:" + imageId);
}

export function addJetPhotos(jetItem, icao) {
    return axios.post(URL + `jetPhotos/:${icao}`, jetItem)
}
