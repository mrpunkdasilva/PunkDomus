<template>
  <section class="recent-posts-section">
    <h2 class="section-title">Últimos Posts</h2>
    <div class="posts-grid">
      <BlogCard v-for="post in posts" :key="post.slug" :post="post" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecentPosts',
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.recent-posts-section {
  padding: 60px 0;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5em;
  color: #21DEEA;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(33, 222, 234, 0.5);
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.posts-grid > * {
  max-width: 500px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2em;
  }

  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
