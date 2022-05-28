import StyledText from '../StyledText/StyledText';
import { ReactNode } from 'react';
import { PageWrapper, PageHeader, PageContent } from './Page.styles';
import { LoadingBar } from '../LoadingBar/LoadingBar';

interface IPageProps {
  header: string;
  children: ReactNode;
  loading?: boolean;
}

const Page = ({ header, loading, children }: IPageProps) => {
  return (
    <PageWrapper>
      <PageHeader>
        <StyledText>{header}</StyledText>
      </PageHeader>
      <PageContent>{loading ? <LoadingBar /> : children}</PageContent>
    </PageWrapper>
  );
};
export default Page;
