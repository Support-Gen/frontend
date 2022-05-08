import { Header, UnstyledButton, Group } from "@mantine/core";
import type { GetServerSideProps, NextPage } from "next";
import { resetServerContext } from "react-beautiful-dnd";
import ProjectLayout from "../../../components/layout/project-layout";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import OverviewProjectComponent from "../../../feature/projects/overview";

const Project: NextPage = () => {
  return (
    <ProjectLayout
      header={<DefaultHeader></DefaultHeader>}
    >
      <OverviewProjectComponent></OverviewProjectComponent>
    </ProjectLayout>
  );
};

export default Project;

const DefaultHeader = () => {
  return (
    <Header height={60} py="xs" px={"lg"}>
      <Group align={'center'} style={{ height: '100%' }}>
        <Link href="/" passHref={true}>
          <UnstyledButton>
            <Group>
              <MdArrowBack size={18} />
              Projects
            </Group>
          </UnstyledButton>
        </Link>
      </Group>
    </Header>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  resetServerContext(); // <-- CALL RESET SERVER CONTEXT, SERVER SIDE

  return { props: { data: [] } };
};
