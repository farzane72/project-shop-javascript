import El from "../../utils/El";
import { Link } from "../link/link";

export const Product = ({ id,src, title = "", price = "" }) => {
  return Link({
    to: `/products/singleproduct/${id}`,
    child: El({
      element: "div",
      className: "flex flex-col gap-1 mb-2 ",
      child: [
        El({
          element: "div",
          className: "p-2 bg-gray-100 w-36 h-36 rounded-3xl px-4 py-4",
          child: El({
            element: "img",
            className: "rounded-md w-full",
            src: src,
          }),
        }),
        El({
          element: "p",
          className: "font-bold tracking-tight capitalize",
          child: title,
        }),
        El({
          element: "span",
          className: "font-bold text-sm",
          child: price,
        }),
      ],
    }),
  });
};
