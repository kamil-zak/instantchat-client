import { useCallback, useEffect, useState } from 'react';
import ChatBoxPresenter from '../../presenters/ChatBoxPresenter/ChatBoxPresenter';
import MessagesPresenter from '../../presenters/MessagesPresenter/MessagesPresenter';
import { ChatBoxEditorForm, ChatBoxEditorWrapper, ChatBoxPreview } from './ChatBoxEditor.styles';
import ChatButton from '../../components/ChatButton/ChatButton';
import { useForm, FormProvider } from 'react-hook-form';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import { isValidHex } from '../../utils/format';
import Button from '../../components/Button/Button';
import FormField from '../../components/FormField/FormField';
import { chatBoxFormResolver, IChatBoxFormFields } from '../../utils/validations';
import { exampleMessages } from '../../utils/exampleData';
import ColorsProvider from '../../providers/ColorsProvider';
import LayoutItem from '../../components/LayoutItem/LayoutItem';

interface IChatBoxEditorProps {
  onSubmit: (data: IChatBoxFormFields) => void;
  values?: IChatBoxFormFields;
}

const ChatBoxEditor = ({ onSubmit, values }: IChatBoxEditorProps) => {
  const methods = useForm<IChatBoxFormFields>({
    resolver: chatBoxFormResolver,
    mode: 'onBlur',
    defaultValues: values,
  });
  const { handleSubmit, watch, setValue, clearErrors } = methods;
  const [displayColor, setDisplayColor] = useState('#445dc0');
  const title = watch('title');
  const subtitle = watch('subtitle');
  const color = watch('color');

  useEffect(() => {
    if (!isValidHex(color)) return;
    setDisplayColor(color);
    clearErrors('color');
  }, [color, clearErrors]);

  const setColor = useCallback((color: string) => setValue('color', color), [setValue]);

  return (
    <ChatBoxEditorWrapper>
      <FormProvider {...methods}>
        <ChatBoxEditorForm onSubmit={handleSubmit(onSubmit)}>
          <FormField name="name" max={20} placeholder="example.com" label="Name" />
          <FormField name="title" max={20} placeholder="Contact us" label="Title" />
          <FormField name="subtitle" max={30} label="Subtitle" />
          <FormField name="color" max={7} label="Color HEX:" />
          <LayoutItem align="center">
            <ColorPicker color={displayColor} onChange={setColor} />
          </LayoutItem>
          <Button type="submit">Save</Button>
        </ChatBoxEditorForm>
      </FormProvider>
      <ChatBoxPreview>
        <ColorsProvider primary={displayColor}>
          <ChatBoxPresenter title={title} subtitle={subtitle}>
            <MessagesPresenter messages={exampleMessages} onSend={() => {}} isChatBox />
          </ChatBoxPresenter>
          <ChatButton />
        </ColorsProvider>
      </ChatBoxPreview>
    </ChatBoxEditorWrapper>
  );
};

export default ChatBoxEditor;
