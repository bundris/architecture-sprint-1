export const mfConfig = {
  name: "layout",
  exposes: {
    './PopupWithForm': './src/components/PopupWithForm.js',
    './Main': './src/components/Main.js',
    './Header': './src/components/Header.js',
    './Footer': './src/components/Footer.js',
    './ProtectedRoute': './src/components/ProtectedRoute.js',
  },
  shared: ["react", "react-dom"],
};
