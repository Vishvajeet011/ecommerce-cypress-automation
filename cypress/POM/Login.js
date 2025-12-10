class Login{
    dyloginlink = "a[href='https://ecommercemarketplace.24livehost.com/login']";
    dyemail = "[name='email']";
    dypassword = "[name='password']";
    dysubmit = "[type='submit']";
    dyrememberme = "input[type='checkbox'][name='remember']";
    dylogintoast = ".toast-message";
    openLoginPage(url)
    {
        cy.visit(url)
        cy.get(this.dyloginlink).click()
    }
    fillLoginForm(data)
    {
        cy.get(this.dyemail).type(data.Email)
        cy.get(this.dypassword).type(data.Password)
    }
    rememberMe() {
        cy.get(this.dyrememberme).check({force: true});
    }
    submitLoginForm() {
        cy.get(this.dysubmit).click();
    }
    loginAssertion(){

        cy.get(this.dylogintoast).should('contain', "Login successfully").invoke('text')
        .then((text) => {
            cy.log("Toast message after login: " + text);  });
    }
    loginUser(data){
        this.openLoginPage(data.url);
        this.fillLoginForm(data);
        this.rememberMe();
        this.submitLoginForm();
        this.loginAssertion();
    }

}

export default Login;