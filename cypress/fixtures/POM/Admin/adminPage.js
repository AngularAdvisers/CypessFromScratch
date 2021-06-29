class AdminPageLocators{
    ADMIN_FIRSTNAME_FIELD = '#mat-input-0'
    ADMIN_LASTNAME_FIELD = '#mat-input-2'
    ADMIN_OPTION_MANAGEUSERS = 'Manage Users'
    ADMIN_EMAIL_FIELD = '#mat-input-5'
    ADMIN_ROLE_ADMIN_RADIOBUTTON= '#mat-radio-3 > .mat-radio-label > .mat-radio-container > .mat-radio-inner-circle'
    ADMIN_ACTIVE_USER_CHECKBOX = '.mat-checkbox-inner-container'


    ADMIN_ADD_USER_BUTTON = 'Add User'
    ADMIN_CANCEL_BUTTON = 'Cancel'
    ADMIN_SAVE_USER_BUTTON = 'Save User'

}

class AdminPage{
    admin_page_locators = new AdminPageLocators()

    go_to_admin_manageusers(){
        const manageusers_btn = cy.contains(this.admin_page_locators.ADMIN_OPTION_MANAGEUSERS)
        manageusers_btn.should('be.visible').click()
    }

    enter_firstname(firstname){
        const firstname_field = cy.get(this.admin_page_locators.ADMIN_FIRSTNAME_FIELD)
        firstname_field.should('be.visible').type(firstname)
    }

    enter_lastname(lastname){
        const lastname_field = cy.get(this.admin_page_locators.ADMIN_LASTNAME_FIELD)
        lastname_field.should('be.visible').type(lastname)
    }

    enter_email(email){
        const email_field = cy.get(this.admin_page_locators.ADMIN_EMAIL_FIELD).scrollIntoView()
        email_field.should('be.visible').type(email)
    }

    check_admin_role(){
        const admin_role_radiobutton = cy.get(this.admin_page_locators.ADMIN_ROLE_ADMIN_RADIOBUTTON)
        admin_role_radiobutton.should('be.visible').click()
    }

    check_active_checkbox(){
        const active_checkbox = cy.get(this.admin_page_locators.ADMIN_ACTIVE_USER_CHECKBOX)
        active_checkbox.should('be.visible').click()
    }

    add_admin_user(){
        const add_btn = cy.contains(this.admin_page_locators.ADMIN_ADD_USER_BUTTON)
        add_btn.should('be.visible').click()
    }

    //In progress

    select_created_user(user){
        const created_user = cy.contains(user)
        created_user.should('be.visible').click()
    }

    inactive_admin_user(){
        const active_checkbox = cy.get(this.admin_page_locators.ADMIN_ACTIVE_USER_CHECKBOX)
        active_checkbox.should('be.visible').click()
    }

    confirm_inactive_user(){
        const save_user_btn = cy.contains(this.admin_page_locators.ADMIN_SAVE_USER_BUTTON)
        save_user_btn.should('be.visible').click()
    }

}

export default AdminPage