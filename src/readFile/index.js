import { promises as fs } from 'fs'

const readFile = async () => {
  const text = await fs.readFile('package.json', 'utf8')
  const pkJson = JSON.parse(text)
  console.log(pkJson.version)
  return pkJson
}

readFile()

export default readFile
