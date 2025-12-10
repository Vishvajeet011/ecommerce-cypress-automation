describe('File Uploading', () => {

    const files = [
        'cypress/fixtures/ChatGPT_&_Prompt_Eng.pdf',
        'cypress/fixtures/Accessibility_Statement_2.pdf'
    ];

    it('Single File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('ChatGPT_&_Prompt_Eng.pdf')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('File Upload- Rename', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({ filePath: 'ChatGPT_&_Prompt_Eng.pdf', fileName: 'FirstUpload.pdf' })
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
    })

    it('File Upload- Drag and Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('ChatGPT_&_Prompt_Eng.pdf', { subjectType: 'drag-n-drop' })
        //cy.get('#file-submit').click()
        cy.wait(5000)
        // After drag and drop
        cy.get('.dz-success-mark').should('be.visible');
        cy.get(".dz-filename").contains('ChatGPT_&_Prompt_Eng.pdf')
    })

    it('Multiple File Uploads', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        //cy.get('#filesToUpload').attachFile(['ChatGPT_&_Prompt_Eng.pdf', 'Accessibility_Statement_2.pdf'])
        cy.get('#filesToUpload').selectFile(files);
        cy.get('#fileList>li').should('have.length', files.length);
    })


    it.only('File Upload- Shadow Dom', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', { includeShadowDom: true }).attachFile('ChatGPT_&_Prompt_Eng.pdf')
        //cy.get('.smart-browse-input', {includeShadowDom: true}).selectFile(files);
        cy.get('.smart-item-name', { includeShadowDom: true }).contains('ChatGPT_&_Prompt_Eng.pdf')
        cy.get("smart-file-upload:nth-child(1) > div:nth-child(1) > div:nth-child(4) > smart-button:nth-child(1) > button:nth-child(1)", { includeShadowDom: true }).click()

    })
})