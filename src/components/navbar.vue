<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <div class="container">
      <b-navbar-brand href="#">
        <router-link to="/" class="brand-link">PowerTrade</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="link" to="/products">Products</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" to="/about-us">About Us</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="link" to="/contact-us">Contact Us</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style scoped>
a.link,
a.brand-link {
  text-decoration: none;
  color: #333;
}

a.link:hover,
a.brand-link:hover {
  text-decoration: underline;
}
</style>