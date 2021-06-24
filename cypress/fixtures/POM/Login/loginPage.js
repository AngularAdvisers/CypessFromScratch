class LoginLocators{
    USERNAME = '#username'
    PASSWORD = '#password'
    LOGIN_BTN = '.cc379485b'
}

class LoginPage extends LoginLocators {
    clear(){
        cy.clearLocalStorage()
        cy.window().then((win) => {
            win.sessionStorage.clear()
        })
        cy.clearCookies()
    }

    go_to_login(){
        cy.visit(Cypress.env('loginURL'))
    }

    login(username, password){
        const user = cy.get(this.USERNAME)
        const pass = cy.get(this.PASSWORD)
        const login_btn = cy.get(this.LOGIN_BTN)

        user.should('be.visible').type(username)
        pass.should('be.visible').type(password)
        login_btn.should('be.visible').click()
    }
}

export default LoginPage