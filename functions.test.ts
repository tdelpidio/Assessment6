const {shuffleArray} = require('./utils')

let testData = [1, 2, 3, 4, 5]

describe('shuffleArray should', () => {
    test('array length', () => {
        let formattedArray = shuffleArray(testData)
        expect(formattedArray.length).toBe(formattedArray.length)
      });

      test('type', () => {
        let formattedArray = shuffleArray(testData)
        expect(typeof formattedArray).toBe("array")
      })

})



