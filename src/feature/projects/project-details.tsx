import { Box, Button, Grid, Group, Paper, SimpleGrid, Title, Text, createStyles, Badge, Tabs, UnstyledButton, Anchor } from "@mantine/core";
import Link from "next/link";
import { MdArrowBack, MdOutlineRepeat } from "react-icons/md";
import { IoMdPaperPlane } from "react-icons/io";

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
      <Link href="/" passHref={true}>
        <UnstyledButton>
          <Group>
            <MdArrowBack size={18} />           
            Projects
          </Group>
        </UnstyledButton>
      </Link>
      <Title mb={'sm'}>TherapyApp</Title>
      <Tabs color={'blue'}>
        <Tabs.Tab label="Overview">
          <Group position={'apart'} mt={'sm'} mb={"xl"}>
            <Title order={2}>Documentation</Title>
            <Box>
              <Button onClick={(() => { testGen(); })} mr={'md'} leftIcon={<MdOutlineRepeat size={18} />}>Generate docs</Button>
              <Button leftIcon={<IoMdPaperPlane size={18} />}>Visit Docs</Button>
            </Box>
          </Group>
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
        </Tabs.Tab>
        <Tabs.Tab label="Settings"></Tabs.Tab>
      </Tabs>
    </section>
  );
}

function testGen(): void {

}

export default ProjectDetailsComponent;