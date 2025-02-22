import { createSlice } from '@reduxjs/toolkit'

const Pallet =  {
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
    }
}

export const modeSlice = createSlice({
    name: 'mode',
    initialState:{
        mode:Pallet
    }
})

export default modeSlice.reducer