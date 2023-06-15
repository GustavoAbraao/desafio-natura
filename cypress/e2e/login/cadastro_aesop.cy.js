/// <referece types="Cypress"/>

describe('Testes funcionais de cadastro Aesop', () => {
    beforeEach(() => {
        cy.visit("https://www.aesop.com.br/", { timeout: 50000 });
    });

    it('Validar o cadastro com sucesso', () => {
            cy.realizarCadastroAesop();
          });
    });