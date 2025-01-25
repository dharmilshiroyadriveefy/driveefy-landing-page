import axios from 'axios';

// DEMO CODE 

export const getAllCustomerTickets = () => async (dispatch) => {
    try {
        dispatch({type: "GET_USER_WITH_WILLS_REQUEST"});
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/admin/panel/ticketlist`, {
            headers: {
                "Content-type": "application/json",
            }
        });

        if(response.status===200){
            dispatch({ type: 'GET_USER_WITH_WILLS_SUCCESS', payload: response.data.data });
        }
        
    } catch (error) {
        dispatch({ 
            type: 'GET_USER_WITH_WILLS_FAILURE',
            payload: error.message,
         });
    }
};


