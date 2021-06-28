/// <reference types="cypress" />

import LoginPage from '../../../fixtures/POM/Login/loginPage'
import HomePage from '../../../fixtures/POM/Home/homePage'
import LegalContactPage from '../../../fixtures/POM/Legal_Contacts/legalContactsPage'

describe('Create a Legal Contact', function() {
    const login = new LoginPage()
    const home = new HomePage()
    const legalContact = new LegalContactPage()
    
    this.beforeEach(function(){
        cy.fixture('Test_Data/credentials')
        .then(credentials => {
            this.credentials = credentials;
        })

        cy.fixture('Test_Data/Legal_Contacts/ED3P_369_Data')
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

    it('Go to Legal Contact', function() {
        home.go_to_legal_contacts()
    })

    it('Assert Legal Contacts is Displayed', function() {
        legalContact.validate_legal_contact_page_is_displayed()
    }) 

    it('Add Legal Contact', function() {
        legalContact.go_to_add_legal_contact()
        legalContact.validate_create_legal_contact_page_is_displayed()
        legalContact.enter_firstname(this.data.testFirstName)
        legalContact.enter_lastname(this.data.testLastName)
        legalContact.enter_street_address(this.data.testStreetAddress)
        legalContact.enter_city(this.data.testCity)
        legalContact.enter_state(this.data.testState)
        legalContact.enter_zipcode(this.data.testZipCode)
        legalContact.enter_country(this.data.testCountry)
        legalContact.enter_email(this.data.testEmail)
        legalContact.check_attorney_role()
        legalContact.enter_attorney_title(this.data.testAttorneyTitle)
        legalContact.save_legal_contact()
    })

    it('Deletion of Legal Contact created', function() {
        legalContact.contact_more_options()
        legalContact.delete_contact()
        legalContact.confirm_delete()
    })
    
    it('Logout', function() {
        home.logout()
    })
  })