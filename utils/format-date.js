export function formatDate(date) {
  return new Date(date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
