import { promises as fs } from 'fs'

(async () => {
  const text = await fs.readFile('package.json', 'utf8')
  const pack = JSON.parse(text)
  console.log(pack.version)
})()



const bigNum = 1_000_000
console.log(bigNum)