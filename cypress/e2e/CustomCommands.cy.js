
//import './commands'


describe('Custom Commands', ()=>{

    it('Handling Links', ()=>{
        cy.visit("https://demowebshop.tricentis.com/");
        //cy.get("div[class='product-grid home-page-product-grid'] div:nth-child(3) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()

        //Using Custom Command-
        cy.ClickLink("14.1-inch Laptop")
        cy.get('.product-name').contains('14.1-inch')
    })

    it('Overwriting existing command', ()=>{
        cy.visit("https://demowebshop.tricentis.com/");
        cy.ClickLink("14.1-INCH Laptop")
    })

    it('Login custom command', ()=>{
        cy.fixture('SauceDemo').then((SauceDemo) => {
        const user = SauceDemo.standard_user
        cy.LoginApp(user.username, user.password)
      
    })  })
        it.only('Overwriting existing command', ()=>{
            cy.visit("https://ecommercemarketplace.24livehost.com/");
            cy.get("a[href='https://ecommercemarketplace.24livehost.com/login']").click()
            cy.get("[name='email']").type('lucy.chentest@yopmail.com')
            cy.get("[name='password']").type('Dots@123')
            cy.get("[type='submit']").click()
        })
    })
























