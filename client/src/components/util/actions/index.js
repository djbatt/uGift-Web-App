import { ADD_BUSINESS } from '../constants/action-types';

export const businessToStore = business => ({
    type: ADD_BUSINESS,
    payload: business
})