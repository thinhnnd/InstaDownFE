import React from "react";
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import MainFooter from "components/Footers/MainFooter.js";
import LandingPageHeader from 'components/Headers/LandingPageHeader';

function SingleImagePage () {
   
    return (
        <div style={ { backgroundColor: '#fefefe' }}>
            <IndexNavbar />
           
            <h3>Hello</h3>
            <MainFooter />
        </div>
      );
}
 
export default SingleImagePage;