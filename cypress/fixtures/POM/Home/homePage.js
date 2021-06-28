class HomeLocators{
    HOME_MENU_BTN = '.active-nav-link > .mat-list-item-content'
    CLIENTS_CONTACS_MENU_BTN = ':nth-child(2) > .mat-list-item-content'
    MATTERS_MENU_BTN = ':nth-child(3) > .mat-list-item-content'
    LEGAL_CONTACTS_MENU_BTN = ':nth-child(4) > .mat-list-item-content'
    STARRED_MENU_BTN = ':nth-child(5) > .mat-list-item-content'
    IMPORT_FILE_MENU_BTN = ':nth-child(6) > .mat-list-item-content'
    CLIENT_INTAKE_MENU_BTN = ':nth-child(7) > .mat-list-item-content'
    ADMIN_MENU_BTN = ':nth-child(8) > .mat-list-item-content'

    ACCOUNT_BTN = '#account'
    LOGOUT_TEXT_BTN = 'Logout'
}

class HomePage{
    home_locator = new HomeLocators()
    
    visitHome(){
        cy.visit(Cypress.env('homeURL'))
    }

    validate_home_is_displayed(){
        cy.get(this.home_locator.HOME_MENU_BTN).should('be.visible')
        cy.get(this.home_locator.CLIENTS_CONTACS_MENU_BTN).should('be.visible')
        cy.get(this.home_locator.MATTERS_MENU_BTN).should('be.visible')
        cy.get(this.home_locator.LEGAL_CONTACTS_MENU_BTN).should('be.visible')
        cy.get(this.home_locator.STARRED_MENU_BTN).should('be.visible')
        cy.get(this.home_locator.IMPORT_FILE_MENU_BTN).should('be.visible')
        cy.get(this.home_locator.CLIENT_INTAKE_MENU_BTN).should('be.visible')
        cy.get(this.home_locator.ADMIN_MENU_BTN).should('be.visible')
    }

    expand_nickname_options(){
        const account = cy.get(this.home_locator.ACCOUNT_BTN)
        account.should('be.visible').click()
    }

    logout(){

        this.expand_nickname_options()
        const logout = cy.get('span').contains(this.home_locator.LOGOUT_TEXT_BTN)
        logout.should('be.visible').click()

    }

    go_to_legal_contacts(){
        const legal_contact = cy.get(this.home_locator.LEGAL_CONTACTS_MENU_BTN).should('be.visible')
        legal_contact.click()
    }

    go_to_clients_and_contacts(){
        const clients_and_contacts = cy.get(this.home_locator.CLIENTS_CONTACS_MENU_BTN).should('be.visible')
        clients_and_contacts.click()
    }
}

export default HomePage