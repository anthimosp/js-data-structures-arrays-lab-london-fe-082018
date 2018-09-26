// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){ 
  drivers.push(name)}
function destructivelyPrependDriver(name){ 
  drivers.unshift(name)}
function destructivelyRemoveLastDriver() {
  drivers.splice(2)}
function destructivelyRemoveFirstDriver(){
  drivers.shift(0)}
function appendDriver(name){
  drivers.splice(2,name)
}