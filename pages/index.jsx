import Head from "next/head";
import LandingSection from "Components/Containers/SectionsHome/LandingSection";

import StoryblokClient from "storyblok-js-client";

import DemoPreviewSection from "Components/Containers/SectionsHome/DemoPreviewSection";


const Home = (props) => {

  return (
    <div className='pb-10 font-sans '>
      <Head>
        <title>Magic Mush</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='min-h-screen w-full text-on-surface'>
        <LandingSection story={props.story.LandingSection} ></LandingSection>
        <DemoPreviewSection story={props.story.DemosPreviewSection} > </DemoPreviewSection>
      </main>

      <footer className=''></footer>
    </div>
  );
}

export default Home
  
export async function getStaticProps(){

    const StoryBlok = new StoryblokClient({})

    const datalanding = await StoryBlok.get( process.env.BASE_URL + 'landing' + process.env.API_CONFIG )

    const datademos = {}
    datademos.demo1 = await StoryBlok.get( process.env.BASE_URL + 'demospreviewsection/demo1' + process.env.API_CONFIG )
    datademos.demo2 = await StoryBlok.get( process.env.BASE_URL + 'demospreviewsection/demo2' + process.env.API_CONFIG )
    
    const props = {
      story: {
        LandingSection: {
          name: 'Landing',
          content: datalanding.data.story.content
        },
        DemosPreviewSection: {
          Demo1: {
            name: datademos.demo1.data.story.content.Name,
            img: datademos.demo1.data.story.content.Img.filename
          },
          Demo2: {
            name: datademos.demo2.data.story.content.Name,
            img: datademos.demo2.data.story.content.Img.filename
          }
        }
      }
    }
  return{
    props
  }
}

