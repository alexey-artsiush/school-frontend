import { ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode
}

export const Button = ((props: IButtonProps) => {
  const { children } = props;
  return (
    <button type="button">
      {children}
    </button>
  );
});
