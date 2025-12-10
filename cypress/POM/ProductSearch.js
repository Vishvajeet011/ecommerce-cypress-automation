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
         cy.get(this.dyTshirt).click();
    }

        productSearch(data){
        this.searchProduct(data);
    }

}
export default ProductSearch;