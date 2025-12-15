import ProductSearch from "../POM/ProductSearch";

describe("Search the product", ()=>{

     before(() => {
        cy.fixture('EcommerceLogin').then((data)=>{
            cy.loginWithSession(data);   // using custom command (login + session caching)
        })
    });

    beforeEach(()=>{
        cy.fixture('EcommerceLogin').then((data)=>{
            cy.visit(data.url);            // URL coming from fixture, not hardcoded
        });
    });

    
    it("Test the search product functionality", ()=>{
        cy.fixture('ProductName').then((data=>{
        const ln = new ProductSearch();
        ln.searchProduct(data)
        }))
    })
})