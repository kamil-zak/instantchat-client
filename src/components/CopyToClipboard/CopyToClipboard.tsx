import { useRef } from 'react';
import { toast } from 'react-toastify';
import Button from '../Button/Button';
import { ClipboardArea, ClipboardWrapper } from './CopyToClipboard.styles';

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success('Text was copied succesfully');
  } catch {
    toast.error(`Error copying text to clipboard:`);
  }
};

interface ICopyToClipboardProps {
  text: string;
}

const CopyToClipboard = ({ text }: ICopyToClipboardProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  return (
    <ClipboardWrapper>
      <ClipboardArea ref={ref} onClick={() => ref.current?.select()} defaultValue={text} readOnly />
      <Button onClick={() => copyToClipboard(text)} bordered>
        Copy
      </Button>
    </ClipboardWrapper>
  );
};

export default CopyToClipboard;
