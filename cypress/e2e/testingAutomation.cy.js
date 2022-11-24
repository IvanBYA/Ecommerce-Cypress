describe('Plan de Pruebas Tienda en Linea - (Automation Exercise)', () => {
  // TEST CASE 1
  it('Registrar Usuario', () => {

    const userValue = {
      nombre: "Juan Antonio prueba",
      correo: "prueba@estoesunaprueba.prueba"
    }

    cy.visit('/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').
      click();
    cy.url().
      should('include','/login');
    cy.get('.signup-form > h2').
      contains('New User Signup');
    cy.get('[type="text"]').
      type(userValue.nombre);
    cy.get('.signup-form > form > [type="email"]').
      type(userValue.correo);
    cy.get('.signup-form > form > .btn').
      click();
    cy.get(':nth-child(1) > b').
      // should('have.text','Enter Account Information');
      // should('include.text','Enter Account Information');
    contains('Enter Account Information');
    cy.get('#id_gender1').
      check();
    cy.get('#password').
      type('contraseñaprueba');
    cy.get('#days').
      select('1').
      should('have.value','1');
    cy.get('#months').
      select('June').
      should('have.value','6');
    cy.get('#years').
      select('1985').
      should('have.value','1985');
    cy.get('#newsletter').
      check();
    cy.get('#optin').
      check();
    cy.get('#first_name').
      type('Prueba');
    cy.get('#last_name').
      type('Prueba Apellido');
    cy.get('#company').
      type('Prueba Compañia');
    cy.get('#address1').
      type('Dirección 1');
    cy.get('#address2').
      type('Dirección 2');
    cy.get('#country').
      select('Canada').
      should('have.value','Canada');
    cy.get('#state').
      type('prueba');
    cy.get('#city').
      type('prueba city');
    cy.get('#zipcode').
      type('000000');
    cy.get('#mobile_number').
      type('1111111111111');
    cy.get('.login-form > form > .btn').
      click();
    cy.get('b').
      should('have.text','Account Created!');
    cy.get('.pull-right > .btn').
      click();
    cy.get(':nth-child(10) > a').
      should('include.text','Logged in as ' + String(userValue.nombre));
    cy.get('.shop-menu > .nav > :nth-child(5) > a').
      click();
    cy.get('b').
      should('have.text','Account Deleted!');
    cy.get('.pull-right > .btn').
      click();
    })
})