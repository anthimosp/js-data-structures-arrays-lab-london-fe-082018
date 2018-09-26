// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(append){ 
  append === drivers
  drivers.push("Ralph")
  return drivers
}
function destructivelyPrependDriver(prepend){ 
  prepend === drivers
  drivers.unshift("Bob")}
function destructivelyRemoveLastDriver(removeLast) {
  removeLast === drivers
  drivers.indexOf("Garfield")}
  