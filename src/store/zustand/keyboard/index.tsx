import create from 'zustand'

interface Controls {
    forward: boolean,
    backward: boolean,
    left: boolean,
    right: boolean,
}

interface ControlsActios {
    setControls: (state: Controls,value: boolean) => void
}

// const useControlsStore = create<Controls & ControlsActios>((set) => ({
//     forward: false,
//     backward: false,
//     left: false,
//     right: false,
//     setControls: (state,value) => set(() => ({ state: value }))
// }))
  
// export default useControlsStore