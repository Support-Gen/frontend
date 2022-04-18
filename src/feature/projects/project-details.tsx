import { Button, Title } from "@mantine/core";

const ProjectDetailsComponent = () => {
  return (
    <section>
      <Title>Project</Title>
      <Button onClick={(() => { testGen(); })}>Generate docs</Button>
    </section>
  );
}

function testGen(): void {

}

export default ProjectDetailsComponent;