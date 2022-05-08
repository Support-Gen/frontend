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
  Image,
  Paper,
  createStyles,
} from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineAdd } from "react-icons/md";
import AddProject from "../projects/add-project";

const useStyles = createStyles((theme) => ({
  imageBorder: {
    borderBottom: '1px solid ' + theme.colors.gray[2] 
  },
  projectCard: {
    ':hover': {
      boxShadow: theme.shadows.sm
    }
  }
}));

const ProjectComponent = () => {
  const [opened, setOpened] = useState(false);

  const { classes } = useStyles();

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
          <Grid.Col span={4}>
            <a style={{width: '100%'}} href="/project/test">
              <Card withBorder={true} p={20} radius={"md"} className={classes.projectCard}>
                <Card.Section className={classes.imageBorder} mb={'sm'}>
                  <Image src="/feature-docs.png" height={160} alt="TherapyApp" />
                </Card.Section>
                <Text size={'md'} weight={700}>TherapyApp</Text>
                <Group position={'apart'}>
                  <Text size={"sm"} color={'gray'}>therapyapp.flowydocs.com</Text>
                  <Text size={"sm"} color={'gray'}>Updated 10d ago</Text>
                </Group>
              </Card>
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
