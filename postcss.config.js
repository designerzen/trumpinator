module.exports = {
  "use": ["postcss-import", "autoprefixer", "cssnano"],
  "input": "src/style/style.css",
  "dir":"build/",
  "local-plugins": true,
  "postcss-import":{

  },
  "autoprefixer": {
      "browsers": "> 5%"
  },
  "cssnano": {

  }
}
