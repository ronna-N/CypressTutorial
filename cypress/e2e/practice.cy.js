// => == function

describe('Test Practice', () => {

  it('Verify title-positive', () => {

    //This is Test steps
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq', 'OrangeHRM')
    
  })
  it('Verify title-Negative', () => {

    //This is Test steps
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq', 'OrangeHRM1235')
    
  })

})
