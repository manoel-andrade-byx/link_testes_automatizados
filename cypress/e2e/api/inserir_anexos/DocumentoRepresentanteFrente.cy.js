 
  describe('Inserir Anexo Documento Representante Frente', () => {
    it('successfully', () => {
      cy.inserir_anexo_documento_representante_frente()
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.DsRetorno).to.equal("Inclusão de anexo realizada com sucesso.")
        })
    })
  })
  
  