import { create } from 'zustand'

const INITIAL_RESSOURCES = {
    availableSurvivor: 0,
    totalSurvivor: 0,
    wood: 500,
    meat: 10,
    stone: 0,
    score: 0
  };


const initalMap = () => {

      const map = new Array()

      for (let columnIndex = 0; columnIndex < 5; columnIndex++) {
        let column = new Array();
        map.push(column);
        for (let line = 0; line < 5; line++) {
          const random = Math.floor(Math.random() * 100);
          let type = "empty";
          if (random < 10) {
            type = "tree";
          } else if (random < 20) {
            type = "stone";
          }
          column.push({ type, column: columnIndex, line: line });
        }
      }

      return map;
    };

export const useRessources = create((set, get) => ({
  ressources: {...INITIAL_RESSOURCES},
  map: initalMap(),
  time: 0,

  addAvailableSurvivor: () =>
    set((state) => ({
      ressources: {
        ...state.ressources,
        availableSurvivor: state.ressources.availableSurvivor + 2,
      },
    })),

  addTotalSurvivor: () =>
    set((state) => ({
      ressources: {
        ...state.ressources,
        totalSurvivor: state.ressources.totalSurvivor + 2,
      },
    })),

  removeWood: () =>
    set((state) => ({
      ressources: {
        ...state.ressources,
        wood: state.ressources.wood - 5,
      },
    })),

  consumeMeat: () =>
    set((state) => ({
      ressources: {
        ...state.ressources,
        meat: Math.max(0, state.ressources.meat - state.ressources.totalSurvivor),
      },
    })),

  resetRessource: () =>
    set(() => ({
      ressources: {...INITIAL_RESSOURCES},
      time: 0,
      map: initalMap()
    })),

    increaseTime: (val) => set(() => ({ time: get().time + val })),


    setScore: (score) => set((state) => ({
      ressources: {
        ...state.ressources,
        score: score
      }
    })),

  addBuilding: (newMap) =>
    set((state) => ({
      ...state.map,
      map: newMap
    })),
}));