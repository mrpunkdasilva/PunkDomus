<template>
  <div class="toc-skeleton" aria-hidden="true">
    <div class="toc-skeleton__header">
      <UiSkeleton variant="text" width="90px" height="1em" />
    </div>
    <div class="toc-skeleton__items">
      <UiSkeleton variant="text" width="85%" />
      <UiSkeleton variant="text" width="70%" />
      <UiSkeleton variant="text" width="90%" />
      <UiSkeleton variant="text" width="55%" />
      <UiSkeleton variant="text" width="75%" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TocSkeleton',
  components: {
    UiSkeleton: () => import('../ui/skeleton/skeleton.vue')
  }
}
</script>

<style scoped>
.toc-skeleton {
  padding: var(--space-md);
  background: var(--color-bg-card);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
}

.toc-skeleton__header {
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--border-primary);
  margin-bottom: var(--space-sm);
}

.toc-skeleton__items {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}
</style>
