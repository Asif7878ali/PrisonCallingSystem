import { createSlice} from '@reduxjs/toolkit'

 const prisonSlice = createSlice({
    name : 'prisons',
    initialState : {apiData: null, token: null , recentNumber: null, error: null},
    reducers : {
        'setUserData' : (state, action) => {
             return {
                ...state,
                apiData: action.payload,
             }
        },
        'setToken' : (state, action) => {
            return{
                ...state,
                token : `${action.payload}`,
            }
        },
        'setNumber' :(state, action) => {
            return {
                ...state,
                recentNumber: action.payload,
            }
        },
       
    },
    
}) 

export default prisonSlice.reducer;