import BasePage from './Base'

class Client extends BasePage {
  get buttonCreateClient() { return cy.get('.mt-3.mb-2 > button') }
  get inputFullName() { return cy.get('.ant-col:nth-child(2) #name') }
  get inputPhone() { return cy.get('.ant-col:nth-child(2) #phone') }
  get inputEmail() { return cy.get('.ant-col:nth-child(2) #email') }
  get inputDescription() { return cy.get('.ant-col:nth-child(2) #description') }
  get buttonCreate() { return cy.get('.ant-btn-primary:nth-child(1)') }


  get menuButton() { return cy.get('[class="menu-link me-3 me-lg-4"]') }
  get nameInput() { return cy.get('#name') }


  get buttonCreateOrder() { return cy.get('.mb-3.mt-5 > button') }

  get drawerCreateOrder() { return cy.get('.ant-drawer-title') }
  get drawerExit() { return cy.get('.anticon-close > svg') }

  get inputClientPrice() { return cy.get('#clientPrice') }
  get inputClientPaid() { return cy.get('#clientPaid') }
  get inputVendorPrice() { return cy.get('#vendorPrice') }
  get inputVendorPaid() { return cy.get('#vendorPaid') }
  get buttonCreateOr() { return cy.get('div:nth-child(8) button') }

  // get nameCreatedClient() { return cy.get('tr:nth-child(1) > td:nth-child(1)') }

  open() {
    cy.visit('/client')
  }

  createClient(fullName, phone, email, description) {
    this.buttonCreateClient.click()
    this.inputFullName.type(fullName)
    this.inputPhone.type(phone)
    this.inputEmail.type(email)
    this.inputDescription.type(description)
    this.buttonCreate.click()
  }
  
  getClient(name) {
    cy.contains(name).click()
    //this.nameCreatedClient.click()
  }

  createOrder(name, clientPrice, clientPaid, vendorPrice, vendorPaid) {
    //cy.contains(name).click()
    this.getClient(name)
    this.buttonCreateOrder.click()

    this.inputClientPrice.type(clientPrice)
    this.inputClientPaid.type(clientPaid)

    this.inputVendorPrice.type(vendorPrice)
    this.inputVendorPaid.type(vendorPaid)

    this.buttonCreateOr.click()

  }

}


export const ClientPage = new Client();

// export default new ClientPage()
