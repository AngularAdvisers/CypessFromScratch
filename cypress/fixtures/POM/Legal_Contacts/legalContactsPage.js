class LegalContactLocators{
    LEGAL_CONTACT_LABEL = '.mr-layout-spacing'
    LEGAL_CONTACT_TEXT = 'Legal Contacts'
    ADD_LEGAL_CONTACT_BTN = '.mat-flat-button'
    ADD_LEGAL_CONTACT_TEXT = 'Add Legal Contact'
    
    CREATE_LEGAL_CONTACT_TEXT = 'Create Legal Contact'
    FIRST_NAME_FIELD = '[data-test=firstName]'
    LAST_NAME_FIELD = '[data-test=lastName]'
    STREET_ADDRESS_FIELD = '[data-test=streetAddress]'
    CITY_FIELD = '[data-test=city]'
    STATE_DDL = '#mat-select-value-5'
    STATE_NAME_OPTION = '.mat-option'
    ZIPCODE_FIELD = '[data-test=postCode]'
    COUNTRY_DDL = '#mat-select-value-7'
    COUNTRY_NAME_OPTION = '.mat-option-text'
    EMAIL_FIELD = '[data-test=email]'
    ROLE_ATTORNEY_CHECK = '[data-test=isAttorney]'
    ATTORNEY_TITLE_FIELD = '[data-test=title]'
    SAVE_BTN = '.mat-raised-button'
    SAVE_TEXT = 'Save'

    MORE_OPTIONS_FIRST_CONTACT_BTN = '.mat-cell'
    MORE_OPTIONS_FIRST_CONTACT_TEXT = 'more_horiz'
    DELETE_BTN = 'span'
    DELETE_TEXT = 'Delete Legal Contact'
    CONFIRM_DELETE_BTN = 'span'
    CONFIRM_DELETE_TEXT = 'Yes, delete'
}

class LegalContactPage{
    legal_contact_locator = new LegalContactLocators()
    
    validate_legal_contact_page_is_displayed(){
        const legal_contact_label = cy.get(this.legal_contact_locator.LEGAL_CONTACT_LABEL).contains(this.legal_contact_locator.LEGAL_CONTACT_TEXT)
        const add_legal_contact = cy.get(this.legal_contact_locator.ADD_LEGAL_CONTACT_BTN).contains(this.legal_contact_locator.ADD_LEGAL_CONTACT_TEXT)

        legal_contact_label.should('be.visible')
        add_legal_contact.should('be.visible')
    }

    go_to_add_legal_contact(){
        const add_legal_contact = cy.get(this.legal_contact_locator.ADD_LEGAL_CONTACT_BTN).contains(this.legal_contact_locator.ADD_LEGAL_CONTACT_TEXT)
        add_legal_contact.should('be.visible').click()
    }

    validate_create_legal_contact_page_is_displayed(){
        const create_legal_contact_label = cy.get(this.legal_contact_locator.LEGAL_CONTACT_LABEL).contains(this.legal_contact_locator.CREATE_LEGAL_CONTACT_TEXT)
        create_legal_contact_label.should('be.visible')
    }

    enter_firstname(first_name){
        const first_name_field = cy.get(this.legal_contact_locator.FIRST_NAME_FIELD)
        first_name_field.should('be.visible').type(first_name)
    }

    enter_lastname(last_name){
        const last_name_field = cy.get(this.legal_contact_locator.LAST_NAME_FIELD)
        last_name_field.should('be.visible').type(last_name)
    }

    enter_street_address(street_address){
        const street_address_field = cy.get(this.legal_contact_locator.STREET_ADDRESS_FIELD)
        street_address_field.should('be.visible').type(street_address)
    }

    enter_city(city){
        const city_field = cy.get(this.legal_contact_locator.CITY_FIELD)
        city_field.should('be.visible').type(city)
    }

    enter_state(state){
        const state_field = cy.get(this.legal_contact_locator.STATE_DDL)
        state_field.should('be.visible').click()
        const state_name = cy.get(this.legal_contact_locator.STATE_NAME_OPTION).contains(state)
        state_name.click()
    }

    enter_zipcode(zipcode){
        const zipcode_field = cy.get(this.legal_contact_locator.ZIPCODE_FIELD)
        zipcode_field.should('be.visible').type(zipcode)
    }

    enter_country(country){
        const country_field = cy.get(this.legal_contact_locator.COUNTRY_DDL)
        country_field.should('be.visible').click()
        const country_name = cy.get(this.legal_contact_locator.COUNTRY_NAME_OPTION).contains(country)
        country_name.click()
    }

    enter_email(email){
        const email_field = cy.get(this.legal_contact_locator.EMAIL_FIELD)
        email_field.should('be.visible').type(email)
    }

    check_attorney_role(){
        const attorney_check = cy.get(this.legal_contact_locator.ROLE_ATTORNEY_CHECK)
        attorney_check.should('be.visible').click()
    }

    enter_attorney_title(title){
        const attorney_title_field = cy.get(this.legal_contact_locator.ATTORNEY_TITLE_FIELD)
        attorney_title_field.should('be.visible').type(title)
    }

    save_legal_contact(){
        const save_btn = cy.get(this.legal_contact_locator.SAVE_BTN).contains(this.legal_contact_locator.SAVE_TEXT)
        save_btn.should('be.visible').click()
    }

    more_options(){
        const more_options = cy.get(this.legal_contact_locator.MORE_OPTIONS_FIRST_CONTACT_BTN).contains(this.legal_contact_locator.MORE_OPTIONS_FIRST_CONTACT_TEXT).last()
        more_options.invoke('show')
        cy.reload()
        const more_options2 = cy.get(this.legal_contact_locator.MORE_OPTIONS_FIRST_CONTACT_BTN).contains(this.legal_contact_locator.MORE_OPTIONS_FIRST_CONTACT_TEXT).last()
        more_options2.invoke('show').click()
    }

    delete_contact(){
        const delete_btn = cy.get(this.legal_contact_locator.DELETE_BTN).contains(this.legal_contact_locator.DELETE_TEXT)
        delete_btn.click()
    }

    confirm_delete(){
        const confirm_delete_btn = cy.get(this.legal_contact_locator.CONFIRM_DELETE_BTN).contains(this.legal_contact_locator.CONFIRM_DELETE_TEXT)
        confirm_delete_btn.click()
    }
}

export default LegalContactPage