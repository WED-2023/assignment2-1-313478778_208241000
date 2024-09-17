<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    tag="div"
  >
    <b-card no-body class="recipe-preview overflow-hidden" :style="imageContainerStyle">
      <b-row no-gutters>
        <b-col md="6">
          <div class="image-container position-relative">
            <b-card-img
              v-if="image_load"
              :src="recipe.image"
              alt="Image"
              class="rounded-0"
              :style="imageStyle"
              @load="onImageLoad"
            ></b-card-img>
            <hover-icon v-if="this.$root.store.username" class="icon-overlay" iconName="star"></hover-icon>
          </div>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <template v-if="recipe.vegetarian || recipe.vegan || recipe.glutenFree">
              <b-card-title
                class="recipe-body font-weight-bold"
                :title="recipe.title"
                style="font-size: 1.1rem; padding-bottom: 16px; margin-bottom: 0px;"
              />
            </template>

            <template v-else>
              <b-card-title
                class="recipe-body font-weight-bold"
                :title="recipe.title"
                style="font-size: 1.1rem; padding-top: 16px; padding-bottom: 16px; margin-bottom: 0px;"
              />
            </template>

            <!-- Conditional rendering for dietary icons -->
            <b-card-text
              class="d-flex justify-content-center"
              style="column-gap: 10px; font-size: 1rem"
            >
              <template v-if="recipe.vegetarian || recipe.vegan || recipe.glutenFree">
                <b-img
                  v-if="recipe.vegetarian || recipe.vegan"
                  :src="require('@/assets/vegetarian_logo.png')"
                  alt="Vegetarian"
                  width="60"
                />
                <b-img
                  v-if="recipe.vegan"
                  :src="require('@/assets/vegan_logo.png')"
                  alt="Vegan"
                  width="60"
                />
                <b-img
                  v-if="recipe.glutenFree"
                  :src="require('@/assets/gluten_free_logo.png')"
                  alt="Gluten Free"
                  width="60"
                />
              </template>
              <template v-else>
                <div style="min-height: 18px; visibility: hidden;"></div>
              </template>
            </b-card-text>

            <b-card-text class="d-flex align-items-center justify-content-around">
              <span>
                <h5><b-badge disabled variant="light">
                  {{ recipe.readyInMinutes }} min.
                  <b-icon-stopwatch font-scale="1.36"/>
                </b-badge></h5>
              </span>
              <span>
                <h5><b-badge disabled variant="primary">
                  {{ recipe.aggregateLikes }} likes
                  <b-icon-hand-thumbs-up variant="white" font-scale="1.36"/>
                </b-badge></h5>
              </span>
            </b-card-text>
            <b-card-text v-if="this.isFullView" class="d-flex align-items-center justify-content-around" :style="{padding: '26px'}">
              <span>
                <h6>
                  <em>
                    "{{ recipe.summary }}"
                  </em>
                </h6>
              </span>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </router-link>
</template>

<script>
import HoverIcon from './HoverIcon.vue';
import axios from 'axios';

export default {
  components: {
    HoverIcon,
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
    isFullView: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      image_load: true,
      imageHeight: null,
    };
  },
  computed: {
    imageContainerStyle() {
      const defaultHeight = this.isFullView ? 400 : 170;
      const calculatedHeight = this.imageHeight ? Math.min(this.imageHeight, defaultHeight) : defaultHeight;
      return { height: `${calculatedHeight}px` };
    },
    imageStyle() {
      return this.isFullView
        ? 'height: 100%; object-fit: cover;' // Full view style
        : 'height: 100%; object-fit: cover;'; // Preview style
    },
  },
  methods: {
    onImageLoad(event) {
      this.imageHeight = event.target.height; // Get image height
      this.$forceUpdate(); // Ensure the component re-renders with the new height
    },
  },
  mounted() {
    axios.get(this.recipe.image).then(() => {
      this.image_load = true;
    });
  },
};
</script>

<style scoped>
  .recipe-preview {
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 32px;
    border: none;
    transition: transform 0.2s;
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
    overflow: hidden;
  }

  .icon-overlay {
    position: absolute;
    top: 10px; /* Adjust as needed */
    left: 10px; /* Adjust as needed */
    color: gold; /* Or any color you want */
  }
</style>
