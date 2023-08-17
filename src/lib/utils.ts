import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dataTransformer<InputType, OutputType>(
  transformerFunction: (arg: InputType) => OutputType
) {
  return function (input: InputType) {
    return transformerFunction(input) satisfies OutputType;
  };
}
