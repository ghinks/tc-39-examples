import readFile, { inc } from './index'

describe('example tests', () => {
  test('expect to read file', async () => {
    const result = await readFile()
    expect(result.version).toBe('1.0.0')
  })

  test('expect to increment', () => {
    expect(10 |> inc).toBe(11)
  })
})
