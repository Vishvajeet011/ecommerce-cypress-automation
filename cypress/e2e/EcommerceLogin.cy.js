import Login from "../POM/Login"

describe("Login test", ()=>{
    it("Login positive test", ()=>{
        cy.fixture('EcommerceLogin').then((data=>{
        const ln = new Login();
        ln.loginUser(data)
        }))
    })
})