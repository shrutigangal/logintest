var chai   = require('chai');  
var assert = chai.assert;

describe('Test cases for client side login form validation ', () => {
    var signin; 
    var username; 
    var password; 

    beforeEach(function() {
        browser.url('https://marksandspicy.com')
        signin = $("//a[@class='login']");
        username = $('#email')
        password = $('#passwd')
    });

    it('Check if any errors are displayed for the given valid inputs (Case 1)', function() {
        
        signin.click() // goes to the login page
        username.setValue('test@test.com')
        password.setValue('ThisIs@T3st')
        username.click() // to display validation error
      
        const usernameClassName = username.$('..').getAttribute('className');
        const passwordClassName = password.$('..').getAttribute('className');

        /** 
         * Checking for errors using value of attribute classname 
         */
        if(usernameClassName.includes('form-ok'))
            console.log("No error displayed for username field");

        if(passwordClassName.includes('form-ok'))
            console.log("No error displayed for password field");

        assert.include(usernameClassName, 'form-ok', "Form-ok error for username");
        assert.include(passwordClassName, 'form-ok', "Form-ok error for password");

    });

    it('Check if the validation tooltip appears when the username is invalid  (Case 2.a)', () => {
        signin.click()
		username.setValue('test');
        
        /** validating tooltip using the attribute 'validationMessage' */
        const validation = username.getAttribute('validationMessage');
        if(validation != "")
            console.log("Validation tooltip appears: ", validation);
        else
            console.log("Validation tooltip does not appear");
        assert.isNotEmpty(validation);
    });
    it('Check if the validation tooltip appears when the username is invalid  (Case 2.b)', () => {
        signin.click()
		username.setValue('test@');
        
        /** validating tooltip using the attribute 'validationMessage' */
        const validation = username.getAttribute('validationMessage');
        if(validation != "")
            console.log("Validation tooltip appears: ", validation);
        else
            console.log("Validation tooltip does not appear");
        assert.isNotEmpty(validation);
    });
    it('Check if the validation tooltip appears when the username is invalid  (Case 2.c)', () => {
        signin.click()
		username.setValue('test@testcom');
        
        /** validating tooltip using the attribute 'validationMessage' */
        const validation = username.getAttribute('validationMessage');
        if(validation != "")
            console.log("Validation tooltip appears: ", validation);
        else
            console.log("Validation tooltip does not appear");
        assert.isNotEmpty(validation);
    });
    it('Check if the validation appears in the login when there are no inputs (Case 3)', () => {
        signin.click()
        username.setValue('');
        password.setValue('');
        username.click();
    
        const usernameClassName = username.$('..').getAttribute('className');
        const passwordClassName = password.$('..').getAttribute('className');

        /** 
         *Checking for the validation using the classname attribute value 'form-error, and css property 'background-image' 
         for Username and password
         */
        if(usernameClassName.includes('form-error')){
            if(username.getCSSProperty('background-image').value != 'none'){                
                console.log('Validation appears in the username input box', );
            }
            else{
                console.log("No validation appears in the username input box");
            }
        }
        
        if(passwordClassName.includes('form-error')){
            if(password.getCSSProperty('background-image').value != 'none'){
                console.log('Validation appears in the password input box', );
            }
            else{
                console.log("No validation appears in the password input box");
            }
        }
    });  
});
