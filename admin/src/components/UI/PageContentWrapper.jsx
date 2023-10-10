import PropTypes from "prop-types";
import { PageWrapper } from "./PageContentWrapperStyled";

const PageContentWrapper = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};

PageContentWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageContentWrapper;
