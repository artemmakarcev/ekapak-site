import { useState } from "react";
import type { ICategory } from "../../interfaces/Categories.interface";

interface CategoryItemProps {
  category: ICategory;
  level?: number;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasChildren = category.children && category.children.length > 0;

  return (
    <div className={`self-stretch flex flex-col justify-start items-start gap-2.5 pl-${level * 2}`}>
      <div className="self-stretch inline-flex justify-between items-center">
        <div className="justify-center text-black text-base font-normal font-['Manrope'] leading-snug">{category.name}</div>
        {hasChildren && (
          <div className="w-7 h-7 relative overflow-hidden">
            <button onClick={() => setIsExpanded(!isExpanded)} disabled={!hasChildren} className="toggle-button border-black">
              {isExpanded ? "<" : ">"}
            </button>
          </div>
        )}
      </div>
      {isExpanded && (
        <div>{hasChildren && category.children?.map((child) => <CategoryItem key={child.id} category={child} level={level + 1} />)}</div>
      )}
    </div>
  );
};
