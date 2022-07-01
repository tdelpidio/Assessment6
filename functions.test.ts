const {shuffleArray} = require('./utils')

let testData = [1, 2, 3, 4, 5]

describe('shuffleArray should', () => {
    test('array length', () => {
        expect(shuffleArray(testData).length).toBe(testData.length)
      });

      test('output type', () => {
        expect(Array.isArray(shuffleArray(testData))).toBe(true)
      })

})



