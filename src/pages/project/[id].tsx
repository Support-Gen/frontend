import type { GetServerSideProps, NextPage } from 'next'
import { resetServerContext } from 'react-beautiful-dnd'
import AppLayout from '../../components/layout/app-layout'
import EditProjectComponent from '../../feature/projects/edit-project'

const Project: NextPage = () => {
  return (
    <EditProjectComponent></EditProjectComponent>
  )
}

export default Project

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  resetServerContext()   // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return {props: { data : []}}

}
