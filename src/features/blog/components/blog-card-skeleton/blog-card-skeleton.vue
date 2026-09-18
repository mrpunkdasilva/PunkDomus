<template>
  <div class="blog-card-skeleton" aria-hidden="true">
    <UiSkeleton variant="rect" height="200px" />
    <div class="blog-card-skeleton__content">
      <UiSkeleton variant="text" width="80%" height="1.3em" />
      <UiSkeleton variant="text" />
      <UiSkeleton variant="text" />
      <UiSkeleton variant="text" width="60%" />
      <div class="blog-card-skeleton__meta">
        <UiSkeleton variant="text" width="100px" />
        <div class="blog-card-skeleton__tags">
          <UiSkeleton variant="text" width="50px" height="24px" />
          <UiSkeleton variant="text" width="60px" height="24px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCardSkeleton',

}
</script>

<style scoped>
.blog-card-skeleton {
  background: var(--color-bg-card);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.blog-card-skeleton__content {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.blog-card-skeleton__meta {
  margin-top: var(--space-xs);
  padding-top: var(--space-sm);
  border-top: 1px solid rgba(252, 93, 127, 0.1);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.blog-card-skeleton__tags {
  display: flex;
  gap: var(--space-xs);
}
</style>
