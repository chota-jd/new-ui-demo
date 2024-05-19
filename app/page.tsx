import React from 'react';

import Header from "../components/header";
import Footer from "../components/footer";
import About from '../components/about';
import Faq from '../components/faq';
import Service from '../components/service';
import Contact from '../components/contact';
import FireBaseCrud from '@/components/FireBaseCrud/FireBaseCrud';

export default function Home() {
  return (

   <>
    {/* <Header/> */}

    <FireBaseCrud/>

    {/* <About/>
    <Service/>
    <Faq/> */}
    {/* <Contact/> */}
    {/* <Footer/> */}
    </>

  );
}
