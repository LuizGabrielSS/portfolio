import {configureStore} from '@reduxjs/toolkit'

import modeSlice from './reducers/mode'

export default configureStore({
    reducer:{
        mode:modeSlice
    }
})