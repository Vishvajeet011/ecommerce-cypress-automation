class ProductSearch{
    dyProductSearch = "#search_keywords";
    dyTshirt = "a[href='/product/levis-mens-tshirt']"
    
    searchProduct(data)
    {
        //cy.get(this.dyProductSearch).click()
        //cy.get(this.dyProductSearch).type(data.ProductName)
         cy.get(this.dyProductSearch)
          .should('be.visible')               // ensure search box is present
          .clear()
          .type(data.ProductName);            // type only, no submit button


          cy.get(this.dyTshirt)
          .invoke('text')                 // get the link text
          .then((expectedProductName) => {

         cy.get(this.dyTshirt).click();

         cy.get(this.dyProductTitleOnPDP)
                .should('be.visible')
                .invoke('text')
                .then((actualProductName) => {

                    // Trim spaces before compare
                    const expected = expectedProductName.trim().toLowerCase();
                    const actual = actualProductName.trim().toLowerCase();

                    expect(actual).to.contain(expected);      // Assertion
                });
          });
    }

        productSearch(data){
        this.searchProduct(data);
    }

}
export default ProductSearch;