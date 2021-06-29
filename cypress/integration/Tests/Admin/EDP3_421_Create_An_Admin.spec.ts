/// <reference types="cypress" />

import LoginPage from '../../../fixtures/POM/Login/loginPage'
import HomePage from '../../../fixtures/POM/Home/homePage'
import AdminPage from '../../../fixtures/POM/Admin/adminPage'

describe('Create a Contact', function() {
    const login = new LoginPage()
    const home = new HomePage()
    const admin_contact = new AdminPage()


    this.beforeEach(function(){
        cy.fixture('Test_Data/credentials')
        .then(credentials => {
            this.credentials = credentials;
        })

        cy.fixture('Test_Data/Admin/ED3P_421_Data')
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

    it('Go to Admin Page', function() {
        home.go_to_admin_page()
    })

    it('Click on Manage Users',function(){
        admin_contact.go_to_admin_manageusers()
    })

    it('Create new admin user', function(){
        admin_contact.enter_firstname(this.data.FIRST_NAME)
        admin_contact.enter_lastname(this.data.LAST_NAME)
        admin_contact.enter_email(this.data.EMAIL)
        admin_contact.check_admin_role()
        admin_contact.check_active_checkbox()
        
        admin_contact.add_admin_user()
    }) 



    it('Inactivate admin user', function() {
        admin_contact.select_created_user(this.data.FIRST_NAME)
        admin_contact.inactive_admin_user()
        admin_contact.confirm_inactive_user()
    })
/*  
    it('Logout', function() {
        home.logout()
    })*/
  })