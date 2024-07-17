import React from 'react'
import Header from "@/components/header";
import About from '@/components/about';
import Faq from '@/components/faq';
import Service from '@/components/service';
import Footer from '@/components/footer';

export default function page() {
  return (
    <>
    <Header/>
    <About/>
    <Service/>
    <Faq/>
    <Footer/>
    </>
  )
}
