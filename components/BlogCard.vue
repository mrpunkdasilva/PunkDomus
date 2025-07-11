<template>
  <nuxt-link :to="{ name: 'slug', params: { slug: post.slug } }" class="blog-card-link">
    <article class="blog-card">
      <img v-if="post.img" :src="require(`~/public/resources/${post.img}`)" :alt="post.title" class="card-image"/>
      <div class="card-content">
        <h3 class="card-title">{{ post.title }}</h3>
        <p class="card-excerpt">{{ post.description }}</p>
        <div class="card-meta">
          <span class="date">{{ formatDate(post.createdAt) }}</span>
          <div class="tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
.blog-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.blog-card {
  background: rgba(8, 14, 26, 0.8);
  border: 1px solid rgba(33, 222, 234, 0.2);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-10px) scale(1.03);
  border-color: rgba(33, 222, 234, 0.5);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid rgba(33, 222, 234, 0.2);
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-title {
  color: #21DEEA;
  font-size: 1.3em;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.card-excerpt {
  color: #afafaf;
  margin-bottom: 1rem;
  line-height: 1.5;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-meta {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(252, 93, 127, 0.1);
}

.date {
  font-size: 0.85em;
  color: #FC5D7F;
  margin-bottom: 0.75rem;
  display: block;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(252, 93, 127, 0.1);
  color: #FC5D7F;
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.75em;
  border: 1px solid rgba(252, 93, 127, 0.2);
}
</style>
