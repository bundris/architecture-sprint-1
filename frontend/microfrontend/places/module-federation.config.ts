export const mfConfig = {
  name: "places",
  exposes: {
    './AddPlacePopup': './src/components/AddPlacePopup.js',
    './Card': './src/components/Card.js',
    './ImagePopup': './src/components/ImagePopup.js',
  },
  shared: ["react", "react-dom"],
};
