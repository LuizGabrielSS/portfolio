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
        home_b:"#8C1F33"
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
        home_a: "#8C1F33",
        home_b:"#25A6D9",
    },
    text:{
        top: "#25A6D9",
        top_principal: "#BF2A37",
        home_a: "#25A6D9",
        home_b:"#8C1F33"
    },
    icon:{
        home_a: "#BF2A37",
        home_b: "#1C588C"
    },
    button:{
        home_a: "#BF2A37",
        home_b: "#25A6D9"
    }
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState:{
        mode:Light_Pallet
    },
    reducers:{
        ChangeMode: (state, action) => {
            state.mode = action.payload ? Dark_Pallet : Light_Pallet
        }
    }
})

export const { ChangeMode } = modeSlice.actions

export default modeSlice.reducer