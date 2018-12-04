const express = require('express')
const app = express()

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
    diffString: Object.values(req.query).join(" - "),
    difference: reduced
  }

  res.json(subtraction)
})

app.get('/math/divide', (req, res) => {
  let reduced = Object.values(req.query).reduce(function(acc, element) {
    return acc = parseInt(acc) / parseInt(element)
  })

  let quotient = {
    input: req.query,
    diffString: Object.values(req.query).join(" / "),
    difference: reduced
  }

  res.json(quotient)
})

app.get('/math/multiply', (req, res) => {
  let reduced = Object.values(req.query).reduce(function(acc, element) {
    return acc = parseInt(acc) *  parseInt(element)
  })

  let product = {
    input: req.query,
    diffString: Object.values(req.query).join(" * "),
    difference: reduced
  }

  res.json(product)
})

app.get('/gif', (req, res) => {

})





app.listen(3000, () => {
  console.log('Something went wrong');
})
