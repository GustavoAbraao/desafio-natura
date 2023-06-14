import faker from 'faker';
import { cpf } from 'cpf-cnpj-validator';

Cypress.Commands.add('realizarCadastro', () => {
  faker.locale = 'pt_BR';

  const fakeFirstName = faker.name.firstName();
  const fakeLastName = faker.name.lastName();
  const fakeEmail = faker.internet.email();
  const fakeCPF = cpf.generate();
  const fakePassword = faker.internet.password(8, false, /[a-zA-Z]/, 'A1e9@', /[!@#$%^&*()]/);

  cy.get('i.material-icons.MuiIcon-root.natds-icons.natds-icons-filled-navigation-menu').click();
  cy.contains('Cadastrar-se', { timeout: 5000 }).should('be.visible').click();
  cy.get('#onetrust-reject-all-handler').click();
  cy.get('input[name="firstName"]').click().type(fakeFirstName);
  cy.get('input[name="lastName"]').type(fakeLastName);
  cy.get('input[name="email"]').should('be.visible').type(fakeEmail);
  cy.get('#password-field').type(fakePassword);
  cy.get('#confirmPassword-field').type(fakePassword);
  cy.get('input[name="cpf"]').type(fakeCPF);
  cy.get('input[type="radio"][value="male"]').click();
  cy.get('input[name="homePhone"]').type("(71) 98806-6768");
  cy.get('#pushOptInWP').click();
  cy.get('input[name="whatsappPhone"]').type("(71) 98806-6768");
  cy.get('#acceptedterms').click();
  cy.contains('button', 'Criar Conta').click();

// Verifica a conta criada  
  cy.get('h6.MuiTypography-root')
    .should('contain', 'PRIMEIRACOMPRA: 15% adicional em todo site* + 🚚 grátis. Condições em promoções');
});

Cypress.Commands.add('validarCadastroEmailExistente', (firstName, lastName, email, password, cpf, phone) => {
    
    cy.get('i.material-icons.MuiIcon-root.natds-icons.natds-icons-filled-navigation-menu').click();
    cy.contains('Cadastrar-se', { timeout: 5000 }).should('be.visible').click();
    cy.get('#onetrust-reject-all-handler').click();
    cy.get('input[name="firstName"]').should('be.visible').type(firstName);
    cy.get('input[name="lastName"]').type(lastName);
    cy.get('input[name="email"]').should('be.visible').type(email);
    cy.get('#password-field').type(password);
    cy.get('#confirmPassword-field').type(password);
    cy.get('input[name="cpf"]').type(cpf);
    cy.get('input[type="radio"][value="male"]').click();
    cy.get('input[name="homePhone"]').type(phone);
    cy.get('#pushOptInWP').click();
    cy.get('input[name="whatsappPhone"]').type(phone);
    cy.get('#acceptedterms').click();
    cy.contains('button', 'Criar Conta').click();

// Verifica o E-mail já utilizado
    cy.get('.MuiTypography-colorError')
        .should('contain', 'Email já está em uso');
});
  
