const Routes = require('../../config/appRoutes')
const EmployeeController = require('../../delivery/controller/employeeController')

const EmployeeRoute = (app) => {
  app.post(Routes().POST_EMPLOYEE, EmployeeController().createEmployee)
  app.get(Routes().GET_EMPLOYEE_LIST, EmployeeController().listEmployee)
  app.get(Routes().POST_EMPLOYEE, EmployeeController().getEmployee)
  app.put(Routes().POST_EMPLOYEE, EmployeeController().updateEmployee)
  app.delete(Routes().POST_EMPLOYEE, EmployeeController().deleteEmployee)
}

module.exports = EmployeeRoute