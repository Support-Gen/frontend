import {
  Box,
  createStyles,
  Title,
} from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    label: {
      fontSize: 46, 
      fontWeight: 800
    }
  };
});

const ProjectSettingsComponent = () => {
  return (
    <Box>
      <Title>Settings</Title>
    </Box>
  );
};

export default ProjectSettingsComponent;