import type { NextPage } from 'next'
import AppLayout from '../../components/layout/app-layout'
import ProjectsFeature from '../../feature/projects/projects'

const Projects: NextPage = () => {
  return (
    <AppLayout>
      <ProjectsFeature></ProjectsFeature>
    </AppLayout>
  )
}

export default Projects
