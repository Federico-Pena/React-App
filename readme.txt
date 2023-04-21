Base de React con webpack y babel

1) iniciar un proyecto de node

2) instalar webpack {npm install webpack webpack-cli --save-dev}

3)crear archivo en el directotio base con el nombre {webpack.config.js}

4)Esto lleva adentro {
  
  const path = require('path');

        module.exports = {
          mode: 'development',
          entry: './src/index.js',
          output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
          },
        };

}

5) Se puede agregar un script al package.json para que ejecute webpack {
  "scripts": {
    "webpack": "webpack --watch"
  }
}



6)Instalar react y react-dom {
  npm i react react-dom  
}

7)Instalar babel 
{
  npm install --save-dev babel-loader @babel/core
}

8)agregar al archivo de configuracion de webpack babel  {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
  -----------------------------------------------
  Quedaria asi
{
  const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'boundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
}


9)Crear archivo de configuracion de babel

Se puede llamar {.babelrc o babel.config.json}

Este es el contenido{
  {
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
}

Instalar el preset {
  npm install @babel/preset-env @babel/preset-react --save-dev
}


10)Queda pronto para usar React



11)Hola Mundo en React
          {
            const React = require( 'react')
            const { createRoot }= require( 'react-dom/client');

            const appRoot = document.getElementById("appRoot")

            const root = createRoot(appRoot); 
            root.render(
              <h1>Hola mundo</h1>
            );
                        }


