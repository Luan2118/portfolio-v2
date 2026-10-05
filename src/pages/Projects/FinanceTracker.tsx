import ProjectLayout from "./components/ProjectLayout";
import dashboard from "../../assets/images/finance-tracker/dashboard.png"
import expenses from "../../assets/images/finance-tracker/expenses.png"
import seeAllExpenses from "../../assets/images/finance-tracker/see-all-expenses.png"
import incomeMobile from "../../assets/images/finance-tracker/income-mobile.png"
import dashboardMobile from "../../assets/images/finance-tracker/dashboard-mobile.png"

function FinanceTracker() {
  return (
    <ProjectLayout
      title='Finance Tracker'
      overview='
      Finance Tracker is a full-stack personal finance web app for managing income and expenses, filtering transactions, visualizing financial data, and handling multiple currencies.
      I built the frontend and backend from scratch using JavaScript, Node.js, Express, and MongoDB, including JWT authentication, protected user data, validation, and REST API endpoints.'
      type='Full-stack web application'
      features='Authentication, transactions, filters, charts, currency conversion'
      stack='JavaScript, Node.js, Express, MongoDB, Chart.js'
      lesson='The biggest lesson was learning how to connect authentication, backend logic, and database access so each user could securely work with only their own data.'
      images={[dashboard, expenses, seeAllExpenses, incomeMobile, dashboardMobile]}
      theme='dark'
      livePath='https://finance-tracker-project-sigma.vercel.app/'
      gitHubPath='https://github.com/Luan2118/finance-tracker'
      next='/hospudka-pod-bousovem'
      prev='/gym-tracker'
    />
  )
}


export default FinanceTracker