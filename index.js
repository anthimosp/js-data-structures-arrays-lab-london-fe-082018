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
  return [...drivers, name]}
function prependDriver(name){
  drivers.pop(name)}
function removeLastDriver(){
  drivers.splice(2)}
function removeFirstDriver(){
  drivers.shift(0)}