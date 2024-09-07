<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top" small>
      <!-- Navbar Brand with Logo -->
      <router-link tag="b-navbar-brand" :to="{ name: 'main' }">
        <b-img
          :src="require('@/assets/main_chef_logo.png')"
          alt="Chef Logo"
          class = "navbar-logo"
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
          <b-nav-item-dropdown text="Personal" right class="bold-option">
            <router-link tag="b-dropdown-item" :to="{ name: 'favorites' }" class="nav-link"><b>Favorites</b></router-link>
            <router-link tag="b-dropdown-item" :to="{ name: 'personalRecipes' }" class="nav-link"><b>Private</b></router-link>
            <router-link tag="b-dropdown-item" :to="{ name: 'familyRecipes' }" class="nav-link"><b>Family</b></router-link>
          </b-nav-item-dropdown>
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
              <b-button @click="Logout" class="button" variant="outline-light"><b>Logout</b></b-button>
            </b-nav-item>
          </span>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    async Logout() {
      try {
        await this.$root.store.logout();
        this.$root.toast("Logout", "User logged out successfully", "success");
        const currentPath = this.$router.currentRoute.value.path;
        await this.$router.push("/");
        if (currentPath !== '/'){
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
.bold-option {
  font-weight: bold;
}

.button {
  color: #5a575a;
}

.button:hover {
  color: #9aaeb6;
}

.nav-link {
  font-size: 1.2rem !important; /* Example font size */
  padding-top: 1px; /* Adjust top padding */
  padding-bottom: 1px; /* Adjust bottom padding */
  padding-left: 1px; /* Adjust left padding */
  padding-right: 1px; /* Adjust right padding */
  }

.navbar-logo {
  max-width: 52px; /* Adjust width */
  height: auto; /* Maintain aspect ratio */
  padding-top: 1px; /* Adjust top padding */
  padding-bottom: 1px; /* Adjust bottom padding */
  padding-left: 1px !important;
  padding-right: 1px;
}

.navbar-brand {
  margin-right: 0.1rem;
}

</style>
