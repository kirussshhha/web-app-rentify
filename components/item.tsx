import { Database } from "@/stores/types/supabase";
import { Card, CardHeader, Chip } from "@nextui-org/react";
import Image from "next/image";

type Item = Database["public"]["Tables"]["items"]["Row"];
type Categories = Database["public"]["Tables"]["categories"]["Row"];
type SubCategories = Database["public"]["Tables"]["subcategories"]["Row"];

type ItemProps = {
  item: Item;
  itemCategory: Categories;
  itemSubCategory?: SubCategories;
  itemImages: string | null;
};

export const Item: React.FC<ItemProps> = ({
  item,
  itemCategory,
  itemSubCategory,
  itemImages,
}) => {
  const isAvailability = item.availability;

  const formatDate = (date: Date, options = {}) =>
    date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
      ...options,
    });

  const capitalizeFirstLetter = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <Card shadow="none" className="w-60 h-96">
        <CardHeader
          className="p-0 relative"
          style={{ width: 240, height: 240 }}
        >
          {itemImages ? (
            <Image
              alt="Item image"
              src={itemImages}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No image</span>
            </div>
          )}
        </CardHeader>
        <div className="pt-2 pl-1">
          <div className="flex justify-between">
            <p className="font-bold text-lg text-gray-700">
              {item.price_per_day} p.
            </p>
            <Chip
              variant="flat"
              color={isAvailability ? "success" : "danger"}
              className="text-sm mr-1"
            >
              {isAvailability ? "Доступен" : "Не доступен"}
            </Chip>
          </div>
          <p className="font-bold text-sm text-gray-700">{item.name}</p>
          <p className="text-sm text-gray-500">
            {capitalizeFirstLetter(itemCategory.name || "")},{" "}
            {itemSubCategory?.sub_name}
          </p>
          <p className="text-sm text-gray-500">
            {item.created_at
              ? formatDate(new Date(item.created_at))
              : "Дата не указана"}
          </p>
        </div>
      </Card>
    </div>
  );
};
