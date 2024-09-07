<template>
    <div class="about-container">
      <h1 class="about-title">About Us</h1>
      <p class="about-description">
        Welcome to our project! We are Itay and Amit, passionate developers with a focus on creating amazing web applications.
      </p>
      
      <div class="about-links">
        <div class="link-card">
          <h2>Itay's GitHub</h2>
          <a href="https://github.com/ItayGitHub" target="_blank" class="github-link">
            <i class="fab fa-github"></i> View Itay's Repositories
          </a>
        </div>
        
        <div class="link-card">
          <h2>Amit's GitHub</h2>
          <a href="https://github.com/AmitGitHub" target="_blank" class="github-link">
            <i class="fab fa-github"></i> View Amit's Repositories
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutPage",
  };
  </script>
  
  <style scoped>
  .about-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .about-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #2c3e50;
  }
  
  .about-description {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #34495e;
  }
  
  .about-links {
    display: flex;
    justify-content: space-around;
    gap: 20px;
  }
  
  .link-card {
    flex: 1;
    padding: 15px;
    background: #556b2f; /* Matches the navbar color */
    color: white;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .link-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .github-link {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background: #fff;
    color: #556b2f;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s, color 0.3s;
  }
  
  .github-link:hover {
    background: #2c3e50;
    color: #fff;
  }
  
  .fab.fa-github {
    margin-right: 8px;
  }
  </style>
  