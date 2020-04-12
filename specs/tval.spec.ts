import { tStr, isValid, assert, validate } from '../src'

describe('isValid', () => {
  it('returns true if value is valid', () => {
    const result = isValid(tStr(), 'Hello, World!')

    expect(result).toBe(true)
  })

  it('returns false if value is invalid', () => {
    const result = isValid(tStr(), 123)

    expect(result).toBe(false)
  })
})

describe('assert', () => {
  it('passes if value is valid', () => {
    expect(() => {
      assert(tStr(), 'Hello, World!')
    }).not.toThrow()
  })

  it('throws if value is invalid', () => {
    expect(() => {
      assert(tStr(), 123)
    }).toThrow(
      `Expected value to be of type \`string\` but received type \`number\``
    )
  })
})

describe('report', () => {
  it('returns null if value is valid', () => {
    const result = validate(tStr(), 'Hello, World!')

    expect(result).toBe(null)
  })

  it('returns message value is invalid', () => {
    const result = validate(tStr(), 123)

    expect(result).toEqual({
      message: `Expected value to be of type \`string\` but received type \`number\``
    })
  })
})
