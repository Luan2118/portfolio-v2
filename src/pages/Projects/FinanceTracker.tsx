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
      Finance Tracker is a full-stack web application for people who want to track their personal income and expenses. Users can create an account, add and delete categorized transactions, and review their balance through charts and filters for date, category, and amount. The app also supports currency conversion between five currencies.'
      type='Full-stack web application'
      features='Authentication, transactions, filters, charts, currency conversion'
      stack='JavaScript, Node.js, Express, MongoDB, JWT, Chart.js'
      lesson='Building my first full-stack application taught me how to connect a JavaScript frontend to an Express API and store user data in MongoDB. I learned to implement registration and login with password hashing, JWT authentication, and token renewal. I also gained experience updating charts after data changes and testing user interactions and API error handling with Vitest and Testing Library.'
      images={[dashboard, expenses, seeAllExpenses, incomeMobile, dashboardMobile]}
      theme='dark'
      livePath='https://finance-tracker-project-sigma.vercel.app/'
      gitHubPath='https://github.com/Luan2118/finance-tracker'
      prev='/hospudka-pod-bousovem'
    />
  )
}


export default FinanceTracker