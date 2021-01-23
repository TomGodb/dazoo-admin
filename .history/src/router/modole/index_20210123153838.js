import dashbord from './dashbord'
let routesArray = []

let toArray = (pages) => {
  Object.keys(pages).forEach((key) => {
    let obj = pages[key]
    Object.keys(obj).forEach((key) => {
      routesArray.push(obj[key])
    })
  })
}
toArray([dashbord])

export default routesArray
