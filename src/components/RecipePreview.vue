<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    tag="div"
  >
    <b-card no-body class="recipe-preview overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            v-if="image_load"
            :src="recipe.image"
            alt="Image"
            class="rounded-0"
            style="height:100%"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-title
              class="recipe-body font-weight-bold"
              :title="recipe.title"
              style="font-size: 1.1rem; padding-bottom: 18px;"
              />
            <b-card-text
              class="d-flex justify-content-center"
              style="column-gap: 10px; font-size: 1rem"
            >
              <img
                src="../assets//myLogo.png"
                width="40"
                height="40"
                alt="Responsive image"
              />
              <img
                src="../assets//myLogo.png"
                width="40"
                height="40"
                alt="Responsive image"
              />
              <img
                src="../assets//myLogo.png"
                width="40"
                height="40"
                alt="Responsive image"
              />
            </b-card-text>
            <b-card-text class="d-flex align-items-center justify-content-around">
              <span>{{ recipe.readyInMinutes }} minutes </span>
              <span>{{ recipe.aggregateLikes }} likes </span>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </router-link
  >
</template>

<script>
  export default {
    mounted() {
      this.axios.get(this.recipe.image).then((i) => {
        this.image_load = true;
      });
    },
    data() {
      return {
        image_load: true,
      };
    },
    props: {
      recipe: {
        type: Object,
        required: true,
      },

      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      readyInMinutes: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      aggregateLikes: {
        type: Number,
        required: false,
        default() {
          return undefined;
        },
      },
      
    },
  };
</script>

<style scoped>
  .recipe-preview {
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    min-width: 90%;
    border-radius: 32px;
    border: none;
    transition: transform 0.2s;
    max-height: 170px;

  }

  .recipe-preview:hover {
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
    transform: translateY(-3px);
  }
  .recipe-body {
    justify-content: space-between;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
