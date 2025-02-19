export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement('script')
    script.src = 'https://code.tidio.co/mano0gbnate9k5h8lvnumh3jo7znp39h.js'
    script.async = true
    document.body.appendChild(script)
  }
})