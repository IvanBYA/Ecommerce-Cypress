describe('Plan de Pruebas Tienda en Linea - (Automation Exercise)', () => {
  const usuarioTest = {
    nombre: "Juan Antonio prueba",
    correo: "prueba@prueba12.com",
    contra: "contraseñaprueba"
  }

  beforeEach('APIS', () => {
    cy.log('Esperando APIS');
    cy.intercept('GET', 'https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=gda&tv=r20221207&st=env').as('vistaLogin');
  })

  it('Caso de Prueba - Registro de usuario y eliminar cuenta', () => {
    cy.visit('/');
    cy.wait('@vistaLogin');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.wait('@vistaLogin');
    cy.url().should('include', '/login');
    cy.get('.signup-form > h2').contains('New User Signup');
    cy.get('[type="text"]').type(usuarioTest.nombre);
    cy.get('.signup-form > form > [type="email"]').type(usuarioTest.correo);
    cy.get('.signup-form > form > .btn').click();
    cy.get(':nth-child(1) > b').contains('Enter Account Information');
      // should('have.text','Enter Account Information');
      // should('include.text','Enter Account Information');
    cy.get('#id_gender1').check();
    cy.get('#password').type(usuarioTest.contra);
    cy.get('#days').select('1').should('have.value', '1');
    cy.get('#months').select('June').should('have.value', '6');
    cy.get('#years').select('1985').should('have.value', '1985');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('#first_name').type('Prueba');
    cy.get('#last_name').type('Prueba Apellido');
    cy.get('#company').type('Prueba Compañia');
    cy.get('#address1').type('Dirección 1');
    cy.get('#address2').type('Dirección 2');
    cy.get('#country').select('Canada').should('have.value', 'Canada');
    cy.get('#state').type('prueba');
    cy.get('#city').type('prueba city');
    cy.get('#zipcode').type('000000');
    cy.get('#mobile_number').type('1111111111111');
    cy.get('.login-form > form > .btn').click();
    cy.get('b').should('have.text', 'Account Created!');
    cy.get('.pull-right > .btn').click();
    cy.get(':nth-child(10) > a').should('include.text', 'Logged in as ' + String(usuarioTest.nombre));
    cy.get('.shop-menu > .nav > :nth-child(5) > a').
      click();
    cy.get('b').
      should('have.text', 'Account Deleted!');
    cy.get('.pull-right > .btn').
      click();
  })

  it('Inicio de sesión con email y contraseña correcto', () => {
    cy.visit('/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.url().should('include', '/login');
    cy.get('.signup-form > h2').contains('New User Signup');
    cy.get('[type="text"]').type(usuarioTest.nombre);
    cy.get('.signup-form > form > [type="email"]').type(usuarioTest.correo);
    cy.get('.signup-form > form > .btn').click();
    cy.get(':nth-child(1) > b').contains('Enter Account Information');
      // should('have.text','Enter Account Information');
      // should('include.text','Enter Account Information');
    cy.get('#id_gender1').check();
    cy.get('#password').type(usuarioTest.contra);
    cy.get('#days').select('1').should('have.value', '1');
    cy.get('#months').select('June').should('have.value', '6');
    cy.get('#years').select('1985').should('have.value', '1985');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('#first_name').type('Prueba');
    cy.get('#last_name').type('Prueba Apellido');
    cy.get('#company').type('Prueba Compañia');
    cy.get('#address1').type('Dirección 1');
    cy.get('#address2').type('Dirección 2');
    cy.get('#country').select('Canada').should('have.value', 'Canada');
    cy.get('#state').type('prueba');
    cy.get('#city').type('prueba city');
    cy.get('#zipcode').type('000000');
    cy.get('#mobile_number').type('1111111111111');
    cy.get('.login-form > form > .btn').click();
    cy.wait('@vistaLogin');
    cy.get('b').should('have.text', 'Account Created!');
    cy.get('.pull-right > .btn').click();
    cy.get(':nth-child(10) > a').should('include.text', 'Logged in as ' + String(usuarioTest.nombre));
    cy.visit('/');
    cy.url().should('eq','https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.login-form > h2').should('be.visible');
    cy.get('.login-form > form > [type="email"]').type(usuarioTest.correo);
    cy.get('[type="password"]').type(usuarioTest.contra);
    cy.get('.login-form > form > .btn').click();
    
    cy.wait('@vistaLogin');
    
    cy.get(':nth-child(10) > a').should('include.text', 'Logged in as ' + String(usuarioTest.nombre));
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get('b').should('have.text', 'Account Deleted!');
    cy.get('.pull-right > .btn').click();
  })

  it('Inicio de sesión con email y contraseña incorrecto', () => {
    cy.visit('/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('.login-form > h2').should('include.text','Login to your account');
    cy.get('.login-form > form > [type="email"]').type('a@pruebaa.com');
    cy.get('[type="password"]').type('a123a123');
    cy.get('.login-form > form > .btn').click();
    cy.get('.login-form > form > p').should('include.text','Your email or password is incorrect!');
  });
})