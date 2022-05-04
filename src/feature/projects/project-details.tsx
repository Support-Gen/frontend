import { Box, Button, Grid, Group, Paper, SimpleGrid, Title, Text, createStyles, Badge } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    padding: theme.spacing.xl * 1.5,
  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const ProjectDetailsComponent = () => {
  const { classes } = useStyles();
  
  return (
    <section>
      <Title>Project</Title>
      <Group position={'apart'} mb={"lg"}>
        <Title order={2}>Therapyapp</Title>
        <Box>
          <Button onClick={(() => { testGen(); })} mr={'md'}>Generate docs</Button>
          <Button>Visit Site</Button>
        </Box>
      </Group>
      <Paper p={'sm'} radius={'md'} shadow={'sm'}>
        <Grid>
          <Grid.Col span={6}>

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
              <Text size="md" weight={600}>docs.therapyapp.ch</Text>
              <Text size="md" weight={600}>therapyapp.flowyapps.com</Text>
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
    </section>
  );
}

function testGen(): void {

}

export default ProjectDetailsComponent;