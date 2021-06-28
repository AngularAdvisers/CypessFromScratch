import moment from "moment"

class ClientsContactsLocators{
    CLIENTS_CONTACTS_LABEL = '.mr-layout-spacing'
    CLIENTS_CONTACTS_TEXT = 'Clients and Contacts'
    ADD_PERSON_TEXT = 'Add Person'
    ADD_TRUST_BTN = 'Add Trust'
    ADD_ENTITY_BTN = 'Add Entity'
    MORE_BTN = 'more_horiz'

    CREATE_PERSON_LABEL = 'Create Person'
    FIRSTNAME_FIELD = '[data-test=firstName]'
    LASTNAME_FIELD = '[data-test=lastName]'
    GENDER_DDL = '[data-test=gender] > .mat-select-trigger'
    GENDER_OPTION = '.mat-option-text'
    STATUS_DDL = '[data-test=status] > .mat-select-trigger'
    STATUS_OPTION = '.mat-option-text'
    ADD_PHONE_BTN = 'Add Phone'
    PHONE_TYPE_FIELD = '[data-test=type]'
    PHONE_TYPE_OPTION = '.mat-option-text'
    PHONE_NUMBER_FIELD = '[data-test=phone]'
    SAVE_BTN = 'Save'

    CREATE_ENTITY_LABEL = 'Create Entity'
    ENTITY_TYPE_FIELD = '.mat-select-arrow-wrapper'
    ENTITY_TYPE_OPTION = '.mat-option-text'
    FULL_ENTITY_NAME_FIELD = '[data-test=fullEntityName]'
    SHORT_ENTITY_NAME_FIELD = '[data-test=shortEntityName]'

    CREATE_TRUST_LABEL = 'Create Trust'
    TRUST_NAME_FIELD = '[data-test=trustName]'
    TRUST_DATE_FIELD = '[data-test=trustDate]'
    STATE_OF_TRUST_FIELD = '.mat-select-arrow-wrapper'
    STATE_OF_TRUST_OPTION = '.mat-option-text'


    ENTRY_MORE_OPTIONS_BTN = "(//mat-cell[@class='px-3 flex-grow-0 ng-star-inserted' and ./div[contains(.,'{}')]]/following-sibling::mat-cell[contains(.,'more_horiz')]/button)"
    DELETE_TEXT = 'Delete Contact'
    CONFIRM_DELETE_TEXT = 'Yes, delete'
    CANCEL_BTN = 'Cancel'

    MERGE_BTN = 'Merge'
    SEARCH_CONTACT_BTN = 'Search contact'
    FIRST_CONTACT_SEARCH = '#mat-input-20'
    FIRST_CONTACT_OPTION = '.mat-option-text'
    SECOND_CONTACT_SEARCH = '#mat-input-21'
    SECOND_CONTACT_OPTION = '.mat-option-text'
    NEXT_BTN = 'Next'
    CORRECT_FIELDS_TEXT = 'Select the Correct Fields'
    MERGE_CONTACTS_BTN = 'Merge Contacts'

    MODIFIED_DATE = ':nth-child(1) > elder-form-section.ng-star-inserted > .mb-sm > formly-group.ng-star-inserted > formly-field.ng-star-inserted > .ng-star-inserted > p'
    CREATED_DATE = ':nth-child(3) > elder-form-section.ng-star-inserted > .mb-sm > formly-group.ng-star-inserted > formly-field.ng-star-inserted > .ng-star-inserted > p'
    MODIFIED_BY = ':nth-child(2) > elder-form-section.ng-star-inserted > .mb-sm > formly-group.ng-star-inserted > formly-field.ng-star-inserted > .ng-star-inserted > p'
    CREATED_BY = ':nth-child(4) > elder-form-section.ng-star-inserted > .mb-sm > formly-group.ng-star-inserted > formly-field.ng-star-inserted > .ng-star-inserted > p'
    CREATED_BY_LABEL = 'Created By'

    ACCOUNT_BTN = '#account  > .mat-button-wrapper'
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

    go_to_add_trust(){
        const add_trust_btn = cy.contains(this.clients_contacts_locator.ADD_TRUST_BTN)
        add_trust_btn.should('be.visible').click()
    }

    go_to_add_entity(){
        const add_entity_btn = cy.contains(this.clients_contacts_locator.ADD_ENTITY_BTN)
        add_entity_btn.should('be.visible').click()
    }

    validate_add_person_page_is_displayed(){
        const create_person_label = cy.contains(this.clients_contacts_locator.CREATE_PERSON_LABEL)
        create_person_label.should('be.visible')
    }

    validate_add_trust_page_is_displayed(){
        const create_trust_label = cy.contains(this.clients_contacts_locator.CREATE_TRUST_LABEL)
        create_trust_label.should('be.visible')
    }

    validate_add_entity_page_is_displayed(){
        const create_entity_label = cy.contains(this.clients_contacts_locator.CREATE_ENTITY_LABEL)
        create_entity_label.should('be.visible')
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

    enter_entity_type(entity_type){
        const entity_type_field = cy.get(this.clients_contacts_locator.ENTITY_TYPE_FIELD)
        entity_type_field.should('be.visible').click()
        const entity_type_option = cy.get(this.clients_contacts_locator.ENTITY_TYPE_OPTION).contains(entity_type)
        entity_type_option.click()
    }

    enter_full_entity_name(entity_name){
        const full_entity_name_field = cy.get(this.clients_contacts_locator.FULL_ENTITY_NAME_FIELD)
        full_entity_name_field.should('be.visible').type(entity_name)
    }

    enter_short_entity_name(entity_short){
        const short_entity_name_field = cy.get(this.clients_contacts_locator.SHORT_ENTITY_NAME_FIELD)
        short_entity_name_field.should('be.visible').type(entity_short)
    }

    enter_trust_name(trust_name){
        const trust_name_field = cy.get(this.clients_contacts_locator.TRUST_NAME_FIELD)
        trust_name_field.should('be.visible').type(trust_name)
    }

    enter_trust_date(trust_date){
        const trust_date_field = cy.get(this.clients_contacts_locator.TRUST_DATE_FIELD)
        trust_date_field.should('be.visible').type(trust_date)
    }

    enter_state_of_trust(state){
        const state_of_trust_field = cy.get(this.clients_contacts_locator.STATE_OF_TRUST_FIELD)
        state_of_trust_field.should('be.visible').click()
        const state_of_trust_option = cy.get(this.clients_contacts_locator.STATE_OF_TRUST_OPTION).contains(state)
        state_of_trust_option.click()
    }

    save_person(){
        const save_btn = cy.contains(this.clients_contacts_locator.SAVE_BTN)
        save_btn.should('be.visible').click()
    }

    contact_more_options(contact){
        cy.wait(4000)
        const contact_more_options = cy.xpath(this.clients_contacts_locator.ENTRY_MORE_OPTIONS_BTN.replace('{}',contact))
        contact_more_options.invoke('show').click() 
        
    }

    delete_contact(){
        const delete_btn = cy.contains(this.clients_contacts_locator.DELETE_TEXT)
        delete_btn.click()
    }

    confirm_delete(){
        const confirm_delete_btn = cy.contains(this.clients_contacts_locator.CONFIRM_DELETE_TEXT)
        confirm_delete_btn.click()
    }

    more_actions(){
        const more_actions_btn = cy.contains(this.clients_contacts_locator.MORE_BTN).first()
        more_actions_btn.should('be.visible').click()
    }

    merge_contacts(){
        const merge_btn = cy.contains(this.clients_contacts_locator.MERGE_BTN)
        merge_btn.should('be.visible').click()
    }

    enter_contacts_to_merge(first_contact, second_contact){
        const first_contact_field = cy.get(this.clients_contacts_locator.FIRST_CONTACT_SEARCH)
        //const first_contact_field = cy.get('input').invoke('attr', 'placeholder').should('contain', 'Search contact').last()
        first_contact_field.should('be.visible').click().type(first_contact)
        const first_contact_option = cy.get(this.clients_contacts_locator.FIRST_CONTACT_OPTION).contains(first_contact)
        first_contact_option.click()

        const second_contact_field = cy.get(this.clients_contacts_locator.SECOND_CONTACT_SEARCH)
        //const first_contact_field = cy.get('input').invoke('attr', 'placeholder').should('contain', 'Search contact').last()
        second_contact_field.should('be.visible').click().type(second_contact)
        const second_contact_option = cy.get(this.clients_contacts_locator.SECOND_CONTACT_OPTION).contains(second_contact)
        second_contact_option.click()
    }

    merge_contacts_next_step(){
        const next_btn = cy.contains(this.clients_contacts_locator.NEXT_BTN)
        next_btn.should('be.visible').click()
    }

    validate_merge_field_selection_page_is_displayed(){
        const correct_fields = cy.contains(this.clients_contacts_locator.CORRECT_FIELDS_TEXT)
        correct_fields.should('be.visible')
    }

    accept_merge_of_contacts(){
        const merge_contacts_btn = cy.contains(this.clients_contacts_locator.MERGE_CONTACTS_BTN)
        merge_contacts_btn.should('be.visible').click()
    }

    go_to_contact(contact){
        const to_open_contact = cy.contains(contact)
        to_open_contact.should('be.visible').click()
    }

    scroll_to_end(){
        cy.wait(2000)
        cy.get('.overflow-y-scroll').scrollTo('bottom')
        
        const created_by_label = cy.contains(this.clients_contacts_locator.CREATED_BY_LABEL)
        created_by_label.should('be.visible')
    }

    validate_dates_are_correct(){
        const today = moment().format("MMM DD, YYYY")
        
        const modified_date = cy.get(this.clients_contacts_locator.MODIFIED_DATE)
        modified_date.should('have.text', today)

        const created_date = cy.get(this.clients_contacts_locator.CREATED_DATE)
        created_date.should('have.text', today)
    }

    validate_users_are_correct(){
        let account_name
        cy.get(this.clients_contacts_locator.ACCOUNT_BTN).should(($div) => {
            account_name = $div.text()
        })

        cy.get(this.clients_contacts_locator.MODIFIED_BY).should(($div) => {
            const modified_by = $div.text()
            expect(account_name).contains(modified_by);
        })

        cy.get(this.clients_contacts_locator.CREATED_BY).should(($div) => {
            const created_by = $div.text()
            expect(account_name).contains(created_by);
        })
    }

    validate_data(){
        this.validate_dates_are_correct()

        this.validate_users_are_correct()        
    }

    cancel_contact(){
        const cancel_btn = cy.contains(this.clients_contacts_locator.CANCEL_BTN)
        cancel_btn.should('be.visible').click()
    }

}

export default ClientsContactsPage