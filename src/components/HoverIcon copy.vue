<template>
  <!-- Dynamic component to render the icon based on currentIconComponent -->
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
    /**
     * @prop {String} iconName - The base name of the icon component (without the "-fill" suffix).
     * This prop is required as it defines the main icon to be displayed.
     */
    iconName: {
      type: String,
      required: true
    },
    /**
     * @prop {String} [defaultVariant=''] - Defines the color variant of the icon (e.g., 'primary', 'danger').
     * The default value is an empty string, which will apply no special variant unless specified.
     */
    defaultVariant: {
      type: String,
      default: ''
    },
    /**
     * @prop {Number} [fontScale=1.7] - Controls the size of the icon. Default is set to 1.7.
     * This allows for custom scaling of the icon via prop binding.
     */
    fontScale: {
      type: Number,
      default: 1.7
    }
  },
  data() {
    return {
      /**
       * @data {Boolean} isFilled - Tracks whether the icon is in its filled state.
       * It toggles between true (filled) and false (unfilled) based on user interactions.
       */
      isFilled: false,
      /**
       * @data {String} currentIcon - Holds the current icon name being displayed.
       * It starts as the base iconName passed via props.
       */
      currentIcon: this.iconName
    };
  },
  computed: {
    /**
     * @computed {String} currentIconComponent - Dynamically computes the full component name of the icon.
     * It combines "b-icon-" with the currentIcon value to properly reference BootstrapVue icons.
     */
    currentIconComponent() {
      return `b-icon-${this.currentIcon}`;
    }
  },
  methods: {
    /**
     * @method onMouseOver - Handles the mouseover event.
     * Temporarily shows the filled version of the icon when hovered, unless it's already in the filled state.
     */
    onMouseOver() {
      if (!this.isFilled) {
        this.currentIcon = this.iconName + '-fill';
      } else {
        this.currentIcon = this.iconName;
      }
    },
    /**
     * @method onMouseLeave - Handles the mouseleave event.
     * Reverts the icon back to its original state (filled or unfilled) when the mouse leaves.
     */
    onMouseLeave() {
      if (!this.isFilled) {
        this.currentIcon = this.iconName;
      } else {
        this.currentIcon = this.iconName + '-fill';
      }
    },
    /**
     * @method onMouseClick - Handles the click event.
     * Toggles the icon between its filled and unfilled state upon click.
     * Also prevents event propagation to avoid affecting other elements like parent cards.
     * 
     * @param {Event} event - The native click event, used here to stop propagation.
     */
    onMouseClick(event) {
      event.stopPropagation(); // Prevents click from bubbling up to parent components.
      this.isFilled = !this.isFilled; // Toggles the filled state.
      this.currentIcon = this.isFilled ? this.iconName + '-fill' : this.iconName; // Updates the icon accordingly.
    }
  }
}
</script>

<style scoped>
/* Style for the hover icon with pointer and transition effects */
.hover-icon {
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition on hover */
}

/* Style that increases the size of the icon when hovered */
.hover-icon:hover {
  transform: scale(1.5); /* Enlarges the icon on hover */
}
</style>
