import {
  Header,
  Group,
  createStyles,
  UnstyledButton,
  Box,
  Text,
  Button,
  ActionIcon,
} from "@mantine/core";
import Link from "next/link";
import {
  MdArrowBack,
  MdOutlineTextFields,
  MdInfoOutline,
  MdOutlineSettings,
} from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    headerRow: {
      height: "100%",
    },
  };
});

const ProjectHeader = () => {
  const { classes } = useStyles();

  return (
    <Header height={60} py="xs" px={"lg"}>
      <Group align={"center"} position={"apart"} className={classes.headerRow}>
        <Link href="/" passHref={true}>
          <UnstyledButton>
            <Group>
              <MdArrowBack size={18} />
              Projects
            </Group>
          </UnstyledButton>
        </Link>
        <Box>
          <Group grow>
            <UnstyledButton>
              <Group direction={"column"} spacing={0} align={"center"}>
                <MdOutlineTextFields size={20}></MdOutlineTextFields>
                <Text size={"xs"}>Text</Text>
              </Group>
            </UnstyledButton>
            <UnstyledButton>
              <Group direction={"column"} spacing={0} align={"center"}>
                <MdInfoOutline size={20}></MdInfoOutline>
                <Text size={"xs"}>Info</Text>
              </Group>
            </UnstyledButton>
            <UnstyledButton>
              <Group direction={"column"} spacing={0} align={"center"}>
                <AiOutlineAppstore size={20} color={"gray"}></AiOutlineAppstore>
                <Text size={"xs"} color={"gray"}>
                  App
                </Text>
              </Group>
            </UnstyledButton>
          </Group>
        </Box>
        <Group align={'center'} className={classes.headerRow}>
          <Link href="/project/test/settings" passHref={true}>
            <UnstyledButton>
              <MdOutlineSettings size={22}></MdOutlineSettings>
            </UnstyledButton>
          </Link>
          <Button leftIcon={<HiOutlineGlobeAlt></HiOutlineGlobeAlt>}>
            Publish
          </Button>
        </Group>
      </Group>
    </Header>
  );
};

export default ProjectHeader;
