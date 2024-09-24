<template>
  <!-- Navbar with Bootstrap-Vue's b-navbar component -->
  <b-navbar toggleable="lg" type="light" variant="primary" fixed="top" small class="custom-navbar">
    
    <!-- Navbar Brand with Logo -->
    <!-- Clickable router-link redirects to the main route (Home) -->
    <b-nav-item :to="{ name: 'main' }" class="navbar-brand">
      <!-- Display logo image, imported via require -->
      <b-img
        :src="require('@/assets/main_chef_logo.png')"
        alt="Chef Logo"
        class="navbar-logo"
      />
    </b-nav-item>

    <!-- Toggle button for expanding/collapsing the navbar on smaller screens -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> 
    
    <b-collapse id="nav-collapse" is-nav>
      <!-- Left-aligned navigation links -->
      <b-navbar-nav>
        <!-- Home Link -->
        <b-nav-item :to="{ name: 'main' }" class="nav-link"><b>Home</b></b-nav-item>
        <!-- Search Link -->
        <b-nav-item :to="{ name: 'search' }" class="nav-link"><b>Search</b></b-nav-item>
        <!-- About Link -->
        <b-nav-item :to="{ name: 'about' }" class="nav-link"><b>About</b></b-nav-item>
      </b-navbar-nav>

      <!-- Conditionally render personal dropdown for logged-in users -->
      <!-- v-if ensures this section only appears when the user is logged in -->
      <b-navbar-nav v-if="$root.store.username">
        <!-- Personal Dropdown -->
        <b-nav-item-dropdown html="<b>Personal</b>" class="nav-link">
          <!-- Dropdown items for logged-in users -->
          <b-dropdown-item :to="{ name: 'favorites' }" class="nav-link"><b>Favorites</b></b-dropdown-item>
          <b-dropdown-item :to="{ name: 'private' }" class="nav-link"><b>Private</b></b-dropdown-item>
          <b-dropdown-item :to="{ name: 'family' }" class="nav-link"><b>Family</b></b-dropdown-item>
          <b-dropdown-item @click="showAddRecipeModal" class="nav-link"><b>Add Recipe</b></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right-aligned navbar links for guests and logged-in users -->
      <b-navbar-nav class="ml-auto">
        <!-- Guest dropdown menu (Register & Login) -->
        <!-- v-if ensures this section only appears when the user is not logged in -->
        <b-nav-item-dropdown v-if="!$root.store.username" html="<b>Hello guest</b>" class="nav-link">
          <b-dropdown-item :to="{ name: 'register' }" class="nav-link"><b>Register</b></b-dropdown-item>
          <b-dropdown-item :to="{ name: 'login' }" class="nav-link"><b>Login</b></b-dropdown-item>
        </b-nav-item-dropdown>

        <!-- Logout button visible to logged-in users -->
        <b-navbar-nav v-else>
          <b-nav-item @click="Logout" class="nav-link"><b>Logout</b></b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>

    <!-- Modal for adding a recipe (only visible when triggered) -->
    <AddRecipeModal v-if="isAddRecipeModalVisible" @close="isAddRecipeModalVisible = false" />
  </b-navbar>
</template>

<script>
import AddRecipeModal from '@/components/AddRecipeModal.vue';

export default {
  components: {
    AddRecipeModal, // Importing the AddRecipeModal component to display the modal
  },
  data() {
    return {
      isAddRecipeModalVisible: false, // Controls visibility of the Add Recipe modal
    };
  },
  methods: {
    // Method to show the Add Recipe modal
    showAddRecipeModal() {
      this.isAddRecipeModalVisible = true;
    },
    // Logout method: handles user logout logic
    async Logout() {
      try {
        // Triggering logout action from the global store
        await this.$root.store.logout();
        // Display success message upon successful logout
        this.$root.toast("Logout", "User logged out successfully", "success");
        
        // Redirect to home route if not already there
        if (this.$route.path !== '/') {
          await this.$router.push('/');
        }
      } catch (error) {
        // Handle any errors during the logout process
        console.error("Error during logout:", error);
        // Display error message if logout fails
        this.$root.toast("Logout Error", "There was an issue logging out", "error");
      }
    },
  },
};
</script>

<style scoped>
/* Custom styles for the navbar */
  .custom-navbar {
    background-color: rgba(248, 245, 237, 0.90) !important; /* Light cream background color */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    border-bottom: none; /* Remove border */
  }

  /* Styling for the navigation links */
  ::v-deep .nav-link b, .bold-option b, .b-nav-item-dropdown, .dropdown-toggle {
    font-size: 1.2rem !important; /* Slightly larger font size */
    color: #1e3a8a !important; /* Blue color for the links */
    margin: 0 10px; /* Add spacing between links */
    cursor: pointer; /* Pointer cursor to indicate clickability */
  }

  /* Remove focus styles from dropdown items */
  ::v-deep .b-dropdown-item:focus, 
  ::v-deep .b-dropdown-item:active, 
  ::v-deep .dropdown-item:focus, 
  ::v-deep .dropdown-item:active {
    background-color: transparent !important; /* Remove background highlight */
    color: inherit !important; /* Retain text color */
    outline: none !important; /* Remove focus outline */
    box-shadow: none !important; /* Remove focus shadow */
  }

  /* Hover styles for navbar links */
  ::v-deep .nav-link b:hover, .bold-option b:hover, .b-nav-item-dropdown:hover, .dropdown-toggle:hover {
    color: #3a6efb !important; /* Slightly darker blue on hover */
  }

  /* Logo sizing for the navbar */
  .navbar-logo {
    max-width: 50px; /* Limit logo width */
    height: auto; /* Auto height to maintain aspect ratio */
  }
</style>
