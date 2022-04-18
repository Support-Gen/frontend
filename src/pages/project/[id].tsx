import type { NextPage } from 'next'
import AppLayout from '../../components/layout/app-layout'
import ProjectDetailsComponent from '../../feature/projects/project-details'

const Project: NextPage = () => {
  return (
    <AppLayout>
      <ProjectDetailsComponent></ProjectDetailsComponent>
    </AppLayout>
  )
}

export default Project
