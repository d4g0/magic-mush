import Head from "next/head";
import LandingSection from "Components/Containers/LandingSection";

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
      </main>

      <footer className=''></footer>
    </div>
  );
}

export default Home
  
export async function getStaticProps(){
    const story = await fetch('https://api.storyblok.com/v2/cdn/stories/home/landing?version=draft&token=FGf07FidAUQaK4gWRQoCrgtt&')
    const data = await story.json()
  return{
    props: {
      story: {
        LandingSection: {
          name: 'Landing',
          content: data.story.content
        }
      }
    }
  }
}
