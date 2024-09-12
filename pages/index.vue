<template>
  <div class="home-page">
    <h2>Latest Posts</h2>
    <div class="articles">
      <div class="article" v-for="article of articles" :key="article">
        <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
          <div class="article-inner">
            <img :src="require(`~/public/resources/${article.img}`)" alt=""/>
            <div class="detail">
              <h3>{{ article.title }}</h3>
              <br>
              <p>{{ article.description }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({
    $content,
    params
  }) {
    const articles = await $content('blog', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>

<style>

.home-page {
  padding: 50px 30px;
}

h2 {
  margin-bottom: 30px;
  text-align: center;
}

.articles {
  margin: 0 auto;
  max-width: 800px;
}

.article {
  margin-bottom: 15px;
}

.article-inner {
  padding: 15px;
  background: #000000;
  box-shadow: 0px 3px 0px 8px rgb(255 255 255 / 2%);
  border-radius: 8px;

  display: flex;
}

.article-inner img {
  display: block;
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
}

.article-inner .detail {
  padding-left: 15px;
  padding-right: 15px;
}

h3 {
  color: #fff;
  font-size: 24px;
  text-decoration: none;
}

p {
  color: #888;
  font-size: 18px;
  text-decoration: none;
}
</style>
