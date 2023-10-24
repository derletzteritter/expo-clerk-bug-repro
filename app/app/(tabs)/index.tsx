import { Feather } from "@expo/vector-icons";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

type ListItem = {
  id: number;
  title: string;
  image: string;
  username: string;
  description: string;
};

const MOCK_DATA: ListItem[] = [
  {
    id: 1,
    username: "Anonym bruker",
    title: "Title 1",
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function HomeScreen() {
  return (
    <View className="flex items-center justify-center">
      <FlatList
        data={MOCK_DATA}
        renderItem={({ item }) => <RenderItem item={item} key={item.id} />}
      />
    </View>
  );
}

const RenderItem = ({ item }: { item: ListItem }) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <View className="mb-4 bg-white">
      <View className="flex-row items-center justify-between px-4 py-2">
        <View className="flex-row items-center justify-start space-x-2">
          <Text className="font-medium">{item.username}</Text>
          <Text className="font-medium">·</Text>
          <Pressable>
            <Text className="text-green-500 font-medium">Doner</Text>
          </Pressable>
        </View>
        <Feather name="more-horizontal" size={24} />
      </View>
      <Image source={{ uri: item.image }} height={500} width={screenWidth} />

      <View className="py-4 space-y-4 px-4">
        <View>
          <Text className="text-xs font-medium">{item.username}</Text>
          <Text className="text-xs">{item.description}</Text>
        </View>
      </View>
    </View>
  );
};
