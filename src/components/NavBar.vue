<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="primary" fixed="top" small class="custom-navbar">
      <!-- Navbar Brand with Logo - Make clickable by using router-link directly -->
      <router-link :to="{ name: 'main' }" class="navbar-brand">
        <b-img
          :src="require('@/assets/main_chef_logo.png')"
          alt="Chef Logo"
          class="navbar-logo"
        />
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Left aligned nav items -->
        <b-navbar-nav>
          <!-- Home Link -->
          <router-link tag="b-nav-item" :to="{ name: 'main' }" class="nav-link"><b>Home</b></router-link>
          
          <!-- Search Link -->
          <router-link tag="b-nav-item" :to="{ name: 'search' }" class="nav-link"><b>Search</b></router-link>

          <!-- About Link -->
          <router-link tag="b-nav-item" :to="{ name: 'about' }" class="nav-link"><b>About</b></router-link>

        </b-navbar-nav>

        <!-- User Dropdown -->
        <b-navbar-nav v-if="$root.store.username">
          <b-nav-item-dropdown text="Personal" right class="nav-link bold-option">
            <router-link tag="b-dropdown-item" :to="{ name: 'favorites' }" class="nav-link"><b>Favorites</b></router-link>
            <router-link tag="b-dropdown-item" :to="{ name: 'private' }" class="nav-link"><b>Private</b></router-link>
            <router-link tag="b-dropdown-item" :to="{ name: 'family' }" class="nav-link"><b>Family</b></router-link>
          </b-nav-item-dropdown>
          <b-button @click="showAddRecipeModal" variant="outline-primary" class="ml-2">Add Recipe</b-button>
        </b-navbar-nav>

        <!-- Right aligned nav items for Guests and Users -->
        <b-navbar-nav class="ml-auto">
          <!-- Guest Dropdown for Register & Login -->
          <b-nav-item-dropdown v-if="!$root.store.username" text="Hello guest" right class="nav-link bold-option">
            <router-link tag="b-dropdown-item" :to="{ name: 'register' }" class="nav-link"><b>Register</b></router-link>
            <router-link tag="b-dropdown-item" :to="{ name: 'login' }" class="nav-link"><b>Login</b></router-link>
          </b-nav-item-dropdown>

          <!-- Logout Button for Logged In Users -->
          <span v-else>
            <b-nav-item>
              {{ $root.store.username }}: 
              <b-button @click="Logout" class="logout-button" variant="outline-light"><b>Logout</b></b-button>
            </b-nav-item>
          </span>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <AddRecipeModal v-if="isAddRecipeModalVisible" @close="isAddRecipeModalVisible = false" />
  </div>
</template>


<script>
import AddRecipeModal from '@/components/AddRecipeModal.vue';

export default {
  components: {
    AddRecipeModal,
  },
  data() {
    return {
      isAddRecipeModalVisible: false,
    };
  },
  methods: {
    showAddRecipeModal() {
      this.isAddRecipeModalVisible = true;
    },
    async Logout() {
      try {
        await this.$root.store.logout();
        this.$root.toast("Logout", "User logged out successfully", "success");
        
        // Navigate to home route if not already there
        if (this.$route.path !== '/') {
          await this.$router.push('/');
        }
      } catch (error) {
        console.error("Error during logout:", error);
        this.$root.toast("Logout Error", "There was an issue logging out", "error");
      }
    },
  },
};
</script>

<style scoped>
.custom-navbar {
  background-color: rgba(248, 245, 237, 0.90) !important; /* White-cream background */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  border-bottom: none; /* Remove border if not needed */
}

.nav-link, .nav-link b, .bold-option, .bold-option b, .b-nav-item-dropdown, .b-nav-item-dropdown > .dropdown-toggle {
  font-size: 1.2rem !important;
  color: #1e3a8a !important; /* Blue color for navbar links */
  margin: 0 10px; /* Add spacing */
  cursor: pointer; /* Make it look clickable */
}

.nav-link:hover, .nav-link b:hover, .bold-option:hover, .bold-option b:hover, .b-nav-item-dropdown:hover, .b-nav-item-dropdown > .dropdown-toggle:hover {
  color: #0c4a6e !important; /* Slightly darker blue on hover */
}

.navbar-logo {
  max-width: 50px;
  height: auto;
  margin-right: 15px; /* Space between logo and links */
}

.button {
  color: #1e3a8a !important; /* Blue color for button text */
  border: 1px solid #2f5d6b; /* Subtle border */
}

.button:hover {
  background-color: #0c4a6e !important; /* Light coral */
}

.logout-button:hover {
  background-color: #1e3a8a !important; /* Maintain the current hover background */
  color: #ffffff !important; /* Change text color to white */
}

.logout-button:hover b {
  color: #ffffff !important; /* Force text color to white */
}

</style>
