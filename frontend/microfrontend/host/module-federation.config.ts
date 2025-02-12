export const mfConfig = {
  name: "host",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    'auth': 'auth@http://localhost:8081/remoteEntry.js',
    'places': 'places@http://localhost:8082/remoteEntry.js',
    'profile': 'profile@http://localhost:8083/remoteEntry.js',
    'layout': 'layout@http://localhost:8084/remoteEntry.js',
  },
};
