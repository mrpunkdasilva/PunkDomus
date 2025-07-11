<template>
  <div class="share-buttons">
    <a :href="twitterShareUrl" target="_blank" rel="noopener noreferrer" class="share-button twitter" aria-label="Share on X">
      <i class="fab fa-x-twitter"></i>
    </a>
    <a :href="linkedinShareUrl" target="_blank" rel="noopener noreferrer" class="share-button linkedin" aria-label="Share on LinkedIn">
      <i class="fab fa-linkedin-in"></i>
    </a>
    <button @click="copyLink" class="share-button copy" aria-label="Copy link">
      <i class="fas fa-link"></i>
    </button>
    <!-- Placeholder for TabNews share button -->
    <!-- <a href="#" class="share-button tabnews" aria-label="Share on TabNews">
      <i class="fas fa-newspaper"></i>
    </a> -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    twitterShareUrl() {
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.title)}&url=${encodeURIComponent(this.url)}`;
    },
    linkedinShareUrl() {
      return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(this.url)}&title=${encodeURIComponent(this.title)}`;
    }
  },
  methods: {
    async copyLink() {
      try {
        await navigator.clipboard.writeText(this.url);
        alert('Link copiado para a área de transferência!');
      } catch (err) {
        console.error('Falha ao copiar o link: ', err);
        alert('Não foi possível copiar o link.');
      }
    }
  }
};
</script>

<style scoped>
.share-buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  justify-content: flex-end; /* Alinha os botões à direita */
  padding-right: 20px; /* Adiciona um pouco de padding para não colar na borda */
}

.share-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2em;
  color: #efefef;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.share-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.share-button.twitter {
  background-color: #000000;
}

.share-button.twitter:hover {
  background-color: #333333;
  border-color: #333333;
}

.share-button.linkedin {
  background-color: #0077B5;
}

.share-button.linkedin:hover {
  background-color: #006699;
  border-color: #006699;
}

.share-button.copy {
  background-color: #6c757d;
  border-color: #6c757d;
  cursor: pointer;
}

.share-button.copy:hover {
  background-color: #5a6268;
  border-color: #5a6268;
}

/* Responsividade */
@media (max-width: 768px) {
  .share-buttons {
    justify-content: center; /* Centraliza os botões em telas menores */
    padding-right: 0;
  }
}
</style>
