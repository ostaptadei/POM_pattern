import { ChainablePromiseElement } from 'webdriverio'

import functions from '../helpers/helper'
import inputs from '../utils/inputs'
import locators from '../utils/locators'
import Page from './page'

class LoginPage extends Page {
  get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.loginPageLocators.inputUsername)
  }

  get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.loginPageLocators.inputPassword)
  }

  get btnSubmit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.loginPageLocators.btnSubmit)
  }

  async login(username: string, password: string): Promise<any> {
    return await functions.logIn.call(this, username, password)
  }

  open(): Promise<string> {
    return super.open('index.php/auth/login')
  }
}

export default new LoginPage()
