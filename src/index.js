const React = require( 'react')
const { createRoot }= require( 'react-dom/client');

const appRoot = document.getElementById("appRoot")

const root = createRoot(appRoot); 
root.render(
  <h1>Hola mundo</h1>
);