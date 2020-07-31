module.exports = {
    url:"https://devmountain-qa.github.io/Automation-Basics/build/",
    elements : {
        // "input selectors"
        evenSel: {selector:'input[name="evenOddInput"]'},
        oFilSel: {selector:'input[name="objectFilterInput"]'},
        sFilSel: {selector:'#nameFilterInput'},
        palSel: {selector:'input[name="palindromeInput"]'},
        sumSel1: {selector:'input[name="sumInput1"]'},
        sumSel2: {selector:'input[name="sumInput2"]'},
        //Buttons
        evenButton: {selector:'button[name="evenOddButton"]'},
        oFilButton: {selector:'button[name="objectFilterButton"]'},
        sFilButton: {selector:'#nameFilterButton'},
        palButton: {selector:'button[name="palindromeButton"]'},
        sumButton: {selector:'button[name="sumButton"]'},
        //Results Fields
        evenField: {selector:'span[name="evenResults"]'},
        oddField: {selector:'span[name="oddResults"]'},
        oFilField: {selector:'span[name="objectFilterResults"]'},
        sFilField: {selector:'span[name="nameFilterResults'},
        palField: {selector:'span[name="palindromeResults"]'},
        sumField: {selector:'span[name="sumResults"]'},
    }

}
