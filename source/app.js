import "babel-polyfill"

const call = async (url) => {
  const result = await fetch(url)
  console.log(result)
}

window.addEventListener("load", () => {
  call("something")
})
