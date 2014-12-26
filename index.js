var Hogan = require('hogan'),
  concat = require('concat-stream'),
  input = process.stdin,
  fs = require('fs'),
  template = fs.readFileSync('./template.mustache'),
  render = Hogan.compile(template.toString('utf8'))

input.pipe(concat(function(buf) {
  console.log(render.render(JSON.parse(buf.toString('utf8'))))
}))
