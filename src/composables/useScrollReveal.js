import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal({
  selector = '.reveal',
  options = { threshold: 0.1 },
  repeat = false,
} = {}) {
  let observer = null

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      } else if (repeat) {
        entry.target.classList.remove('active')
      }
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(handleIntersect, options)
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => observer?.observe(element))
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })
}
