import {
  Badge,
  Card,
  Grid,
  Group,
  Title,
  Text,
  useMantineTheme,
  Button,
  TextInput,
  UnstyledButton,
  Box,
  Modal,
  Paper,
} from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineAdd } from "react-icons/md";
import AddProject from "../projects/add-project";

const ProjectComponent = () => {
  const [opened, setOpened] = useState(false);

  return (
      <section flowy-module="projects">
        <Group mb={"lg"}>
          <Title>Projects</Title>
          <Badge variant={"filled"} color={"blue"}>
            1
          </Badge>
        </Group>
        <Group position={'apart'} mb={"lg"}>
          <Box sx={{ width: '50%', minWidth: 250 }}>
            <TextInput
              type={'search'}
              placeholder="Search projects..."
              icon={<BiSearch size={17} />}
            />
          </Box>
          <Box>
            <Button flowy-feature="addProject-1" onClick={() => setOpened(true)} leftIcon={<MdOutlineAdd size={18} />}>Add project</Button>
          </Box>
        </Group>
        <Grid>
          <Grid.Col span={3}>
            <a style={{width: '100%'}} href="/project/test">
              <Paper withBorder shadow={"md"} p={20} radius={"md"}>
                <Title order={3}>TherapyApp</Title>
                <Text mb={"md"}>therapyapp.flowydocs.com</Text>
                <Text size={"sm"}>Updated 10d ago</Text>
              </Paper>
            </a>
          </Grid.Col>
        </Grid>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          size={'xl'}
          title={
            <Title order={2}>Add Project</Title>
          }
          >
          <AddProject></AddProject>
        </Modal>
      </section>
  );
};

export default ProjectComponent;
