<template>
  <div>
    <HeaderMain/>
    <Nuxt/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Protest+Guerrilla&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: sans-serif;
  color: #efefef;
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
