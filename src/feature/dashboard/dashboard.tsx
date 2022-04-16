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
} from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineAdd } from "react-icons/md";
import AddProject from "../projects/add-project";

const DashboardComponent = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <section>
        <Group mb={"lg"}>
          <Title>Overview</Title>
          <Badge variant={"filled"} color={"blue"}>
            2
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
            <Button onClick={() => setOpened(true)} leftIcon={<MdOutlineAdd size={18} />}>Add project</Button>
          </Box>
        </Group>
        <Grid>
          <Grid.Col span={3}>
            <a style={{width: '100%'}} href="/project/test">
              <Card radius={"md"} shadow={"md"}>
                <Title order={3}>TherapyApp</Title>
                <Text mb={"md"}>docs.therapyapp.com</Text>
                <Text size={"sm"}>Updated 10d ago</Text>
              </Card>
            </a>
          </Grid.Col>
        </Grid>
      </section>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size={'lg'}
        title={
          <Title order={2}>Add Project</Title>
        }
        >
        <AddProject></AddProject>
      </Modal>
    </>
  );
};

export default DashboardComponent;
