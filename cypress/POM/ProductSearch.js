class ProductSearch {

    constructor() {
        this.dyProductSearch = "#search_keywords";
        this.dyTshirt = "a[href='/product/levis-mens-tshirt']";
        this.dyProductTitleOnPDP = ".product-title";
    }

    searchProduct(data) {
        cy.get(this.dyProductSearch)
          .should('be.visible')
          .clear()
          .type(data.ProductName);

        cy.get(this.dyTshirt)
          .invoke('text')
          .then((expectedProductName) => {

             cy.get(this.dyTshirt).click();

             cy.get(this.dyProductTitleOnPDP)
                .should('be.visible')
                .invoke('text')
                .then((actualProductName) => {

                    const expected = expectedProductName.trim().toLowerCase();
                    const actual = actualProductName.trim().toLowerCase();

                    expect(actual).to.contain(expected);
                });
          });
    }
}
export default ProductSearch;
