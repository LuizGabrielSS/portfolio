import { createSlice } from '@reduxjs/toolkit'

const Red_Dark = "#800000"

const Red_Light = "#ff1a1a"

const Blue_Dark = "#000080"

const Blue_Light = "#1a1aff"

const Blue = "#0000cc"

const Red = "#cc0000"


const LightMode = {
    mode: 'light',
    primary:{
        main:Blue_Dark
    },
    text:{
        main:"#000000",
        secondary:"#404040",
        translate:"#fff"
    },
    button:{
        main:Blue,
    },
    icon:{
        main:Blue_Light,
    }
}

const DarkMode = {
    mode: 'dark',
    primary:{
        main:Red_Dark
    },
    text:{
        main:"#fff",
        secondary:"#808080",
        translate:"#fff"
    },
    button:{
        main:Red
    },
    icon:{
        main:Red_Light,
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