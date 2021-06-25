class ClientsContactsLocators{
    CLIENTS_CONTACTS_LABEL = '.mr-layout-spacing'
    CLIENTS_CONTACTS_TEXT = 'Clients and Contacts'
    ADD_PERSON_TEXT = 'Add Person'

    CREATE_PERSON_LABEL = 'Create Person'
    FIRSTNAME_FIELD = '[data-test=firstName]'
    LASTNAME_FIELD = '[data-test=lastName]'
    GENDER_DDL = '#mat-select-value-3'
    GENDER_OPTION = '.mat-option-text'
    STATUS_DDL = '#mat-select-value-5'
    STATUS_OPTION = '.mat-option-text'
    ADD_PHONE_BTN = 'Add Phone'
    PHONE_TYPE_FIELD = '[data-test=type]'
    PHONE_TYPE_OPTION = '.mat-option-text'
    PHONE_NUMBER_FIELD = '[data-test=phone]'
    SAVE_BTN = 'Save'

    PERSON_MORE_OPTIONS_BTN = "(//mat-cell[@class='px-3 flex-grow-0 ng-star-inserted' and ./div[contains(.,'{}')]]/following-sibling::mat-cell[contains(.,'more_horiz')]/button)"
    DELETE_TEXT = 'Delete Contact'
    CONFIRM_DELETE_TEXT = 'Yes, delete'
    CANCEL_DELETE = 'Cancel'

    
}

class ClientsContactsPage{
    clients_contacts_locator = new ClientsContactsLocators()

    validate_clients_contacts_page_is_displayed(){
        const clients_contacts_label = cy.get(this.clients_contacts_locator.CLIENTS_CONTACTS_LABEL).contains(this.clients_contacts_locator.CLIENTS_CONTACTS_TEXT)
        const add_person_btn = cy.contains(this.clients_contacts_locator.ADD_PERSON_TEXT)

        clients_contacts_label.should('be.visible')
        add_person_btn.should('be.visible')
    }

    go_to_add_person(){
        const add_person_btn = cy.contains(this.clients_contacts_locator.ADD_PERSON_TEXT)
        add_person_btn.should('be.visible').click()
    }

    validate_add_person_page_is_displayed(){
        const create_person_label = cy.contains(this.clients_contacts_locator.CREATE_PERSON_LABEL)
        create_person_label.should('be.visible')
    }

    enter_firstname(firstname){
        const firstname_field = cy.get(this.clients_contacts_locator.FIRSTNAME_FIELD)
        firstname_field.should('be.visible').type(firstname)
    }

    enter_lastname(lastname){
        const lastname_field = cy.get(this.clients_contacts_locator.LASTNAME_FIELD)
        lastname_field.should('be.visible').type(lastname)
    }

    enter_gender(gender){
        const gender_field = cy.get(this.clients_contacts_locator.GENDER_DDL)
        gender_field.should('be.visible').click()
        const gender_option = cy.get(this.clients_contacts_locator.GENDER_OPTION).contains(gender)
        gender_option.click()
    }

    enter_status(status){
        const status_field = cy.get(this.clients_contacts_locator.STATUS_DDL)
        status_field.should('be.visible').click()
        const status_option = cy.get(this.clients_contacts_locator.STATUS_OPTION).contains(status)
        status_option.click()
    }

    add_phone(phone_type, phone_number){
        const add_phone_btn = cy.contains(this.clients_contacts_locator.ADD_PHONE_BTN).scrollIntoView().should('be.visible').click()   
        this.enter_phone_type(phone_type)  
        this.enter_phone_number(phone_number)   
    }

    enter_phone_type(phone_type){
        const phone_type_field = cy.get(this.clients_contacts_locator.PHONE_TYPE_FIELD)
        phone_type_field.should('be.visible').click()
        const phone_type_option = cy.get(this.clients_contacts_locator.PHONE_TYPE_OPTION).contains(phone_type)
        phone_type_option.click()
    }

    enter_phone_number(phone_number){
        const phone_number_field = cy.get(this.clients_contacts_locator.PHONE_NUMBER_FIELD)
        phone_number_field.should('be.visible').type(phone_number)
    }

    save_person(){
        const save_btn = cy.contains(this.clients_contacts_locator.SAVE_BTN)
        save_btn.should('be.visible').click()
    }

    more_options(contact){
        cy.wait(4000)
        const more_options = cy.xpath(this.clients_contacts_locator.PERSON_MORE_OPTIONS_BTN.replace('{}',contact))
        more_options.invoke('show').click() 
        
    }

    delete_contact(){
        const delete_btn = cy.contains(this.clients_contacts_locator.DELETE_TEXT)
        delete_btn.click()
    }

    confirm_delete(){
        const confirm_delete_btn = cy.contains(this.clients_contacts_locator.CONFIRM_DELETE_TEXT)
        confirm_delete_btn.click()
    }

}

export default ClientsContactsPage