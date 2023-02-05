
const mainContainer = document.querySelector(".main_container")
const thankYouContainer = document.querySelector(".thankYou_container")
const submitButton = document.getElementById("submit")

const rates = document.querySelectorAll(".ratingbtn")
const userRating = document.getElementById("rating")

submitButton.addEventListener("click", () => {
  thankYouContainer.classList.remove("hidden")
  mainContainer.style.display = "none"
})

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    userRating.innerHTML = rate.innerHTML

  })
})
