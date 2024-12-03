import nutrition from "./mock/nutrition.json";
import { create } from "zustand";

const useNutritionStore = create((set) => ({
  catergory: nutrition.map((item) => item.catergory),
  setCatergory: (catergory) => set({ catergory }),
  name: nutrition.map((item) => item.content.one.name),
  setName: (nutrition) => set({ nutrition }),
  content: nutrition.map((item) => item.content.one.detail),
  setContent: (nutrition) => set({ nutrition }),
}));

// console.log(
//   "nutrition",
//   useNutritionStore.getState().catergory,
//   useNutritionStore.getState().name,
//   useNutritionStore.getState().content
// );
export { useNutritionStore };
