import { promises as fs } from 'fs'
console.log('hello')

const readFileContents = async () => {
  const file = await fs.readFile('package.json', 'utf8')
  console.log(file)
}

readFileContents()

