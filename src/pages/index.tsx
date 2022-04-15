import type { NextPage } from 'next'
import AppLayout from '../components/layout/app-layout'
import DashboardComponent from '../feature/dashboard/dashboard'

const Dashboard: NextPage = () => {
  return (
    <AppLayout>
      <DashboardComponent></DashboardComponent>
    </AppLayout>
  )
}

export default Dashboard
