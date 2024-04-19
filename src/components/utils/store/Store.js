import create from 'zustand';

// Define the initial state
const initialState = {
  selectedOption: {}, // Initialize as an empty object
};

// Create the store
export const useRadioStore = create((set) => ({
  selectedOption: "",
  setSelectedOption: (key, value, callback) => {
    set({ selectedOption: { key, value } });
    if (callback && typeof callback === 'function') {
      callback({ key, value });
    }
  },
  resetSelectedOption: () => set({ selectedOption: {} }), // Reset to an empty object
}));
