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
} from "@mantine/core";
import { BiSearch } from "react-icons/bi";
import { MdOutlineAdd } from "react-icons/md";

const DashboardComponent = () => {
  const theme = useMantineTheme();
  return (
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
          <Button leftIcon={<MdOutlineAdd size={18} />}>Add project</Button>
        </Box>
      </Group>
      <Grid>
        <Grid.Col span={3}>
          <UnstyledButton sx={{width: '100%'}} >
            <Card radius={"md"} shadow={"md"}>
              <Title order={3}>TherapyApp</Title>
              <Text mb={"md"}>docs.therapyapp.com</Text>
              <Text size={"sm"}>Updated 10d ago</Text>
            </Card>
          </UnstyledButton>
        </Grid.Col>
      </Grid>
    </section>
  );
};

export default DashboardComponent;
