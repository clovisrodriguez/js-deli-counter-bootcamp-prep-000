var katzDeliLine = [];

function takeANumber (katzDeliLine, customerName) {
  katzDeliLine.push(customerName)
  console.log(`Welcome ${customerName}. You are number ${katzDeliLine.length} in line`)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return ${katzDeliLine.splice(0,1)}
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine (katzDeliLine){
  if(katzDeliLine.length > 0) {
    console.log("The line is currently:")
    for (var i = 0; i < katzDeliLine.length; i++){
      return `${i + 1}. ${katzDeliLine[i]}`
    }
  } else {
    console.log("The line is currently empty.")
    return "The line is currently empty."
  }
}

