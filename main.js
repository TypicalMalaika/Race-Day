let raceNumber = Math.floor(Math.random() * 1000);
 var earlyRegister = false
 var runnersAge = 18
 
 
 if (runnersAge > 18 && earlyRegister===true){
   raceNumber += 1000
 }

if (runnersAge > 18 && earlyRegister === true){
  console.log(`${raceNumber} will race at 9:30 am`)
} else if(runnersAge > 18 && earlyRegister === false){
  console.log(`${raceNumber} will race ay 11:00am`)
} else if (runnersAge < 18){
  console.log (`${raceNumber} will race at 12:30pm`)
} else {
  console.log("Seek registration desk")
}
