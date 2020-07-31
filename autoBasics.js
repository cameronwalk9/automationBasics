const Even = require("../pageObjects/Even")

var even = {}
module.exports= {
    beforeEach: browser => {
        even = browser.page.Even()
        even
            .navigate()
    },
    after: browser => {
        even
            .end()
    },
    'even and odd ': browser=> {
        //Number Input
        //Correct numbers go where they should
        //nothing input when incorrect numbers are used
        even
        .setValue('@evenSel', '2,4,5,6')
        .click('@evenButton')
        .assert.containsText('@evenField', '2,4,6')
        .assert.containsText('@oddField', '5')
        .clearValue('@evenSel')
        .setValue('@evenSel', '2,4,6')
        .click('@evenButton')
        .assert.containsText('@evenField', '2,4,6')
        .assert.containsText('@oddField', '[]')
        .clearValue('@evenSel')
        .setValue('@evenSel', '1,3,5,7')
        .click('@evenButton')
        .assert.containsText('@evenField', '[]')
        .assert.containsText('@oddField', '1,3,5,7')
        
    },
    'Filter Objects': browser=> {
        //When the correct object is typed the correct names should show up
        //No other names should show up when something is input
        //
        even
        .setValue('@oFilSel', 'title')
        .click('@oFilButton')
        .assert.containsText('@oFilField', 'Hack0r', 'CEO')
        .clearValue("@oFilSel")
        .setValue('@oFilSel', 'age')
        .click('@oFilButton')
        .assert.containsText('@oFilField', '12', '24')
        .clearValue("@oFilSel")
    },
    'Filter String': browser=> {
        //when inputting a name the name shoule show up
        //No other names should show up
        //
        even
        .setValue('@sFilSel', "Mark")
        .click('@sFilButton')
        .assert.containsText('@sFilField', 'Mark')
        .clearValue('@sFilSel')
        .setValue('@sFilSel', "James")
        .click('@sFilButton')
        .assert.containsText('@sFilField', 'James')
        .clearValue('@sFilSel')
    },
    'Palindrome': browser=> {
        //When a palindrome is entered it should say true
        //When something is entered that is not a Palindrome should say false
        //when nothing is enetered it should say true
        //
        even
        .setValue('@palSel', 'Piglet')
        .click('@palButton')
        .assert.containsText('@palField', 'false')
        .clearValue('@palSel')
        .setValue('@palSel', 'anutforajaroftuna')
        .click('@palButton')
        .assert.containsText('@palField', 'true')
        .clearValue('@palSel')
    },
    'sum': browser =>{
        //should enter a number in the first input field
        //Should enter a number in the second input field
        //Should calculate correctly
        //can you use negatives?
        even
        .setValue('@sumSel1', '100')
        .setValue('@sumSel2', '15')
        .click('@sumButton')
        .assert.containsText('@sumField','115')
        .clearValue('@sumSel1')
        .clearValue('@sumSel2')
        .setValue('@sumSel1', '-10')
        .setValue('@sumSel2', '15')
        .click('@sumButton')
        .assert.containsText('@sumField','5')

    }
}


//