import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  function reveal() {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })
  }

  onMounted(() => {
    setTimeout(reveal, 100)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
