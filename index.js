var input = process.stdin,
  concat = require('concat-stream'),
  fs = require('fs'),
  template = fs.readFileSync('./template.mustache'),
  Hogan = require('hogan'),
  render = Hogan.compile(template.toString('utf8'))

input.pipe(concat(function(buf) {
  console.log(render.render(JSON.parse(buf.toString('utf8'))))
}))
