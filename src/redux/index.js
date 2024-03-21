import {configureStore} from '@reduxjs/toolkit'

import ModeSlice from './reducers/mode'

export default configureStore({
    reducer: {
        mode: ModeSlice,
    },
  })