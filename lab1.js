const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome'
  })
})

app.get('/math/add/', (req, res) => {
  let reduced = Object.values(req.query).reduce(function(acc, element) {
    return acc = parseInt(acc) + parseInt(element)
  })

  let addition = {
    input: req.query,
    sumString: Object.values(req.query).join(" + "),
    sum: reduced
}
  res.json(addition)
})

app.get('/math/subtract', (req, res) => {
  let reduced = Object.values(req.query).reduce(function(acc, element) {
    return acc = parseInt(acc) - parseInt(element)
  })

  let subtraction = {
    input: req.query,
    differenceString: Object.values(req.query).join(" - "),
    difference: reduced
  }

  res.json(subtraction)
})

app.get('/math/divide', (req, res) => {
  let reduced = Object.values(req.query).reduce(function(acc, element) {
    return acc = parseInt(acc) / parseInt(element)
  })

  let division = {
    input: req.query,
    quotientString: Object.values(req.query).join(" / "),
    quotient: reduced
  }

  res.json(divison)
})

app.get('/math/multiply', (req, res) => {
  let reduced = Object.values(req.query).reduce(function(acc, element) {
    return acc = parseInt(acc) *  parseInt(element)
  })

  let multiplication = {
    input: req.query,
    productString: Object.values(req.query).join(" * "),
    product: reduced
  }

  res.json(multiplication)
})

app.get('/gif', (req, res) => {
  let parsed = parseInt('http://api.giphy.com/v1/gifs/search?q=$%7BsearchTerm%7D&api_key=zjv0MwxwGDPD7yaSAQ3GQroMaDltB2mB')

  console.log(parsed);

  let display = [req.query.parsed]


  res.json(display)
})





app.listen(3000, () => {
  console.log('Something went wrong');
})
