<template>
<div>
  <b-jumbotron
   bg-variant=""
    text-variant="dark"
     header="light"
     class="custom-jumbotron"
     >
     <template #header>
        <span class="main-hello">Hello {{$root.store.username}}</span>
      </template>
     <template #lead> welcome to Recipedia</template>
    <p>Explore a world of delicious recipes, from quick meals to gourmet dishes, curated by top chefs. 
        Whether you're a beginner or a seasoned cook, you'll find inspiration, tips, and ideas to create 
        unforgettable meals for every occasion.</p>
  </b-jumbotron>
</div>
</template>
<style scoped>
/* Custom Jumbotron Styles */
.custom-jumbotron {
  background-color: rgba(248, 245, 237, 0.90) !important; /* Match the navbar's background color */
  color: #1e3a8a !important; /* Use the same blue color as the navbar text */
  border: 1px solid rgba(228, 218, 202, 0.9); /* Optional: Add a subtle border */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: Add a subtle shadow */
}

/* Optional styling for the header and lead text */
.custom-jumbotron h1, .custom-jumbotron .lead {
  color: #1e3a8a !important; /* Ensuring header and lead text use the same blue color */
}
.main-hello {
  font-weight: 600 !important; /* Make the "Hello" text bold */
  color: #1e3a8a; /* Ensure it matches your desired color */
}
</style>