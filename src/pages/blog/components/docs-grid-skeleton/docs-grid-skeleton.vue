<template>
  <div class="docs-grid-skeleton" aria-hidden="true">
    <div
      v-for="n in count"
      :key="n"
      class="docs-grid-skeleton__card"
    >
      <Skeleton variant="rect" height="140px" />
      <div class="docs-grid-skeleton__content">
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="60%" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocsGridSkeleton',

  props: {
    count: { type: Number, default: 6 }
  }
}
</script>

<style scoped>
.docs-grid-skeleton {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-lg);
}

.docs-grid-skeleton__card {
  background: var(--color-bg-card);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.docs-grid-skeleton__content {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

@media (max-width: 768px) {
  .docs-grid-skeleton {
    grid-template-columns: 1fr;
  }
}
</style>
