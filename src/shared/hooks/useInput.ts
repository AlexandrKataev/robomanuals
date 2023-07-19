import { useState } from 'react';

export const useInput = (defaultValue?: string) => {
  const [value, setValue] = useState(defaultValue || '');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clearValue = () => {
    setValue('');
  };

  return { value, onChange, clearValue };
};
