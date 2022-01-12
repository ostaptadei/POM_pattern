import functions from '../helpers/helper'
import inputs from '../utils/inputs'
import Page from './page'
import { expect as chaiExpect } from 'chai'
import { config } from '../wdio.conf'
import locators from '../utils/locators'
import { ChainablePromiseElement } from 'webdriverio'

class workShiftPage extends Page {
  get employeesList(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.workShiftPageLocators.employeesList)
  }
  get btnAdd(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.workShiftPageLocators.btnAdd)
  }
  get btnAssing(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.workShiftPageLocators.btnAssing)
  }

  get input(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.workShiftPageLocators.input)
  }
  get btnSave(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.workShiftPageLocators.btnSave)
  }
  get timePickerFrom(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.workShiftPageLocators.timePickerFrom)
  }
  get timePickerTo(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.workShiftPageLocators.timePickerTo)
  }

  get shiftName(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.workShiftPageLocators.shiftName)
  }

  get hoursFrom(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.workShiftPageLocators.hoursFrom)
  }
  get hoursTo(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.workShiftPageLocators.hoursTo)
  }

  async getCheckBox(verifyText: string): Promise<WebdriverIO.Element> {
    return $(`//a[text()='${verifyText}']/../../td/input`)
  }

  get btnDelete(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.workShiftPageLocators.btnDelete)
  }

  get btnOk(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $(locators.workShiftPageLocators.btnOk)
  }

  async verifyShiftPageUrl(url: string): Promise<void> {
    return await functions.verifyUrl(url)
  }

  async addNewShift(
    shiftName: string,
    hoursFrom: string,
    hoursTo: string
  ): Promise<void> {
    return await functions.addShift.call(this, shiftName, hoursFrom, hoursTo)
  }

  async findNewShift(
    shiftName: string,
    hoursFrom: string,
    hoursTo: string
  ): Promise<void> {
    return await functions.findShift.call(this, shiftName, hoursFrom, hoursTo)
  }

  async deleteNewShift(verifyText: string): Promise<void> {
    return await functions.deleteShift.call(this, verifyText)
  }
}

export default new workShiftPage()
