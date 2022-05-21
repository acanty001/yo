const { v4: uuidv4 } = require('uuid')

const getMoney = () => {
  console.log(uuidv4())
  console.log('Oh we getting money over here baby!!')
}


module.exports = { getMoney }