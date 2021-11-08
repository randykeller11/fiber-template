import create from "zustand";
import { useGLTF } from "@react-three/drei";

let useModelStore = create((set) => ({
  models: [],
  add: (newModel) =>
    set((state) => ({
      models: state.models.push({
        location: newModel,
        scene: useGLTF(newModel),
        pos: [0, 0, 0],
        rot: [0, 0, 0],
        scale: [0, 0, 0],
      }),
    })),
  edit: (edit) =>
    set((state) => ({
      models: state.models
        .filter((model) => edit.location != model.location)
        .push({
          location: edit.location,
          scene: useGLTF(edit.location),
          pos: edit.pos,
          rot: edit.rot,
          scale: edit.scale,
        }),
    })),
  delete: (location) =>
    set((state) => ({
      models: state.models.filter((model) => location != model.location),
    })),
}));

export default useModelStore;
