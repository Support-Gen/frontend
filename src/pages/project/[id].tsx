import type { NextPage } from 'next'
import AppLayout from '../../components/layout/app-layout'
import ProjectComponent from '../../feature/projects/project'

const Project: NextPage = () => {
  return (
    <AppLayout>
      <ProjectComponent></ProjectComponent>
    </AppLayout>
  )
}

export default Project
