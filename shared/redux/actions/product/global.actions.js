import * as ActionTypes from '../../constants/constants';
import { setWorkplaceId } from './serviceform/workplaces.actions';
import { setVehicleId, setShowCreateView, resetCreateVehicleForm } from './serviceform/vehicles.actions';
import { setServices } from './serviceform/services.actions';
import { setDate } from './serviceform/dates.actions';
import { setSubmitSuccess } from './serviceform/overview.actions';


export function setSnackbarMessage(message){
    return {
        type: ActionTypes.PRODUCT_GLOBAL_SET_SNACKBAR_MESSAGE,
        message: message
    };
}

export function resetServiceForm() {
    return (dispatch, getState) => {
        dispatch(setWorkplaceId(null));
        dispatch(setVehicleId(null));
        dispatch(setShowCreateView(false));
        dispatch(setServices(['']));
        dispatch(setDate(null));
        dispatch(setSubmitSuccess(false));
        dispatch(resetCreateVehicleForm());
    }
}