import TabLayout from "@/app/(tabs)/_layout";
import { icons } from "./icon";

export const tabs = [
  { name: "index", title: "Home", icon: icons.home, iconName: "home" },
  { name: "milestone", title: "Milestone", icon: icons.calendar, iconName: "calendar" },
  { name: "tasks", title: "Tasks", icon: icons.tasks, iconName: "list" },
  { name: "profile", title: "Profile", icon: icons.profile, iconName: "person" },
];

export default TabLayout;
