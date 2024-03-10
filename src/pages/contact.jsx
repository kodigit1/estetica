import React from "react";
import SEO from "../common/seo";
import Contact from "../components/contact";
import Wrapper from "../layout/wrapper";
import {
 ContattiCreateForm 
} from './ui-components';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <Contact />
    </Wrapper>
  );
};

export default index;
