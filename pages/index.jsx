import Head from "next/head";
import LandingSection from "Components/Containers/SectionsHome/LandingSection";
import DemoPreviewSection from "Components/Containers/SectionsHome/DemoPreviewSection";
import getDataFromStory from "misc/getDataFromStory";

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
        <DemoPreviewSection> </DemoPreviewSection>
      </main>

      <footer className=''></footer>
    </div>
  );
}

export default Home
  
export async function getStaticProps(){

    const dataLanding = await getDataFromStory('landing')

    const story = await fetch('https://api.storyblok.com/v2/cdn/stories/home/?version=draft&token=FGf07FidAUQaK4gWRQoCrgtt&cv=1628740006')
    const data  = await story.json()
    console.log(data)

    const props = {
      story: {
        LandingSection: {
          name: 'Landing',
          content: dataLanding 
        }
      }
    }
  return{
    props
  }
}

/*
    https://api.storyblok.com/v2/cdn/stories/home/landing?version=draft&token=FGf07FidAUQaK4gWRQoCrgtt&
   'https://api.storyblok.com/v2/cdn/stories/home/demopreviewsection/demo1/' + process.env.API_CONFIG
*/