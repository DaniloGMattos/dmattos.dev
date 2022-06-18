/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import {
  About,
  AboutContent,
  AboutImage,
  Banner,
  CardContainer,
  Footer,
  Hero,
  HeroContent,
  HeroImage,
  Projects,
  Wrapper,
} from './home.styled';
import { VerticalProjectCard } from '../components/VerticalProjectCard';
import { ContactMeForm } from '../components/ContactMeForm';
import { ProjectInformation } from '../components/ProjectInformation';

const Home: NextPage = () => {
  const project = {
    image: '/projects/simple-juris.png',
  };
  return (
    <>
      <Head>
        <title>Home | Danilo Mattos .Dev</title>
      </Head>
      <Banner>
        <h1>
          {' '}
          <span>Designing</span> and <span>developing</span> scalable software
        </h1>
      </Banner>
      <Wrapper>
        <Hero>
          <HeroContent>
            <h6>Hi there, I'am </h6>
            <h1>Danilo Mattos</h1>
            <h3> Full Stack Developer</h3>
            <p>
              I’ am a fullstack developer for over 4 years of experience is
              focused on clean code and building solutions to scale. Some times
              I also play with UX/UI design
            </p>
          </HeroContent>
          <HeroImage
            width='400px'
            height='400px'
            src='/images/hero.svg'
          ></HeroImage>
        </Hero>
        <About>
          <AboutImage
            width='400px'
            height='400px'
            src='/images/about.svg'
          ></AboutImage>
          <AboutContent>
            <h3>About me</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet magna consequat, facilisis dolor eget, suscipit{' '}
            </p>
          </AboutContent>
        </About>
        <Projects>
          <h3>Projects</h3>
          <ProjectInformation />
          <CardContainer>
            <VerticalProjectCard image={project.image} />
          </CardContainer>
        </Projects>
      </Wrapper>
      <Footer>
        <h3>Contact</h3>

        <div className='footer-content'>
          <div className='footer-decoration'>
            <div className='icon'></div>
            <small>&copy; Copyright 2022, DMattos.dev</small>
          </div>
          <div className='form-container'>
            <ContactMeForm />
            <button type='submit'>Send</button>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Home;
