import { Item } from "./item";
import { useEffect } from "react";
import useCategoriesStore from "@/stores/useCategoriesStore";
import useItemImagesStore from "@/stores/useItemImagesStore";
import useItemStore from "@/stores/useItemStore";
import useSubCategoryStore from "@/stores/useSubCategoryStore";

export default function ItemList() {
  const { items, fetchItems } = useItemStore();
  const { categories, fetchCategories } = useCategoriesStore();
  const { itemImages, fetchItemImages } = useItemImagesStore();
  const { subCategories, fetchSubCategories } = useSubCategoryStore();

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchItems();
        await fetchCategories();
        await fetchItemImages();
        await fetchSubCategories();
      } catch (error) {
        console.error("ошибка при загрузке", error);
      }
    };

    loadData();
  }, [fetchItems, fetchCategories, fetchItemImages, fetchSubCategories]);

  return (
    <div className="flex gap-2 justify-start flex-wrap px-5 mt-3">
      {items.map((item) => {
        const itemCategory = categories.find(
          (category) => category.id === item.category_id
        );

        const itemSubCategory = subCategories.find(
          (subCategory) => subCategory.id === item.subcategory_id
        );

        const images = itemImages.filter((image) => image.items_id === item.id);

        const firstImage = images.length > 0 ? images[0].image_url : "";

        if (!itemCategory || !itemImages) return;

        return (
          <Item
            key={item.id}
            item={item}
            itemCategory={itemCategory}
            itemImages={firstImage}
            itemSubCategory={itemSubCategory}
          />
        );
      })}
    </div>
  );
}
