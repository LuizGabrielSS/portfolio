import { createSlice } from '@reduxjs/toolkit'

const LightMode = {
    mode: 'light',
    primary:{
        main:"#3333ff"
    },
    text:{
        main:"#000000",
        secondary:"#404040"
    },
    button:{
        main:"#3333ff",
    }
    
}

const DarkMode = {
    mode: 'dark',
    primary:{
        main:"#1a1a1a"
    },
    text:{
        main:"#fff",
        secondary:"#808080"
    },
    button:{
        main:"#fff"
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