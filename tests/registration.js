var chai = require('chai');  
var assert = chai.assert;

describe('Test case for client side registration form validation ', () => {

    it('Check for the sucessful registration of the form ( Test Case 4)', () => {
        browser.url('https://marksandspicy.com')
        var signin = $("//a[@class='login']");
        signin.click()

        $('#email_create').setValue('test@test.com')

        $('#SubmitCreate').click() 

        $('#email').setValue('test@test.com')
       
        $('#password').setValue('test')

        $('#password2').setValue('test')

        $('#CivMlle').$('..').$('.lbl_checkbox').click();

        $('#nom').setValue('xyz')
       
        $('#prenom').setValue('abc') 
      
        $('#dateJour').setValue('12')

        $('#dateMois').setValue('12')
    
        $('#dateAnnee').setValue('1990')

        $('#adresse').setValue('address')

        const zip_code = $('#codePostal')
        zip_code.setValue('35000')

        const city = $('#ville').getValue();
        if(zip_code.getValue() != ""){
            if(city != "")
                console.log("City field is populated")
            else
                console.log("City field is not populated")
        }

        $('#telephonePortable').setValue('1234567891')
        
        $('#telephoneFixe').setValue('1234567891')

        /** Check if the webpage URL gets changed after submitting the form
         * for successful registration
        */
        let  pageUrl_beforeRegistration = browser.getUrl();
        $('#BtnCreationSubmit').click();
        let  pageUrl_afterRegistration = browser.getUrl();

        if(pageUrl_beforeRegistration == pageUrl_afterRegistration)
            console.log("Not a successful registration")    

        assert.isNotEmpty(city);
        
    })

});