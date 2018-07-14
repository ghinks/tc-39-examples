import readFile from './index'

test('expect to read file', async () => {
  const result = await readFile()
  expect(result.version).toBe('1.0.0')
})
