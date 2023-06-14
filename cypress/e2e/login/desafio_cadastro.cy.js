/// <referece types="Cypress"/>

describe('Testes funcionais de cadastro', () => {
  beforeEach(() => {
    cy.visit("https://www.natura.com.br/");
  });

  it('Deve realizar o cadastro com sucesso', () => {
    cy.realizarCadastro();
  });
   
  it.only('Validando cadastro com email já existente', () => {
    cy.validarCadastroEmailExistente("Bryan Carlos", "Gomes", "bryancarlosgomes@granadaimoveis.com.br", "Ab#123456", "509.582.306-33", "(71) 98806-6768");
  });
});