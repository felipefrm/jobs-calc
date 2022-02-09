const routes = require('express').Router()

const viewPath = __dirname + "/views/"

const profile = {
  name: "Felipe Melo",
  avatar: "https://avatars.githubusercontent.com/u/36086450?v=4",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4
}

routes.get('/', (req, res) => res.render(viewPath + "index"))
routes.get('/job', (req, res) => res.render(viewPath + "job"))
routes.get('/job/edit', (req, res) => res.render(viewPath + "job-edit"))
routes.get('/profile', (req, res) => res.render(viewPath + "profile", { profile }))

module.exports = routes