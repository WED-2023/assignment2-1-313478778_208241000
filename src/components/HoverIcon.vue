<template>
    <component
      :is="currentIconComponent"
      :variant="defaultVariant"
      :font-scale="fontScale"
      class="hover-icon"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    />
  </template>
  
  <script>
  export default {
    props: {
      iconName: {
        type: String,
        required: true
      },
      defaultVariant: {
        type: String,
        default: '' // Default color
      },
      fontScale: {
        type: Number,
        default: 1.36 // Default size scale
      }
    },
    data() {
      return {
        currentIcon: this.iconName // Set initial icon name
      };
    },
    computed: {
      currentIconComponent() {
        // Format the component name dynamically
        console.log(`b-icon-${this.currentIcon}`)
        return `b-icon-${this.currentIcon}`;
        
      }
    },
    methods: {
      onMouseOver() {
        this.currentIcon = this.iconName + '-fill'; // Change to hover icon
      },
      onMouseLeave() {
        this.currentIcon = this.iconName; // Revert to default icon
      }
    }
  }
  </script>
  
  <style scoped>
  .hover-icon {
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
  }
  .hover-icon:hover {
    transform: scale(1.5); /* Size increases on hover */
  }
  </style>
  