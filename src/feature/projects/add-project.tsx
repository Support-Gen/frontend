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
          <form flowy-feature={"addProject-2"} flowy-type="form">
            <TextInput label="Project name" type={'text'} placeholder="Your internal project name..."></TextInput>
          </form>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep} flowy-feature={"addProject-3"}>Next step</Button>
          </Group>
        </Stepper.Step>
        <Stepper.Step label="Application" description="Application and site">
          <form flowy-feature={"addProject-4"} flowy-type="form">
            <TextInput mb={'sm'} label="App login URL" type={'url'} placeholder="https://your-awesome-app.com/login"></TextInput>
            <TextInput mb={'sm'} label="Username" type={'text'} placeholder="Demo"></TextInput>
            <TextInput mb={'sm'} label="Password" type={'password'} placeholder="Secret"></TextInput>
          </form>
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep} flowy-feature={"addProject-5"}>Next step</Button>
          </Group>
        </Stepper.Step>
      </Stepper>
    </>
  )
}

export default AddProject;