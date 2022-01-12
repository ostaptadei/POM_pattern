import inputs from '../utils/inputs'
import { expect as chaiExpect } from 'chai'
import { config } from '../wdio.conf'
import workShiftPage from '../pageobjects/workShift.page'

async function verifyUrl(url: string) {
  return await chaiExpect(await browser.getUrl()).to.equal(config.baseUrl + url)
}

async function logIn(username: string, password: string): Promise<void> {
  await this.inputUsername.addValue(username)
  await this.inputPassword.addValue(password)
  await this.btnSubmit.click()
}

async function redirectToWorkShift(): Promise<void> {
  await this.adminTab.moveTo()
  await this.jobTab.moveTo()
  await this.workShiftTab.click()
}

async function addShift(
  shiftName: string,
  hoursFrom: string,
  hoursTo: string
): Promise<void> {
  await this.btnAdd.click()
  await this.employeesList.click()
  await this.btnAssing.click()
  await this.timePickerFrom.addValue(hoursFrom)
  await this.timePickerTo.addValue(hoursTo)
  await this.input.addValue(shiftName)
  await this.btnSave.click()
}

async function findShift(
  shiftName: string,
  hoursFrom: string,
  hoursTo: string
): Promise<void> {
  try {
    await chaiExpect(await this.shiftName.getText()).to.equal(shiftName)
    await chaiExpect(await this.hoursFrom.getText()).to.equal(hoursFrom)
    await chaiExpect(await this.hoursTo.getText()).to.equal(hoursTo)
  } catch (e) {
    console.log(new Error('Field is not present on the page'))
  }
}

async function deleteShift(verifyText: string): Promise<void> {
  let checkBox = await this.getCheckBox(verifyText)
  await checkBox.click()
  await this.btnDelete.click()
  await this.btnOk.click()
}

let functions = {
  logIn,
  redirectToWorkShift,
  addShift,
  findShift,
  deleteShift,
  verifyUrl,
}

export default functions
