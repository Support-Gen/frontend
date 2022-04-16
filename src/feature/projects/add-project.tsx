import { Button, Group, Modal, Stepper, TextInput, Title } from "@mantine/core"
import { useState } from "react";

const AddProject = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  
  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="General" description="Internal information">
          <TextInput label="Project name" type={'text'} placeholder="Your internal project name..."></TextInput>
        </Stepper.Step>
        <Stepper.Step label="Application" description="Application and site">
          <TextInput mb={'sm'} label="App login URL" type={'url'} placeholder="https://your-awesome-app.com/login"></TextInput>
          <TextInput mb={'sm'} label="Username" type={'text'} placeholder="Demo"></TextInput>
          <TextInput mb={'sm'} label="Password" type={'password'} placeholder="Secret"></TextInput>
        </Stepper.Step>
      </Stepper>
      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  )
}

export default AddProject;