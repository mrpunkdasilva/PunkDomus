<template>
  <div class="post-skeleton" aria-hidden="true">
    <div class="post-skeleton__header">
      <Skeleton variant="text" width="70%" height="2.5em" />
      <div class="post-skeleton__meta">
        <Skeleton variant="text" width="120px" />
        <div class="post-skeleton__tags">
          <Skeleton variant="text" width="60px" height="24px" />
          <Skeleton variant="text" width="70px" height="24px" />
        </div>
      </div>
      <Skeleton variant="rect" height="3px" width="100%" />
    </div>
    <Skeleton variant="rect" height="400px" />
    <div class="post-skeleton__content">
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="90%" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="75%" />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="85%" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostSkeleton',

}
</script>

<style scoped>
.post-skeleton {
  background: var(--color-bg-card);
  border: 1px solid var(--border-secondary);
  border-radius: var(--radius-md);
  padding: var(--space-xl);
}

.post-skeleton__header {
  margin-bottom: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.post-skeleton__meta {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.post-skeleton__tags {
  display: flex;
  gap: var(--space-xs);
}

.post-skeleton__content {
  margin-top: var(--space-xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}
</style>
