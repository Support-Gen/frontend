import {
  Header,
  UnstyledButton,
  Group,
  Button,
  createStyles,
} from "@mantine/core";
import Link from "next/link";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { MdArrowBack, MdOutlineSettings } from "react-icons/md";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    headerRow: {
      height: "100%",
    },
  };
});

export const ProjectDefaultHeader = () => {
  const { classes } = useStyles();

  return (
    <Header height={60} py="xs" px={"lg"}>
      <Group align={"center"} position={"apart"} style={{ height: "100%" }}>
        <Link href="/" passHref={true}>
          <UnstyledButton>
            <Group>
              <MdArrowBack size={18} />
              Projects
            </Group>
          </UnstyledButton>
        </Link>
        <Group align={"center"} className={classes.headerRow}>
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
