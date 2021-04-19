import { ReducersModel } from './interfaces';

//Export reducer for getting Airplane Detail
export const infoAirplaneDetail = (state: any[] = [], action: ReducersModel) => {
    switch (action.type) {
        case "GET_DETAIL_INFO_FETCH":
            return action.payLoad;
        default:
            return state;
    }
}
