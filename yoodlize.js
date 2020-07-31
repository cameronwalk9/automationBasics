module.exports= {
    beforeEach: browser => {
        browser.url('https://www.yoodlize.com')
    },
    after: browser=> {
        browser.end ()
    },
'click see all': browser=> {
    browser
    .useXpath()
    .waitForElementVisible('//*[contains(@class,"fmVgeN")]')
    .click('//div[(text()="See all")][1]')
    .verify.elementPresent('//div[text()="category: Recreational Vehicles"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[2]')
    .verify.elementPresent('//div[text()="category: Outdoor Gear"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[3]')
    .verify.elementPresent('//div[text()="category: Electronics"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[4]')
    .verify.elementPresent('//div[text()="category: Party & Wedding Equipment"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[5]')
    .verify.elementPresent('//div[text()="category: Tools"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[6]')
    .verify.elementPresent('//div[text()="category: Clothing"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[7]')
    .verify.elementPresent('//div[text()="category: Home and Kitchen"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[8]')
    .verify.elementPresent('//div[text()="category: Toys and Games"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[9]')
    .verify.elementPresent('//div[text()="category: Lawn and Garden"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[10]')
    .verify.elementPresent('//div[text()="category: Sporting Equipment"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[11]')
    .verify.elementPresent('//div[text()="category: DVDs"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[12]')
    .verify.elementPresent('//div[text()="category: Venues"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[13]')
    .verify.elementPresent('//div[text()="category: Music"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[14]')
    .verify.elementPresent('//div[text()="category: Business Equipment"]')
    .back()
    .click('(//div[contains(@class,"fmVgeN")])[15]')
    .verify.elementPresent('//div[text()="category: Misc"]')
    .back()

 },
 'bottom Buttons':browser=>{
     browser
     .useXpath()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[1]')
     .verify.elementPresent('//div[text()="category: Tools"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[2]')
     .verify.elementPresent('//div[text()="category: Outdoor Gear"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[3]')
     .verify.elementPresent('//div[text()="category: Electronics"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[4]')
     .verify.elementPresent('//div[text()="category: Party & Wedding Equipment"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[5]')
     .verify.elementPresent('//div[text()="category: Recreational Vehicles"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[6]')
     .verify.elementPresent('//div[text()="category: Clothing"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[7]')
     .verify.elementPresent('//div[text()="category: Home and Kitchen"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[8]')
     .verify.elementPresent('//div[text()="category: Toys and Games"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[9]')
     .verify.elementPresent('//div[text()="category: Lawn and Garden"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[10]')
     .verify.elementPresent('//div[text()="category: Sporting Equipment"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[11]')
     .verify.elementPresent('//div[text()="category: DVDs"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[12]')
     .verify.elementPresent('//div[text()="category: Venues"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[13]')
     .verify.elementPresent('//div[text()="category: Music"]')
     .back()
     .click('(//div[contains(@class,"h-125 p-s f f-rows f-start-center bg-offWhite")])[14]')
     .verify.elementPresent('//div[text()="category: Misc"]')

 }


}