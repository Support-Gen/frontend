import { Button, Title } from "@mantine/core";

const ProjectComponent = () => {
  return (
    <section>
      <Title>Project</Title>
      <Button onClick={(() => { testGen(); })}>Generate docs</Button>
    </section>
  );
}

function testGen(): void {

}

export default ProjectComponent;