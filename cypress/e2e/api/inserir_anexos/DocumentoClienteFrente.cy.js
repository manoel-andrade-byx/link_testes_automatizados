 
  describe('Inserir Anexo Documento Cliente Frente', () => {
    it('successfully', () => {
      cy.inserir_anexo_documento_cliente_frente()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Inclusão de anexo realizada com sucesso.")
        })
    })
  })
  
  