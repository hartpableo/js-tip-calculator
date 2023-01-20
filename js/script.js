// Declare variables
let bills = [ 125, 555, 44, 300 ]
let tips = []
let total = []

// Calculate the tip
bills.forEach(( bill ) => {
  const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .2
  tips.push(tip);
})

// Calculate total ( bill + tip )
for ( let i = 0; i < bills.length; i++ ) {
  total.push(bills[i] + tips[i])
}


// Display data on front-end
displayData(bills)
displayData(tips)
displayData(total)

function displayData( arrayVal ) {
  
  if (Array.isArray(arrayVal) == true) {
   let html = '<ul>'

    arrayVal.forEach(( item ) => {
      html += `<li>${item}</li>`
    })

    html += '</ul>'

    document.write(html) 
  } else {
    document.write('Data given is NOT an array!')
  }
  
}