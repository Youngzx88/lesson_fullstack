import {create} from "zustand";
import produce from 'immer';

interface globalStateType {
  state: {
    stateInfo: string
  }
  actions: {
    actionInfo: () => void
  }
}
export const globalState = create<globalStateType>((set, get) => ({
  state: {
    stateInfo: '1',
  },
  actions: {
    actionInfo: () => {
      set(produce((draft:any) => {
          draft.state.stateInfo = '123'
        })
      )
    },
  },
}))
