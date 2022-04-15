import type { NextPage } from 'next'
import AppLayout from '../components/layout/app-layout'
import DashboardFeature from '../feature/dashboard/dashboard'

const Dashboard: NextPage = () => {
  return (
    <AppLayout>
      <DashboardFeature></DashboardFeature>
    </AppLayout>
  )
}

export default Dashboard
