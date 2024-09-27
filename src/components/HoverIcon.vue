<template>
  <component
    :is="currentIconComponent"
    :variant="defaultVariant"
    :font-scale="fontScale"
    class="hover-icon"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
    @click="onMouseClick($event)"
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
      default: 1.7 // Default size scale
    }
  },
  data() {
    return {
      isFilled: false, // State to track if the icon is filled
      currentIcon: this.iconName // Set initial icon name
    };
  },
  computed: {
    currentIconComponent() {
      // Format the component name dynamically
      return `b-icon-${this.currentIcon}`;
    }
  },
  methods: {
    onMouseOver() {
      if (!this.isFilled) {
        this.currentIcon = this.iconName + '-fill'; // Temporarily show filled icon on hover
      }
      else{
        this.currentIcon = this.iconName;
      }
    },
    onMouseLeave() {
      if (!this.isFilled) {
        this.currentIcon = this.iconName; // Revert to default icon when not filled
      }
      else{
        this.currentIcon = this.iconName + '-fill';
      }
    },
    onMouseClick(event) {
      event.stopPropagation(); // Prevent click from affecting parent card
      this.isFilled = !this.isFilled; // Toggle the filled state
      this.currentIcon = this.isFilled ? this.iconName + '-fill' : this.iconName; // Update icon
      // Emit event to notify parent component if it's being added or removed from favorites
      // console.log('Emitting toggle-favorite with state:', this.isFilled); //debug
      this.$emit('toggle-favorite', this.isFilled); // Pass the filled state (true for add, false for remove)
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
