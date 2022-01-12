import LoginPage from '../pageobjects/login.page'
import mainPage from '../pageobjects/main.page'
import workShiftPage from '../pageobjects/workShift.page'
import inputs from '../utils/inputs'

describe('Add new record, check its presence and delete', () => {
  it('Should open login page', async () => {
    await LoginPage.open()
  })

  it('Should login with valid credentials', async () => {
    await LoginPage.login(inputs.username, inputs.password)
  })

  it('Should redirect to dashboard page', async () => {
    await mainPage.verifyDashboardUrl(inputs.dashBoardUrl)
  })

  it('Should go to WorkShift page', async () => {
    await mainPage.goToWorkShift()
  })

  it('Should show workShift page', async () => {
    await workShiftPage.verifyShiftPageUrl(inputs.workShiftUrl)
  })

  it('Should add new Shift', async () => {
    await workShiftPage.addNewShift(
      inputs.shiftName,
      inputs.hoursFrom,
      inputs.hoursTo
    )
  })

  it('Should find new Shift', async () => {
    await workShiftPage.findNewShift(
      inputs.shiftName,
      inputs.hoursFrom,
      inputs.hoursTo
    )
  })

  it('Should delete new Shift', async () => {
    await workShiftPage.deleteNewShift(inputs.shiftName)
  })

  it('Should make sure field is deleted', async () => {
    await workShiftPage.findNewShift(
      inputs.shiftName,
      inputs.hoursFrom,
      inputs.hoursTo
    )
  })
})
