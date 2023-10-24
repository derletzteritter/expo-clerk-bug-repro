import { useSearchParams } from "expo-router";
import { Text, View } from "../../components/Themed";

type ListItem = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const MOCK_DATA: ListItem[] = [
  {
    id: 1,
    title: "Title 1",
    image: "https://picsum.photos/200/300",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Title 2",
    image: "https://picsum.photos/200/300",
    description: "Description 2",
  },
];

type PostScreenParams = {
  slug: string;
};

export default function PostScreen() {
  const params = useSearchParams<PostScreenParams>();

  const post = MOCK_DATA.find((post) => post.id === Number(params.slug));

  return (
    <View className="flex items-center justify-center">
      <Text>Post Screen</Text>

      <Text>{post?.title}</Text>
      <Text>{post?.description}</Text>
    </View>
  );
}
