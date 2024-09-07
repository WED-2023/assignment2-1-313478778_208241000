<template>
<div>
  <b-jumbotron
   bg-variant=""
    text-variant="primary"
     header="light"

     >
     <template #header>Hello {{$root.store.username}} </template>
     <template #lead> welcome to Recipedia</template>
    <p>Explore a world of delicious recipes, from quick meals to gourmet dishes, curated by top chefs. 
        Whether you're a beginner or a seasoned cook, you'll find inspiration, tips, and ideas to create 
        unforgettable meals for every occasion.</p>
  </b-jumbotron>
</div>
</template>