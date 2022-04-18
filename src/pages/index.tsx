import type { NextPage } from 'next'
import AppLayout from '../components/layout/app-layout'
import DashboardComponent from '../feature/dashboard/dashboard'
import ProjectComponent from '../feature/projects/project'

const Dashboard: NextPage = () => {
  return (
    <AppLayout>
      <ProjectComponent></ProjectComponent>
    </AppLayout>
  )
}

export default Dashboard
