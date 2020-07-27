import React from 'react';
import Head from 'next/head';
import Container from '../components/container';
import Link from '../components/link';

import styles from './styles.module.scss';

const About = () => (
  <>
    <Head>
      <title>Aditi Barbhai - About</title>
    </Head>
    <Container className={styles.about}>
      <h1> About Me </h1>
      <p>
        I've been working as a software developer for almost a decade. In that time, I have worked with a variety of different clients
        and technolgoies (<Link type="internal" href="#techStack">see below</Link>). I currently work in the Fintech space, and love creating solutions that help people improve their financial lives.
        I have also previously worked in the healthcare space, which is another passion of mine.
      </p>
      <p>
        As a developer, I have a full stack experience with a front-end focus - my goal is to create awesome user experiences backed by well-written, scalable apps.
        Clean, easy to read code = 🖤.
      </p>
      <p>
        I love collaborating! In my current role, I work closely with designers, product owners and fellow developers.
      </p>
      <p>
        Outside of work, I am an avid reader 📚, enthusiastic crafts person 🧶 , amateaur cook 🌱 and an overall "creator" - I love working with my hands and making things.
      </p>
      <h1 id="techStack"> Tech Stack </h1>
      <p>As a software developer, I work mostly in JavaScript land. These are the frameworks and tools I know and love:</p>
      <div className={styles.iconsList}>
        <img src="/icons/javascript.png" alt="javascript" />
        <img src="/icons/react-colourful.png" alt="react.js" />
        <img src="/icons/react-native.png" alt="react native" />
        <img src="/icons/nodejs.png" alt="node.js" />
        <img src="/icons/redux.png" alt="redux" />
        <img src="/icons/sass.png" alt="sass" />
        <img src="/icons/postgresql.png" alt="postgresql sql" />
      </div>
      <p>
        👩🏾‍💻 &nbsp; As I focus on Front End Development,
        I mostly work with <strong>React.js, Redux and Node.js</strong> to create clean, scalable web applications.
        Recently, I've been spending a lot of time working with <strong>Next.js</strong> which is great for
        <strong> server side rendering</strong> React apps and making them more SEO friendly.
      </p>
      <p>
        For styling, I prefer to use <strong>Sass</strong> where I can, though I have used Less and just pure CSS in past projects.
      </p>
      <p>
       📱 For mobile development, I currently use <strong>React Native</strong>, though I am always looking to learn more frameworks in this space! 🙂
      </p>
      <p>
        I've worked mostly with relational databases using everything from MS SQL Server and Postgres to MySQL.
      </p>
      <div className={styles.smallIconsList}>
        <img src="/icons/npm.png" />
        <img src="/icons/yarn.png" />
        <img src="/icons/git.png" />
        <img src="/icons/octocat.png" />
      </div>
      <p>
        No developer's stack is complete without <strong> npm / yarn and git </strong>.
      </p>
      <p>
        This site is made with ❤, Next.js, React and Sass, and hosted on GitHub Pages.
        {/*  To find out more about how to build a site like this see this blog post */}
        {/*  Or you can hire me to make one for you! */}
      </p>
      <p>
        You can find out more about my <Link type="external" href="https://ca.linkedin.com/in/aditibarbhai">previous work experience here</Link>.
      </p>
    </Container>
  </>
);

export default About;
