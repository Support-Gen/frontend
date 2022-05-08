import type { GetServerSideProps, NextPage } from "next";
import { resetServerContext } from "react-beautiful-dnd";
import ProjectLayout from "../../../components/layout/project-layout";
import ProjectSettingsComponent from "../../../feature/projects/settings";
import { ProjectDefaultHeader } from "../../../components/headers/project-default-header";

const Project: NextPage = () => {
  return (
    <ProjectLayout
      header={<ProjectDefaultHeader></ProjectDefaultHeader>}
    >
      <ProjectSettingsComponent></ProjectSettingsComponent>
    </ProjectLayout>
  );
};

export default Project;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return { props: { data: [] } };
};
