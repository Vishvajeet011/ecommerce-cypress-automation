//import { it } from "mocha"
import signUp from "../POM/Signup"

describe('POM',()=>{

    it('Sign up test', ()=>{

       cy.fixture('EcommerceSignup').then((data)=>{
       const ln= new signUp();
       ln.registerUser(data);

       //ln.setURL()

    //    cy.visit(data.url); 
    //    ln.setRegisterLink()
    //    ln.setFirstName(data.FirstName)
    //    ln.setLastName(data.LastName)
    //    ln.setEmail(data.EmailID)
    //    ln.setMobileNumber(data.MobileNumber)
    //    ln.setPassword(data.Password)
    //    ln.setConfirmPassword(data.ConfirmPassword)
    //    cy.wait(3000)
    //    ln.clickTogglePassword();  
    //    cy.get(ln.dypassword).should('have.value', data.Password); 
    //    cy.wait(3000)
    //    ln.clickToggleConfirmPassword();
    //    cy.get(ln.dyconfirmpassword).should('have.value', data.ConfirmPassword); 
    //    cy.wait(3000)
    //    ln.setTerms_Conditions()

       //ln.setRegisterUser()




       })
    })
})