import { createSlice } from '@reduxjs/toolkit'

const Light_Pallet =  {
    mode: "light",
    background:{
        top: "#fff",
        home_a: "#8C1F33",
        home_b:"#25A6D9",
    },
    text:{
        top: "#0B2240",
        top_principal: "#8C1F33",
        home_a: "#25A6D9",
        home_b:"#8C1F33",
        back:"#fff"
    },
    icon:{
        home_a: "#BF2A37",
        home_b: "#1C588C"
    },
    button:{
        home_a: "#BF2A37",
        home_b: "#1C588C"
    }
}

const Dark_Pallet = {
    mode: "dark",
    background:{
        top: "#000",
        home_a: "#25A6D9",
        home_b: "#8C1F33",
    },
    text:{
        top: "#BF2A37",
        top_principal: "#25A6D9", 
        home_a: "#8C1F33", 
        home_b:"#25A6D9",
        back:"#000"
    },
    icon:{
        home_a: "#1C588C",
        home_b: "#BF2A37"
    },
    button:{
        home_a: "#25A6D9",
        home_b: "#BF2A37"
    }
}

const getSavedTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? Dark_Pallet : Light_Pallet;
  };

export const modeSlice = createSlice({
    name: 'mode',
    initialState:{
        mode: getSavedTheme(),
    },
    reducers:{
        ChangeMode: (state, action) => {
            state.mode = action.payload ? Dark_Pallet : Light_Pallet;
            localStorage.setItem("theme", action.payload ? "dark" : "light");
        }
    }
})

export const { ChangeMode } = modeSlice.actions

export default modeSlice.reducer