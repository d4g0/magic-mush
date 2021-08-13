import Head from "next/head";
import LandingSection from "Components/Containers/SectionsHome/LandingSection";
import DemoPreviewSection from "Components/Containers/SectionsHome/DemoPreviewSection";
import ServiceSection from "Components/Containers/SectionsHome/ServicesSection";
import StoryblokClient from "storyblok-js-client";




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
        <ServiceSection story={props.story.ServicesSection} ></ServiceSection>
      </main>

      <footer className=''></footer>
    </div>
  );
};

export default Home;
  
export async function getStaticProps(){

    const StoryBlok = new StoryblokClient({});

    const datalanding = await StoryBlok.get( process.env.BASE_URL + 'landing' + process.env.API_CONFIG );

    const datademos = {}; //crear función get all stories from folder
    datademos.demo1 = await StoryBlok.get( process.env.BASE_URL + 'demospreviewsection/demo1' + process.env.API_CONFIG );
    datademos.demo2 = await StoryBlok.get( process.env.BASE_URL + 'demospreviewsection/demo2' + process.env.API_CONFIG );

    const dataServices = {}; //crear función get all stories from folder
    dataServices.service1 = await StoryBlok.get(process.env.BASE_URL + 'servicessection/design' + process.env.API_CONFIG);
    dataServices.service2 = await StoryBlok.get(process.env.BASE_URL + 'servicessection/development' + process.env.API_CONFIG);
    dataServices.service3 = await StoryBlok.get(process.env.BASE_URL + 'servicessection/support-updates' + process.env.API_CONFIG)
    
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
        },
        ServicesSection: {
          service1:{
            ...dataServices.service1.data.story.content
          },
          service2:{
            ...dataServices.service2.data.story.content
          },
          service3:{
            ...dataServices.service3.data.story.content
          }
        }
      }
    };
  return{
    props
  };
};

