module.exports = {
  "use": ["autoprefixer", "cssnano"],
  "input": "src/style/style.css",
  "dir":"build/",
  "local-plugins": true,

  "autoprefixer": {
      "browsers": "> 5%"
  },
  "cssnano": {

  }
}
