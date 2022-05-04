import { Button, Group, Modal, Paper, Stepper, TextInput, Text, Title, Anchor, Box, Grid } from "@mantine/core"
import { useState } from "react";
import { MdGridOn } from "react-icons/md";

const AddProject = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  
  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Tier" description="Choose the project tier">
          <Grid>
            <Grid.Col span={6}>
              <Paper flowy-feature={"addProject-2"} flowy-type="form" withBorder={true} radius={'md'} mb={'md'} p="md">
                <Title order={5}>Growth</Title>
                <Title order={2}>$49/mo</Title>
                <Text>This tier is designed for startups. Please follow the <a>fair-use policy</a>.</Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={6}>
              <Paper flowy-feature={"addProject-2"} flowy-type="form" withBorder={true} radius={'md'} mb={'md'} p="md">
                <Title order={5}>Professional</Title>
                <Title order={2}>$99/mo</Title>
                <Text>This tier is designed for enterprises. Please follow the <a>fair-use policy</a>.</Text>
              </Paper>
            </Grid.Col>
          </Grid>
          <Paper flowy-feature={"addProject-2"} flowy-type="form" withBorder={true} radius={'md'} mb={'md'} p="md">
            <Title order={5}>Hobby</Title>
            <Title order={2}>$4.99/mo</Title>
            <Text>This tier is designed for hobbyists. Please follow the <a>fair-use policy</a>.</Text>
          </Paper>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep} flowy-feature={"addProject-3"}>Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step label="General" description="Internal information">
          <form flowy-feature={"addProject-4"} flowy-type="form">
            <TextInput label="Project name" type={'text'} placeholder="Your internal project name..."></TextInput>
          </form>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep} flowy-feature={"addProject-5"}>Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step label="Application" description="Application and site">
          <form flowy-feature={"addProject-6"} flowy-type="form">
            <TextInput mb={'sm'} label="App login URL" type={'url'} placeholder="https://your-awesome-app.com/login"></TextInput>
            <TextInput mb={'sm'} label="Username" type={'text'} placeholder="Demo"></TextInput>
            <TextInput mb={'sm'} label="Password" type={'password'} placeholder="Secret"></TextInput>
          </form>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep} flowy-feature={"addProject-7"}>Next step</Button>
          </Group>
        </Stepper.Step>
      </Stepper>
    </>
  )
}

export default AddProject;