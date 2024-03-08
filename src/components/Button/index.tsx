import { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-gradient-to-r from-purple via-indigo to-teal h-10 rounded-full p-4 flex items-center hover:opacity-75"
    >
      {text}
    </button>
  );
};
