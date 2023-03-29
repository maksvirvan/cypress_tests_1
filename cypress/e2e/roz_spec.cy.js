describe('Rozetka.com.ua Search Functionality', () => { https://ob-dv-auth.monahven.com/
    it('should load the home page successfully', () => {
        cy.visit('https://ob-dv-auth.monahven.com/')
        cy.contains('Sign In')
    })

    // it(['smoke'], 'should load the home page successfully', () => {
    //     cy.visit('https://rozetka.com.ua/')
    //     cy.get('[title="Інтернет-магазин Rozetka.ua - №1"]').should('be.visible')
    // })

    // it('Should display search results for a valid search query', () => {
    //   cy.visit('https://rozetka.com.ua/')
    //   cy.get('[name="search"]').type('iPhone 13')
    //   cy.contains(' Знайти ').click()
    //   cy.get('.goods-tile__title').should('contain', 'qqwe')
    // })
  })