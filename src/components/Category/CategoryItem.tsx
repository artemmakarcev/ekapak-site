import { useState } from "react";
import type { ICategory } from "../../interfaces/Categories.interface";
import { NavLink } from "react-router-dom";

import ArrowRightIcon from "../../assets/img/arrowRight.svg?react";

interface CategoryItemProps {
  category: ICategory;
  level?: number;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = category.children && category.children.length > 0;

  return (
    <li
      className="group relative px-[30px]"
      onMouseEnter={() => hasChildren && setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavLink
        to={`/categories/${category.slug}`}
        className="border-bg group-hover:text-primary flex items-center justify-between gap-[10px] border-b py-[10px] text-default text-[16px] transition-colors"
      >
        {category.name}
        {hasChildren && (
          <div className="relative overflow-hidden">
            <button onClick={() => setIsOpen(!isOpen)} disabled={!hasChildren} className="toggle-button border-dark">
              {isOpen ? <ArrowRightIcon className="rotate-90" /> : <ArrowRightIcon />}
            </button>
          </div>
        )}
      </NavLink>

      {isOpen && hasChildren && (
        <div>
          {hasChildren &&
            category.children?.map((child) => <CategoryItem key={child.id} category={child} level={level + 1} />)}
        </div>
      )}
    </li>
  );
};
