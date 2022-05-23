import StyledText from '../StyledText/StyledText';
import { ReactNode } from 'react';
import { PageWrapper, PageHeader } from './Page.styles';

interface IPageProps {
  header: string;
  children: ReactNode;
}

const Page = ({ header, children }: IPageProps) => {
  return (
    <PageWrapper>
      <PageHeader>
        <StyledText>{header}</StyledText>
      </PageHeader>
      <div>{children}</div>
    </PageWrapper>
  );
};
export default Page;
