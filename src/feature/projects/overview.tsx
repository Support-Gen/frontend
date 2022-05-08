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

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 1.5,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const ProjectOverviewComponent = () => {
  const { classes } = useStyles();

  return (
    <Box>
      <Title mb={"lg"}>Overview</Title>
      <Paper p={'lg'} radius={'md'} shadow={'sm'}>
        <Grid>
          <Grid.Col span={6} p={'md'}>
            <Paper withBorder={true} radius={'md'}>
              <img width={'100%'} src="/feature-docs.png"/>
            </Paper>
          </Grid.Col>
          <Grid.Col span={6} p={'md'}>
            <Box mb={10}>
              <Text
                  color="dimmed"
                  transform="uppercase"
                  weight={700}
                  size="xs"
                  className={classes.label}
                >
                Domains
              </Text>
              <a href="#" target={'_blank'}><Text size="md" weight={600}>docs.therapyapp.ch</Text></a>
              <a href="#" target={'_blank'}><Text size="md" weight={600}>therapyapp.flowyapps.com</Text></a>
            </Box>
            <Box>
              <Text
                  color="dimmed"
                  transform="uppercase"
                  weight={700}
                  size="xs"
                  className={classes.label}
                >
                Status
              </Text>
              <Badge variant={'dot'} color={'green'}>Running</Badge>
            </Box>
          </Grid.Col>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProjectOverviewComponent;