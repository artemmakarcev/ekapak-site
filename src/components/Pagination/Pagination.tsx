import type { IMeta } from "../../interfaces/Products.interface";
import { useAppDispatch } from "../../redux/hooks";
import { decrementPage, incrementPage, setPage } from "../../redux/productSlice";

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
        className="h-[60px] w-[60px] cursor-pointer rounded-md border-1 border-gray-300 text-sm hover:bg-gray-200"
      >
        {"<"}
      </button>
      {Array.from({ length: data.lastPage }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => dispatch(setPage(index + 1))}
          className={`h-[60px] w-[60px] cursor-pointer rounded-md border-1 border-gray-300 text-sm ${
            currentPage === index + 1 ? "bg-sky-600 text-white" : "bg-white border-1 border-gray-300 hover:bg-neutral-100"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        key={"next"}
        onClick={() => dispatch(incrementPage())}
        disabled={currentPage === data.lastPage}
        className="h-[60px] w-[60px] cursor-pointer rounded-md border-1 border-gray-300 text-sm hover:bg-gray-200"
      >
        {">"}
      </button>
    </div>
  );
};
/* 
h-[30px] w-[30px] cursor-pointer rounded-md bg-gray-100 text-lg hover:bg-gray-200
bg-sky-500 hover:bg-sky-600
<div className="px-5 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-Синий inline-flex flex-col justify-start items-start gap-2.5">
  <div className="self-stretch inline-flex justify-start items-center gap-2.5">
    <div className="justify-center text-Синий text-lg font-bold font-['Manrope'] leading-relaxed">Перезвоните мне</div>
  </div>
</div>
*/
{
  /* <div className="px-5 py-3.5 bg-Синий rounded-[10px] inline-flex justify-center items-center gap-2.5">
  <div className="justify-center text-Белый text-lg font-bold font-['Manrope'] leading-relaxed">Заказать образец</div>
</div> */
}
