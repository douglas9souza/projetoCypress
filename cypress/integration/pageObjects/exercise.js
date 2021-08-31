class exercise{

    name(){
        return  cy.get('input[name="name"]')
    }
    phone(){
        return cy.get('input[name="phone"]')
    }
    email(){
        return cy.get('input[type="email"]')
    }
    country(){
        return cy.get('select')
    }
    city(){
        return cy.get('input[name="city"]')
    }
    username(){
        return cy.get('#load_form > fieldset:nth-child(10) > input[type=text]')
    }
    password(){
        return cy.get(':nth-child(11) > input')
    }
    btnSubmit(){
        return cy.get('#load_form > div:nth-child(12) > div.span_1_of_4 > input')
    }

}

export default exercise