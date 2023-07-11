import { useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clearValue = () => {
    setValue('');
  };

  return { value, onChange, clearValue };
};
