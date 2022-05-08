import {
  Box,
  Collapse,
  Group,
  Text,
  createStyles,
  useMantineTheme,
  Container,
  Navbar,
  AppShell,
  ActionIcon,
} from "@mantine/core";
import Link from "next/link";
import { MdAdd, MdOutlineSettings, MdOutlineDashboard } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useListState } from "@mantine/hooks";
import { useState } from "react";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    label: {
      fontSize: 46, 
      fontWeight: 800
    },
    headerRow: {
      height: "100%",
    },
    item: {
      ...theme.fn.focusStyles(),
      borderRadius: theme.radius.sm,
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,
      marginBottom: theme.spacing.md,
    },
    spaceGroup: {
      ":hover button": {
        display: "block",
      },
    },
    space: {
      width: "100%",
      height: 28,
    },
    "space-actions": {
      display: "none",
    },
    workflow: {
      height: 24,
    },
    dragable: {
      borderRadius: theme.radius.sm,
      ":hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[1],
      },
    },
    itemDragging: {},


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

// const data = [
//   { link: "/project/test", label: "Overview", icon: MdOutlineDashboard },
//   { link: "/project/test/settings", label: "Settings", icon: MdOutlineSettings },
// ];

const ProjectLayout = ({ children, header }: any) => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  // const links = data.map((item) => (
  //   <a
  //     className={cx(classes.link)}
  //     href={item.link}
  //     key={item.label}
  //   >
  //     <item.icon size={19} className={classes.linkIcon} />
  //     <span>{item.label}</span>
  //   </a>
  // ));

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
      header={ header }
      navbar={
        <Navbar width={{ xs: 250, sm: 300 }} p="md">
          {/* <Navbar.Section>
            { links }
          </Navbar.Section> */}
          <Navbar.Section grow>
            <Group position={"apart"} mb={"sm"}>
              <Text size={"sm"} transform={"uppercase"} weight={600}>
                Spaces
              </Text>
              <ActionIcon>
                <MdAdd></MdAdd>
              </ActionIcon>
            </Group>
            <section>
              <DragDropZone
                data={[
                  { name: "Dashboard" },
                  { name: "Patients" },
                  { name: "Appointments" },
                ]}
                isSpace={true}
              ></DragDropZone>
            </section>
          </Navbar.Section>
        </Navbar>
      }
    >
      <Container size={"xl"} pt={"lg"}>
        { children }
      </Container>
    </AppShell>
  );
};

export default ProjectLayout;

const DragDropZone = ({ data, isSpace }: { data: any[]; isSpace: boolean }) => {
  const [state, handlers] = useListState(data);

  const items = state.map((item: any, index: any) => (
    <DragItem item={item} index={index} isSpace={isSpace} key={index}></DragItem>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }) =>
        handlers.reorder({
          from: source.index,
          to: destination != null ? destination.index : source.index,
        })
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const DragItem = ({item, index, isSpace} : {item: any, index: any, isSpace: boolean}) => {
  const { classes, cx } = useStyles();
  const [opened, setOpen] = useState(false);

  return (
    <Draggable key={item.name} index={index} draggableId={item.name}>
      {(provided, snapshot) => (
        <Box
          className={cx(
            classes.item,
            { [classes.itemDragging]: snapshot.isDragging },
            classes.spaceGroup
          )}
          {...provided.draggableProps}
          ref={provided.innerRef}
          ml={!isSpace ? 26 : 0}
          mb={"sm"}
        >
          <Box 
            {...provided.dragHandleProps} mb={isSpace ? "sm" : 0}
            onClick={() => setOpen((o) => !o)}
            >
            <Group
              position={"apart"}
              className={cx(
                isSpace ? classes.space : classes.workflow,
                classes.dragable
              )}
              pl={"sm"}
            >
              <Group spacing={"xs"}>
                {isSpace ? <FiBox></FiBox> : null}
                {!isSpace ? 
                    <Link href={`/project/test/${item.id}`} passHref={true}>
                      <Text weight={isSpace ? 600 : 400}>{item.name}</Text>
                    </Link> 
                  : <Text weight={isSpace ? 600 : 400}>{item.name}</Text>
                }
                
              </Group>
              {isSpace ? (
                <ActionIcon className={classes["space-actions"]}>
                  <MdAdd></MdAdd>
                </ActionIcon>
              ) : null}
            </Group>
          </Box>
          {isSpace ? (
            <Collapse in={opened}>
              <DragDropZone
                data={[
                  { name: "Search patients", id: "abc" },
                  { name: "Add patient", id: "def" },
                  { name: "Remove patient", id: "ghi" },
                ]}
                isSpace={false}
              ></DragDropZone>
            </Collapse>
          ) : null}
        </Box>
      )}
    </Draggable>
  )
}