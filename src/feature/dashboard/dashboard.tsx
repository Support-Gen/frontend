import {
  Badge,
  Card,
  Grid,
  Group,
  Title,
  Text,
  useMantineTheme,
  Button,
  TextInput,
  UnstyledButton,
  Box,
  Modal,
} from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineAdd } from "react-icons/md";
import AddProject from "../projects/add-project";

const DashboardComponent = () => {
  const [opened, setOpened] = useState(false);

  return (
      <section flowy-module="overview">
        <Group mb={"lg"}>
          <Title>Overview</Title>
        </Group>
      </section>
  );
};

export default DashboardComponent;
