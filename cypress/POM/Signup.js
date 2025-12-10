class signUp{
 
        //dyURL='https://ecommercemarketplace.24livehost.com/';
        dyregisterlink="a[href='https://ecommercemarketplace.24livehost.com/register']";
        dyfirstname='#firstname';
        dylastname='#lastname';
        dyemail='#email';
        dymobile='#mobile';
        dypassword='#password';
        dyconfirmpassword='#password-confirm';
        dytandc='#t_and_c_agree';
        dysubmit='.custom-btn'
        dytogglePassword = "//span[@class='input-group-text password-eye-box']//i[@id='togglePassword']";
        dytoggleConfirmPassword = "//span[@class='input-group-text password-eye-box']//i[@id='togglePassword2']";
     
        // setURL(pageURL)
        // {
        //     cy.visit(this.dyURL).click();
        // }
     
    //     setRegisterLink(register)
    //     {
    //         cy.get(this.dyregisterlink).click();
    //     }
     
    //     setFirstName(fname)
    //     {
    //         cy.get(this.dyfirstname).type(fname);
    //     }
     
    //     setLastName(lname)
    //     {
    //         cy.get(this.dylastname).type(lname);
    //     }
     
    //     setEmail(email)
    //     {
    //         cy.get(this.dyemail).type(email);
    //     }
     
    //     setMobileNumber(mobile)
    //     {
    //         cy.get(this.dymobile).type(mobile);
    //     }
     
    //     setPassword(password)
    //     {
    //         cy.get(this.dypassword).type(password);
    //     }

    //     setConfirmPassword(confirmpassword)
    //     {
    //         cy.get(this.dyconfirmpassword).type(confirmpassword);
    //     }

    //     setTerms_Conditions(termsandcondition)
    //     {
    //         cy.get(this.dytandc).click();
    //     }

    //     clickTogglePassword() {
    //         cy.xpath(this.dytogglePassword).click();
    //     }
    
    //     clickToggleConfirmPassword() {
    //         cy.xpath(this.dytoggleConfirmPassword).click();
    //     }





    //     // setRegisterUser(register)
    //     // {
    //     //     cy.get(this.dysubmit).click();
    //     // }
     
    // }




    openRegisterPage(url) {
        cy.visit(url);
        cy.get(this.dyregisterlink).click();
    }

    fillForm(data) {
        cy.get(this.dyfirstname).type(data.FirstName);
        cy.get(this.dylastname).type(data.LastName);
        cy.get(this.dyemail).type(data.EmailID);
        cy.get(this.dymobile).type(data.MobileNumber);
        cy.get(this.dypassword).type(data.Password);
        cy.get(this.dyconfirmpassword).type(data.ConfirmPassword);
    }

    togglePasswords(data) {
        cy.wait(1000);
        cy.xpath(this.dytogglePassword).click();
        cy.get(this.dypassword).should('have.value', data.Password);

        cy.wait(1000);
        cy.xpath(this.dytoggleConfirmPassword).click();
        cy.get(this.dyconfirmpassword).should('have.value', data.ConfirmPassword);
    }

    acceptTerms() {
        cy.get(this.dytandc).click();
    }

    submitForm() {
        cy.get(this.dysubmit).click();
    }

    // 🚀 Combined method for complete signup
    registerUser(data) {
        this.openRegisterPage(data.url);
        this.fillForm(data);
        this.togglePasswords(data);
        this.acceptTerms();
        this.submitForm(); // uncomment when ready
    }
}
    export default signUp;