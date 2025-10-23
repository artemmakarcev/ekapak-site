import type { IMeta } from "../../interfaces/Products.interface";
import { useAppDispatch } from "../../redux/hooks";
import { decrementPage, incrementPage, setPage } from "../../redux/productSlice";

import ArrowRightIcon from "../../assets/img/arrowRight.svg?react";

export interface PaginationProps {
  data: IMeta;
  currentPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({ data, currentPage }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-center">
      <button
        key={"prev"}
        onClick={() => dispatch(decrementPage())}
        disabled={currentPage === 1}
        className="flex h-[60px] w-[60px] items-center justify-center rounded-md border-1 border-gray-border text-sm enabled:cursor-pointer enabled:hover:bg-blue disabled:opacity-50"
      >
        <ArrowRightIcon className="rotate-180 text-dark" />
      </button>
      {Array.from({ length: data.lastPage }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => dispatch(setPage(index + 1))}
          className={`h-[60px] w-[60px] cursor-pointer rounded-md border-1 border-gray-border text-sm text-dark ${
            currentPage === index + 1
              ? "bg-blue-active text-white"
              : "border-1 border-gray-border bg-white hover:bg-blue"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        key={"next"}
        onClick={() => dispatch(incrementPage())}
        disabled={currentPage === data.lastPage}
        className="flex h-[60px] w-[60px] items-center justify-center rounded-md border-1 border-gray-border text-sm enabled:cursor-pointer enabled:hover:bg-blue disabled:opacity-50"
      >
        <ArrowRightIcon className="text-dark" />
      </button>
    </div>
  );
};
