<template>
  <div class="cat-gallery-skeleton" aria-hidden="true">
    <div class="cat-gallery-skeleton__header">
      <UiSkeleton variant="text" width="100px" height="1em" />
    </div>
    <UiSkeleton variant="rect" height="140px" />
    <UiSkeleton variant="rect" height="180px" />
    <UiSkeleton variant="rect" height="120px" />
    <UiSkeleton variant="rect" height="36px" width="100%" />
  </div>
</template>

<script>
export default {
  name: 'CatGallerySkeleton',

}
</script>

<style scoped>
.cat-gallery-skeleton {
  padding: var(--space-md);
  background: var(--color-bg-card);
  border: 1px solid rgba(252, 93, 127, 0.15);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.cat-gallery-skeleton__header {
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid rgba(252, 93, 127, 0.15);
  margin-bottom: var(--space-xs);
}
</style>
