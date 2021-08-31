import Exercise from '../pageObjects/exercise'

describe('Exercicie', function(){
    const exercise = new Exercise()

    it('Submit form successfully', function(){
        cy.visit('/index.php')
        cy.title().should('eq','Welcome to the Test Site')
        cy.contains('Dummy Registration Form', {timeout:10000}).should('be.visible')
        cy.fixture('dataForm').then((form) => {
            exercise.name().type(form.name)
            exercise.phone().type(form.phone)
            exercise.email().type(form.email)
            exercise.country().select("Brazil")
            exercise.city().type(form.city)
            exercise.username().type(form.username)
            exercise.password().type(form.password)
        })
        exercise.btnSubmit().click()
        cy.contains('This is just a dummy form, you just clicked SUBMIT BUTTON').should('be.visible')
    })
})