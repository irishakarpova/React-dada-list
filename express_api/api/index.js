var router = require('express').Router()
var mocks = require('./mock')
var assign = require('object-assign')

const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body)
  }, timeout)


  router.get('/article', function(req, res, next) {
    var articles = mocks.articles.map(function(article) {
        return assign({}, article, {
        })
      }),
      limit = Number(req.query.limit) || articles.length,
      offset = Number(req.query.offset) || 0

    reply(res, articles.slice(offset, limit + offset))
  })

router.get('/article/:id', function(req, res, next) {
  var article = mocks.articles.filter(function(article) {
    return article.id == req.params.id
  })[0]
  if (article) return reply(res, article, 950)

  reply(res, { error: 'not found' }, 100, 404)
})

router.post('/article', function(req, res, next) {
  var body = req.body
  var article = {
    id: Date.now().toString(),
    title: body.title,
    location: body.location,
    description: body.description,
    members: body.members
  }
  mocks.articles.push(article)
  reply(res, article)
})


module.exports = router
