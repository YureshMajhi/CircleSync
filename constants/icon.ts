import calendar from "@/assets/images/calendar.png";
import home from "@/assets/images/home.png";
import profile from "@/assets/images/person.png";
import tasks from "@/assets/images/tasks.png";

export const icons = {
  profile,
  calendar,
  tasks,
  home,
};

export type IconKey = keyof typeof icons;
