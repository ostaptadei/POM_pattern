import inputs from './inputs'

let locators = {
  loginPageLocators: {
    inputUsername: '#txtUsername',
    inputPassword: '#txtPassword',
    btnSubmit: '#btnLogin',
  },
  mainPageLocators: {
    adminTab: '#menu_admin_viewAdminModule',
    jobTab: '#menu_admin_Job',
    workShiftTab: '#menu_admin_workShift',
  },
  workShiftPageLocators: {
    employeesList: '.selectMany :nth-child(1)',
    btnAdd: '#btnAdd',
    btnAssing: '#btnAssignEmployee',
    input: '#workShift_name',
    btnSave: '#btnSave',
    timePickerFrom: '#workShift_workHours_from',
    timePickerTo: '#workShift_workHours_to',
    shiftName: `//a[text()='${inputs.shiftName}']`,
    hoursFrom: `//a[text()='${inputs.shiftName}']/../../td[3]`,
    hoursTo: `//a[text()='${inputs.shiftName}']/../../td[4]`,
    checkBox: `//a[text()='${inputs.shiftName}']/../../td/input`,
    btnDelete: `#btnDelete`,
    btnOk: `#dialogDeleteBtn`,
  },
}

export default locators
