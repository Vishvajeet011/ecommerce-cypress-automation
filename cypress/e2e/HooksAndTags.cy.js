//Different Types of Hooks
//before- Before starting all it blocks the before hook will be executed only once.
//after- After Hook will execute only once after executing all the it blocks.
//beforeEach- beforeEach hook will execute multiple times before starting of each it block.
//afterEach- afterEach hook will execute multiple times after completion of each it block.

//Different types of Tags-
//skip- We can skip any it block by using skip tag.
//only- We only want to run only specific it block then we use only tag.

//import { before } from "mocha"


describe('Hooks and Tags', ()=>{


    before(()=>{

        cy.log("Before start of the It block");
        
    })

    after(()=>{

        cy.log("After completion of all It block");
        
    })

    beforeEach(()=>{
     
        cy.log("Login before each it block");

    })

    afterEach(()=>{
     
        cy.log("Log out after each it block");

    })

    it('Searching', ()=>{
        cy.log("Search Log");
    })

    it('Advance Searching', ()=>{
        cy.log("Advance search");
    })

    it('Listing Products', ()=>{

        cy.log("Listing products");
    })
})