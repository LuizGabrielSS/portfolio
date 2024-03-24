import { createSlice } from '@reduxjs/toolkit'

const LightMode = {
    mode: 'light',
    primary:{
        main:"#330080"
    },
    text:{
        main:"#000000",
        secondary:"#404040",
        translate:"#fff"
    },
    button:{
        main:"#5c00e6",
    },
    icon:{
        main:"#5c00e6",
    }
}

const DarkMode = {
    mode: 'dark',
    primary:{
        main:"#000080"
    },
    text:{
        main:"#fff",
        secondary:"#808080",
        translate:"#fff"
    },
    button:{
        main:"#1a1aff"
    },
    icon:{
        main:"#5c00e6",
    }
    
}

export const ModeSlice = createSlice({
    name:'mode',
    initialState:{
        darkmode:LightMode
    },
    reducers:{
        ChangeMode: (state, action) => {
            state.darkmode = action.payload ? DarkMode : LightMode
        }
    }
})

export const {ChangeMode} = ModeSlice.actions

export default ModeSlice.reducer