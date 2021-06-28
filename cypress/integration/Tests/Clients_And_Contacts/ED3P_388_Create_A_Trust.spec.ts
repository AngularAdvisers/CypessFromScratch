/// <reference types="cypress" />

import LoginPage from '../../../fixtures/POM/Login/loginPage'
import HomePage from '../../../fixtures/POM/Home/homePage'
import ClientsContactsPage from '../../../fixtures/POM/Clients_And_Contacts/clientsContactsPage'

describe('Create a Contact', function() {
    const login = new LoginPage()
    const home = new HomePage()
    const client_contact = new ClientsContactsPage()
    
    this.beforeEach(function(){
        cy.fixture('Test_Data/credentials')
        .then(credentials => {
            this.credentials = credentials;
        })

        cy.fixture('Test_Data/Clients_And_Contacts/ED3P_388_Data')
        .then(data => {
            this.data = data;
        })
    })

    

    it('Enter login data', function() {
        login.clear()
        login.go_to_login()
        login.login(this.credentials.usernameAdmin, this.credentials.passwordAdmin)
    })

    it('Assert Home Page is Displayed', function() {
        home.visitHome()
        home.validate_home_is_displayed()
    })

    it('Go to Clients & Contacts', function() {
        home.go_to_clients_and_contacts()
    })

    it('Assert Clients & Contacts is Displayed', function() {
        client_contact.validate_clients_contacts_page_is_displayed()
        cy.wait(2000)
    }) 

    it('Create an Entity', function() {
        client_contact.go_to_add_trust()
        client_contact.validate_add_trust_page_is_displayed()
        client_contact.enter_trust_name(this.data.TRUST_NAME)
        client_contact.enter_trust_date(this.data.TRUST_DATE)
        client_contact.enter_state_of_trust(this.data.STATE_OF_TRUST)
        client_contact.save_person()
    })

    it('Delete Entity created', function() {
        client_contact.contact_more_options(this.data.TRUST_NAME)
        client_contact.delete_contact()
        client_contact.confirm_delete()
    })
    
    it('Logout', function() {
        //home.logout()
    })
  })