const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

let number = 0

convertBtn.addEventListener("click", function() {
  number = inputEl.value
  inputEl.value = ""

  const feet = convertMetersToFeet(number).toFixed(3)
  const meters = convertFeetToMeters(number).toFixed(3)
  const gallons = convertLitersToGallons(number).toFixed(3)
  const liters = convertGallonsToLiters(number).toFixed(3)
  const pounds = convertKilosToPounds(number).toFixed(3)
  const kilos = convertPoundsToKilos(number).toFixed(3)

  lengthEl.textContent = `
  ${number} meters = ${feet} feet | ${number} feet = ${meters} meters
  `

  volumeEl.textContent = `
  ${number} liters = ${gallons} gallons | ${number} gallons = ${liters} liters
  `

  massEl.textContent = `
  ${number} kilos = ${pounds} pounds | ${number} pounds = ${kilos} kilos
  `
})

// Conversion
function convertMetersToFeet(n) {
  return Number(n) * 3.28084
}

function convertFeetToMeters(n) {
  return Number(n) / 3.28084
}

function convertLitersToGallons(n) {
  return Number(n) / 3.78541178
}

function convertGallonsToLiters(n) {
  return Number(n) * 3.78541178
}

function convertKilosToPounds(n) {
  return Number(n) * 2.20462262
}

function convertPoundsToKilos(n) {
  return Number(n) / 2.20462262
}