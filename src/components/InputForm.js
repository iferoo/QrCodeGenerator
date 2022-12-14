import { useContext } from 'react';
import { InputContext } from '../App';
import InputColor from './InputColor';
import InputField from './InputField';

export default function InputForm() {
  const { getQrCode } = useContext(InputContext);
  const handleSubmit = () => getQrCode();
  return (
    <div className="col-span-2 p-6 grid pag-4">
      <InputField />
      <InputColor />
      <button
        onClick={handleSubmit}
        className="bg-blue-400 max-w-xs ml-auto px-4 py-2 text-white 
        rounded-sm mt-4 hover:bg-blue-500 disabled:bg-gray-300"
      >
        Generate QrCode
      </button>
    </div>
  );
}
