import { createSlice } from '@reduxjs/toolkit'

const Colors = {
    "Red_Dark":"#800000",
    "Red_Light":"#ff1a1a",
    "Red":"#cc0000",
    "Blue_Dark":"#000080",
    "Blue_Light":"#1a1aff",
    "Blue":"#0000cc",
}

const LightMode = {
    mode: 'light',
    primary:{
        main:Colors.Blue_Dark
    },
    text:{
        main:"#000000",
        secondary:"#404040",
        translate:"#fff"
    },
    button:{
        main:Colors.Blue,
    },
    icon:{
        main:Colors.Red_Light,
    }
}

const DarkMode = {
    mode: 'dark',
    primary:{
        main:Colors.Red_Dark
    },
    text:{
        main:"#fff",
        secondary:"#808080",
        translate:"#fff"
    },
    button:{
        main:Colors.Red
    },
    icon:{
        main:Colors.Red_Light,
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