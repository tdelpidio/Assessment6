
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})
afterEach(async () => {
    driver.sleep(6000)
})
afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking draw button', async () => {
    await driver.findElement(By.id('draw')).click()
    const displayed = await driver.findElement(By.xpath('//div[contains(@id,"choices")'))
    expect(displayed).toBe(true)
})