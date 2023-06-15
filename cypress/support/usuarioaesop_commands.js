import faker from 'faker';
import { cpf } from 'cpf-cnpj-validator';

Cypress.Commands.add('realizarCadastroAesop', () => {
  faker.locale = 'pt_BR';

  const fakeFirstName = faker.name.firstName();
  const fakeLastName = faker.name.lastName();
  const fakeEmail = faker.internet.email();
  const fakeCPF = cpf.generate();
  const fakePassword = faker.internet.password(8, false, /[a-zA-Z]/, 'A1e9@', /[!@#$%^&*()]/);
  const phoneNumber = faker.phone.phoneNumberFormat(2);

        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.natds5 .MuiIconButton-label .material-icons').click();
        cy.contains('Cadastrar-se', { timeout: 5000 }).should('be.visible').click();
        cy.get('input[name="firstName"]').click().type(fakeFirstName);
        cy.get('input[name="lastName"]').type(fakeLastName);
        cy.get('input[name="email"]').should('be.visible').type(fakeEmail);
        cy.get('input[name="password"]').type(fakePassword);
        cy.get('input[name="confirmPassword"]').type(fakePassword);
        cy.get('input[name="cpf"]').type(fakeCPF);
        cy.get('input[type="radio"][value="male"]').click();
        cy.get('input[name="homePhone"]').type(phoneNumber);
        cy.get('#acceptedterms').click()
        cy.contains('button', 'Criar Conta').click();

    // Verifica se a conta criada foi criada com sucesso
        cy.get('strong.MuiTypography-root')
            .should('have.text', 'Aproveite a entrega gratuita em todos os pedidos acima de R$799');


});