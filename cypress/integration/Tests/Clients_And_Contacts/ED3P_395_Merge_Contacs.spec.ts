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

        cy.fixture('Test_Data/Clients_And_Contacts/ED3P_395_Data')
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

    it('Create a Person', function() {
        client_contact.go_to_add_person()
        client_contact.validate_add_person_page_is_displayed()
        client_contact.enter_firstname(this.data.FIRST_NAME)
        client_contact.enter_lastname(this.data.LAST_NAME)
        client_contact.enter_gender(this.data.GENDER)
        client_contact.enter_status(this.data.STATUS)
        client_contact.add_phone(this.data.PHONE_TYPE, this.data.PHONE_NUMBER)
        client_contact.save_person()
    })

    it('Create another Person', function() {
        client_contact.go_to_add_person()
        client_contact.validate_add_person_page_is_displayed()
        client_contact.enter_firstname(this.data.FIRST_NAME)
        client_contact.enter_lastname(this.data.OTHER_LAST_NAME)
        client_contact.enter_gender(this.data.GENDER)
        client_contact.enter_status(this.data.STATUS)
        client_contact.add_phone(this.data.PHONE_TYPE, this.data.PHONE_NUMBER)
        client_contact.save_person()
    })

    it('Access more options menu', function() {
        client_contact.more_actions()
    })

    it('Merge contacts', function() {
        client_contact.merge_contacts()
        client_contact.enter_contacts_to_merge(this.data.LAST_NAME, this.data.OTHER_LAST_NAME)
        client_contact.merge_contacts_next_step()
        client_contact.validate_merge_field_selection_page_is_displayed()
        client_contact.accept_merge_of_contacts()
    })

    it('Go to merged contact', function() {
        client_contact.go_to_contact(this.data.LAST_NAME)
    })

    it('Validate record audit is correct', function() {
        client_contact.scroll_to_end()
        client_contact.validate_data()
        client_contact.cancel_contact()
    })

    it('Deletion of Person created', function() {
        client_contact.contact_more_options(this.data.LAST_NAME)
        client_contact.delete_contact()
        client_contact.confirm_delete()
    })
    
    it('Logout', function() {
        home.logout()
    })
  })