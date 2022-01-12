import functions from '../helpers/helper'
import inputs from '../utils/inputs'
import locators from '../utils/locators'
import Page from './page'
import { ChainablePromiseElement } from 'webdriverio'

class mainPage extends Page {
  get adminTab(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.mainPageLocators.adminTab)
  }

  get jobTab(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.mainPageLocators.jobTab)
  }

  get workShiftTab(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.mainPageLocators.workShiftTab)
  }

  async verifyDashboardUrl(url: string): Promise<any> {
    return await functions.verifyUrl(url)
  }

  async goToWorkShift(): Promise<void> {
    return await functions.redirectToWorkShift.call(this)
  }
}

export default new mainPage()
