<template>
  <div class="share-buttons" role="group" aria-label="Compartilhar artigo">
    <a :href="twitterShareUrl" target="_blank" rel="noopener noreferrer" class="share-button twitter" aria-label="Compartilhar no X">
      <i class="fab fa-x-twitter" aria-hidden="true"></i>
    </a>
    <a :href="linkedinShareUrl" target="_blank" rel="noopener noreferrer" class="share-button linkedin" aria-label="Compartilhar no LinkedIn">
      <i class="fab fa-linkedin-in" aria-hidden="true"></i>
    </a>
    <button @click="copyLink" class="share-button copy" :aria-label="copied ? 'Link copiado!' : 'Copiar link'">
      <i class="fas fa-link" aria-hidden="true"></i>
      <span v-if="copied" class="sr-only">Copiado!</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    url: { type: String, required: true }
  },
  data() {
    return {
      copied: false
    }
  },
  computed: {
    twitterShareUrl() {
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.title)}&url=${encodeURIComponent(this.url)}`
    },
    linkedinShareUrl() {
      return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(this.url)}&title=${encodeURIComponent(this.title)}`
    }
  },
  methods: {
    async copyLink() {
      try {
        await navigator.clipboard.writeText(this.url)
        this.copied = true
        setTimeout(() => { this.copied = false }, 2000)
      } catch (err) {
        console.error('Falha ao copiar o link: ', err)
      }
    }
  }
}
</script>

<style scoped>
.share-buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  justify-content: flex-end;
  padding-right: 20px;
}

.share-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.2em;
  color: var(--color-text);
  text-decoration: none;
  transition: all var(--transition-normal);
  border: 1px solid transparent;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.share-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.share-button:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
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

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

@media (prefers-reduced-motion: reduce) {
  .share-button {
    transition: none;
  }
  .share-button:hover {
    transform: none;
  }
}

@media (max-width: 768px) {
  .share-buttons {
    justify-content: center;
    padding-right: 0;
  }
}
</style>
