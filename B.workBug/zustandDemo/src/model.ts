import { createWithEqualityFn } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { create } from 'zustand'
import { produce } from 'immer'
// Use createWithEqualityFn instead of create
export const useBearStore = create(
  (set) => ({
    bears: 0,
    name: {
      name2:{
        mom:'wu',
        fat:'young'
      }
    },
    increasePopulation: () => set((state:any) => ({ bears: state.bears + 1 })),
    //这样写会重新返回新的name2对象
    changeName: () => set((draft:any) => ({name: {
      name2:{
        ...draft.name.name2,mom:'wuhuhu'
      }}})),
    changeName2: () => set(
      produce(draft => {
        draft.name.name2.mom = 'hahahah'
      })
    ),
    removeAllBears: () => set({ bears: 0 }),
  })
)
