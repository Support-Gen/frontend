import {
  Box,
  Button,
  Collapse,
  Group,
  Paper,
  SimpleGrid,
  Title,
  Text,
  createStyles,
  Badge,
  Tabs,
  UnstyledButton,
  Anchor,
  Input,
  useMantineTheme,
  Container,
  Header,
  Burger,
  Navbar,
  AppShell,
  Avatar,
  ActionIcon,
} from "@mantine/core";
import Link from "next/link";
import { MdArrowBack, MdAdd, MdOutlineTextFields, MdInfoOutline } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { FiBox } from "react-icons/fi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useListState } from "@mantine/hooks";
import { useState } from "react";

const useStyles = createStyles((theme, _params, getRef) => {
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
  };
});

const EditProjectComponent = () => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

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
      header={
        <Header height={60} py="xs" px={"lg"}>
          <Group
            align={"center"}
            position={"apart"}
            className={classes.headerRow}
          >
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
                  <Group direction={'column'} spacing={0} align={'center'}>
                    <MdOutlineTextFields size={20}></MdOutlineTextFields>
                    <Text size={'xs'}>Text</Text>
                  </Group>
                </UnstyledButton>
                <UnstyledButton>
                  <Group direction={'column'} spacing={0} align={'center'}>
                    <MdInfoOutline size={20}></MdInfoOutline>
                    <Text size={'xs'}>Info</Text>
                  </Group>
                </UnstyledButton>
                <UnstyledButton>
                  <Group direction={'column'} spacing={0} align={'center'}>
                    <AiOutlineAppstore size={20} color={'gray'}></AiOutlineAppstore>
                    <Text size={'xs'} color={'gray'}>App</Text>
                  </Group>
                </UnstyledButton>
              </Group>
            </Box>
            <Box>
              <Group>
                <Button leftIcon={<HiOutlineGlobeAlt></HiOutlineGlobeAlt>}>
                  Publish
                </Button>
              </Group>
            </Box>
          </Group>
        </Header>
      }
      navbar={
        <Navbar width={{ xs: 250, sm: 300 }} p="md">
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
        <Title className={classes.label}>Search patients</Title>
      </Container>
    </AppShell>
  );
};

export default EditProjectComponent;

const DragDropZone = ({ data, isSpace }: { data: any[]; isSpace: boolean }) => {
  const { classes, cx } = useStyles();
  const [state, handlers] = useListState(data);
  const [opened, setOpen] = useState(false);


  const items = state.map((item: any, index: any) => (
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
          onClick={() => setOpen((o) => !o)}
          ml={!isSpace ? 26 : 0}
          mb={"sm"}
        >
          <Box {...provided.dragHandleProps} mb={isSpace ? "sm" : 0}>
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
                <Text weight={isSpace ? 600 : 400}>{item.name}</Text>
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
                  { name: "Search patients" },
                  { name: "Add patient" },
                  { name: "Remove patient" },
                ]}
                isSpace={false}
              ></DragDropZone>
            </Collapse>
          ) : null}
        </Box>
      )}
    </Draggable>
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
