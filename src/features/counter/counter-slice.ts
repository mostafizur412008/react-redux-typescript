//DUCKS PATTERN
import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface CounterState{
    value: number;
}

const initialState: CounterState = {
    value:0,
};

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        //increament
        incremented(state){
            //immer makes it immutable
            state.value++;
        },
        decremented: (state) => {
            state.value--;
          },
    }
});

export const {incremented,decremented} = counterSlice.actions;
export default counterSlice.reducer;

