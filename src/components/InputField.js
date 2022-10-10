import { useContext } from 'react';
import { InputContext } from '../App';

export default function InputField() {
  const { inputValue, setInputValue } = useContext(InputContext);
  const handleOnChange = event => {
    setInputValue({ ...inputValue, url: event.target.value });
  };

  return (
    <div>
      <label className="font-semibold text-md">Your URL</label>
      <input
        type="url"
        className="w-full border-2 py-1 px-3 text-gray-700 rounded-sm"
        placeholder="https://example.com"
        value={inputValue.url}
        onChange={handleOnChange}
      />
    </div>
  );
}
