const app = require('../server')
const request = require('supertest')
const cheerio = require('cheerio')

const data = require('../data')
// const fs = require("fs")

const viewData = {
    data: data
}

test('it works', () => {
  expect(2).toBe(2)
})

test('the home/profiles page response has some text', (done) => {
  request(app)
    .get('/profiles')
    .end((err, res) => {
      expect(err).toBeFalsy()
      expect(res.text).toBeTruthy()

      // const expected = 'Class Profiles'

      // const $ = cheerio.load(res.text)
      // const actual = $('h1#title').text()

      // expect(actual).toEqual(expected)

      done()
    })
})