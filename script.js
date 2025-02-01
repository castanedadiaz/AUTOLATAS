document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide")
    let currentSlide = 0
  
    function showSlide(index) {
      slides[currentSlide].classList.remove("active")
      slides[index].classList.add("active")
      currentSlide = index
    }
  
    function nextSlide() {
      const nextIndex = (currentSlide + 2) % slides.length
      showSlide(nextIndex)
    }
  
    // Show the first slide
    showSlide(0)
  
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000)
  })
  