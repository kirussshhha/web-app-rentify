import useUserStore from "@/stores/userStore";
import { Item } from "./item";

export default function ItemList() {
  const { items } = useUserStore();
  return (
    <div className="flex gap-2 justify-start flex-wrap px-5 mt-3">
      {items.map((item) => {
       return (
        <Item key={item.id} item={item} />
       );
      })}
    </div>
  );
}
