import { promises as fs } from 'fs'

const readFile = async () => {
  const text = await fs.readFile('package.json', 'utf8')
  const pkJson = JSON.parse(text)
  console.log(pkJson.version)
  return pkJson
}

readFile()

const bigNum = 1_000_000

console.log(bigNum)

const inc = (x) => x + 1

export { inc, readFile as default }

