import { Ionicons } from "@expo/vector-icons";
import type { ImageSourcePropType } from "react-native";

type IoniconName = ComponentProps<typeof Ionicons>["name"];

declare global {
  interface TabIconProps {
    focused: boolean;
    icon: ImageSourcePropType;
    iconName: IoniconName;
  }
}

export {};
