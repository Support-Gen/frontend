import { Header, UnstyledButton, Group } from "@mantine/core";
import type { GetServerSideProps, NextPage } from "next";
import { resetServerContext } from "react-beautiful-dnd";
import ProjectLayout from "../../../components/layout/project-layout";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import ProjectHeader from "../../../feature/projects/project-header";
import EditProjectComponent from "../../../feature/projects/edit-project";

const Project: NextPage = () => {
  return (
    <ProjectLayout
      header={<ProjectHeader></ProjectHeader>}
    >
      <EditProjectComponent></EditProjectComponent>
    </ProjectLayout>
  );
};

export default Project;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return { props: { data: [] } };
};
