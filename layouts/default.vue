<template>
  <div>
    <HeaderMain/>
    <Nuxt/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inria Sans", sans-serif;
  color: #efefef;
}

/* Estilo da seleção de texto */
::selection {
  background: rgba(33, 222, 234, 0.3); /* Cor cyberpunk clara com transparência */
  color: #FC5D7F; /* Rosa neon */
  text-shadow: 0 0 8px rgba(252, 93, 127, 0.8);
}

::-moz-selection {
  background: rgba(33, 222, 234, 0.3);
  color: #FC5D7F;
  text-shadow: 0 0 8px rgba(252, 93, 127, 0.8);
}

/* Estilo da scrollbar - Webkit (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #1E1E1E;
  border: 1px solid #333;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #FC5D7F, #21DEEA);
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(33, 222, 234, 0.5);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #21DEEA, #FC5D7F);
}

/* Estilo da scrollbar - Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #FC5D7F #1E1E1E;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #21DEEA;
  font-family: "Protest Guerrilla", sans-serif;
}

h3,
h4,
h5,
h6 {
  font-family: "Inria Sans", sans-serif;
  font-weight: 600;
}

body {
  background-color: #1E1E1E;
}

a {
  text-decoration: none;
  color: rgba(252, 93, 127, 1);
  font-family: "Protest Guerrilla", sans-serif;
}

p {
  margin-bottom: 15px;
  font-family: "Inria Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}

p:last-of-type {
  margin-bottom: 0px;
}
</style>
