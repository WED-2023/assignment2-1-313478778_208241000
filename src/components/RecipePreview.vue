<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    tag="div"
  >
    <b-card no-body class="recipe-preview overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <div class="image-container position-relative">
            <b-card-img
            v-if="image_load"
            :src="recipe.image"
            alt="Image"
            class="rounded-0"
            style="height:100%"
          ></b-card-img> 
          <hover-Icon class="icon-overlay" iconName="star"></hover-icon>
          </div>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <b-card-title
              class="recipe-body font-weight-bold"
              :title="recipe.title"
              style="font-size: 1.1rem; padding-bottom: 16px; margin-bottom: 0px;"
              />
            <b-card-text
              class="d-flex justify-content-center"
              style="column-gap: 10px; font-size: 1rem"
            >
              <b-img
                :src="require('@/assets/vegetarian_logo.png')"
                alt="Responsive image"
                width="60"
                height=auto
              />
              <b-img
                :src="require('@/assets/vegan_logo.png')"
                alt="Responsive image"
                width="60"
                height=auto
              />
              <b-img
                :src="require('@/assets//gluten_free_logo.png')"
                alt="Responsive image"
                width="60"
                height=auto
              />
            </b-card-text>
            <b-card-text class="d-flex align-items-center justify-content-around">
              <!-- <span>{{ recipe.readyInMinutes }} min. <b-icon-stopwatch font-scale="1.36"/> </span> -->
              <!-- <span>{{ recipe.readyInMinutes }} min. <hover-icon iconName="stopwatch"/> </span> -->
              <span><h5><b-badge disabled variant="light">{{ recipe.readyInMinutes }} min. <b-icon-stopwatch font-scale="1.36"/></b-badge></h5></span>
              <!-- <span><b-badge disabled variant="primary" > {{ recipe.aggregateLikes }} likes <b-icon-hand-thumbs-up variant="white" font-scale="1.36"/></b-badge></span> -->
              <span><h5><b-badge disabled variant="primary" > {{ recipe.aggregateLikes }} likes <b-icon-hand-thumbs-up variant="white" font-scale="1.36"/></b-badge></h5></span>
              <!-- <span> <h5>{{ recipe.aggregateLikes }} likes <b-icon-hand-thumbs-up variant="primary" font-scale="1.36"/></h5> </span> -->


            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </router-link
  >
</template>

<script>
import HoverIcon from './HoverIcon.vue';
  export default {
    components:{
    HoverIcon
  },
    mounted() {
      this.
        HoverIconaxios.get(this.recipe.image).then((i) => {
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

  .image-container {
  position: relative;
  height: 100%;
  }

.icon-overlay {
  position: absolute;
  top: 10px; /* Adjust as needed */
  left: 10px; /* Adjust as needed */
  color: gold; /* Or any color you want */
  }

  /* .icons{
    transition: transform 0.3s ease, fill 0.3 ease;
  }

  .icons:hover{
    transform: scale(1.5);
  } */
</style>
