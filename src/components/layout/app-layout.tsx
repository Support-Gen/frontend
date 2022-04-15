import {
  AppShell,
  Avatar,
  Burger,
  Container,
  createStyles,
  Group,
  Header,
  MediaQuery,
  Navbar,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.md,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      marginBottom: theme.spacing.xs,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.1)
            : theme.fn.rgba(theme.colors[theme.primaryColor][0], 0.45),
        color:
          theme.colorScheme === "dark"
            ? theme.white
            : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 5 : 7
            ],
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.md,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.15)
            : theme.fn.rgba(theme.colors[theme.primaryColor][0], 0.85),
        color:
          theme.colorScheme === "dark"
            ? theme.white
            : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 5 : 7
            ],
        },
      },
    },
  };
});

const data = [
  { link: "/", label: "Overview", icon: MdOutlineDashboard },
];

const AppLayout = ({ children }: any) => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const currentFeatureLabel =
    data.find((navItem) =>
      navItem.link != "/" ? router.asPath.includes(navItem.link) : false
    )?.label ?? "Overview";
  const [active, setActive] = useState(currentFeatureLabel);
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
    >
      <item.icon size={19} className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          width={{ sm: 300 }}
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
        >
          <Navbar.Section grow>
            <Group className={classes.header} position="apart">
              tbdname
            </Group>
            {links}
          </Navbar.Section>

          <Navbar.Section className={classes.footer}>
            <a
              href="#"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Group>
                <Avatar color={"blue"}>MH</Avatar>
                <span>Maxim Hüsler</span>
              </Group>
            </a>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Header height={matches ? 54 : 0} p="md">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </div>
          </Header>
        </MediaQuery>
      }
    >
      <Container size={'xl'} pt={'lg'}>
        {children}
      </Container>
    </AppShell>
  );
};

export default AppLayout;
