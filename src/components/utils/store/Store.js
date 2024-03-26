import create from 'zustand';

// Define the initial state
const initialState = {
  selectedOption: null,
};

// Create the store
export const useRadioStore = create((set) => ({
  selectedOption: null,
  setSelectedOption: (key, value, callback) => {
    set({ selectedOption: { key, value } });
    // Optional: Call the callback function after setting the state
    if (callback && typeof callback === 'function') {
      callback({ key, value });
    }
  },
  resetSelectedOption: () => set({ selectedOption: null }),
}));
