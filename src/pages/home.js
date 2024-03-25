import React from "react";
import "../pages/home.css";
import monImage from "../assets/images/Charline.png";
import Haku from "../assets/images/Haku.png";
// import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div>
      <section id="Introduction">
        <div className="Intro row">
          <div className="col-md-6">
            <h1>Front-end developer</h1>
            <p>
              Hello I'm Charline,<br></br>an independent web developer based in
              chilly Montreal.<br></br>I specialize in Front-end development and
              WordPress.
            </p>
          </div>
          <div className="col-md-6">
            <img src={monImage} alt="Charline" width="100%" />
          </div>
        </div>
      </section>
      {/* <Fade> */}
      <section id="about-me">
        <div className="about fade-in row align-items-center align-self-end inner">
          <div className="col-md-2">
            <h2>
              a<br></br> little <span className="italic orange">about</span> me{" "}
            </h2>
          </div>
          <div className="col-md-6">
            <div className="about-me">
              <p>
                I've always been interested in programming since the day I
                signed up on Myspace in 2004 or that time I chose a career as a
                programmer in The Sims 3. Being a kid in the 90’s also means I
                was able to witness the rapid evolution of the Internet from its
                early days. It has always fascinated me.
              </p>
              <p>
                In 2019, I realized that I could turn my interest into a
                professional career by completing a{" "}
                <strong>Full-Stack Web Development</strong> boot camp with Le
                Wagon. I have since been working as a{" "}
                <strong>Web Integrator / Front-end developer</strong> for the
                past 4 years, where I focused on creating responsive designs and
                optimizing website performance. I take pride in my attention to
                detail and strive to ensure that every element of a website is
                not only functional and intuitive but also aesthetically
                pleasing.
              </p>
              <p>
                Despite working in the industry, I recently obtained a
                certificate as a <strong>Front-end Developer</strong> from
                SheCodes, highlighting my dedication to continuous learning and
                staying updated with the latest technologies.
              </p>
              <p>
                Today, with four years of experience as a Web Integrator /
                Front-end developer under my belt, I've decided to embark on the
                path of freelancing. As an{" "}
                <strong>
                  independent Front-end developer and WordPress developer
                </strong>
                , I leverage my skills to create websites that are both
                aesthetically pleasing and functional. I am passionate about
                collaborating with diverse clients and bringing their visions to
                digital reality.
              </p>
              <p>
                Beyond my professional endeavors, I enjoy playing with my dog
                and exploring the outdoors with him, immersing myself in
                captivating manga reads, and occasionally getting lost in the
                realm of video games.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <div className="experience fade-in">
          <h3 className="line-after">
            <span>Work experience</span>
          </h3>
          <div className="work-experience col-md-10 inner">
            <ul className="">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <h4>
                      Freelance / Front End Developer and WordPress Developer
                    </h4>
                  </div>
                  <span className="date">November 2023 - Present</span>
                  <div className="tool">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Responsive</span>
                    <span>SEO</span>
                    <span>WordPress</span>
                    <span>Shopify</span>
                    <p className="pt-3">
                      In recent months, I've been refining my expertise through
                      collaborations with agencies, transforming their designs
                      into top-notch, responsive, and accessible WordPress
                      websites. I consistently deliver work on time or even
                      ahead of schedule, maintaining excellent communication and
                      meticulous attention to detail throughout the process. My
                      ability to collaborate seamlessly, receive constructive
                      feedback, and meet project requirements positions me as a
                      strong asset to any team. Additionally, I bring experience
                      in front-end development on Shopify, further showcasing my
                      versatility and skills in adapting to diverse platforms.
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <h4>
                      <a
                        href="https://zerounzero.com/en/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Zero Un Zero
                      </a>{" "}
                      / WordPress Developer and Web Integrator
                    </h4>
                  </div>
                  <span className="date">November 2023 - Present</span>
                  <div className="tool">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>WordPress</span>
                    <span>Elementor</span>
                    <span>Responsive</span>
                    <span>ACF</span>
                    <span>WPML</span>
                    <span>SEO</span>
                    <p className="pt-3">
                      I've spent the past three years to Z1Z, where I played a
                      pivotal role as a front-end developer and web integrator,
                      specializing in WordPress. My contributions spanned a wide
                      range of responsibilities, from building websites from
                      wireframe to design and integration, to constructing
                      responsive and visually appealing platforms. I took charge
                      of addressing security concerns and ensuring timely
                      updates for optimal website performance. My expertise
                      extended beyond mere frontend development, encompassing
                      various aspects of web development and maintenance.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="experience">
        {/* <Fade> */}
        <div className="experience fade-in">
          <h3 className="line-after">
            <span>Formation</span>
          </h3>
          <div className="Formation-experience col-md-10 ms-auto inner">
            <ul className="">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <h4>
                      <a
                        href="https://www.shecodes.io/certificates/82888-charline-mons/max"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        SheCodes
                      </a>{" "}
                      / Front-end Developer Workshops
                    </h4>
                  </div>
                  <span className="date">May 2023 - January 2024</span>
                  <div className="tool">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>VSCode</span>
                    <span>API</span>
                    <span>GitHub</span>
                    <span>Hosting</span>
                    <span>Bootstrap</span>
                    <span>Responsive</span>
                    <span>SEO</span>
                    <p className="pt-3">
                      Completed SheCodes, a transformative and empowering coding
                      program, while concurrently working in the industry. This
                      experience served as a refreshing journey into the coding
                      realm, offering a structured learning environment and
                      engaging challenges. The program not only enhanced my
                      existing skills but also equipped me with new coding
                      concepts, bolstering my proficiency. Grateful for the
                      acquired skills and heightened confidence.
                    </p>
                  </div>
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    <h4>Le Wagon / Full Stack Web Development</h4>
                  </div>
                  <span className="date">April 2019 - June 2019</span>
                  <div className="tool">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>SQL</span>
                    <span>Ruby</span>
                    <span>Ruby on Rails</span>
                    <span>GitHub</span>
                    <span>GIT</span>
                    <span>Terminal</span>
                    <span>Bootstrap</span>
                    <span>Heroku</span>
                    <p className="pt-3">
                      Completed Le Wagon's Full Stack Development program,
                      acquiring in-depth knowledge of both front-end and
                      back-end technologies. Demonstrated proficiency in web
                      development through the successful execution of real-world
                      projects, showcasing problem-solving skills and the
                      ability to build scalable and dynamic web applications.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="contact">
        <h3 className="line-after">
          <span>Let's connect</span>
        </h3>
        <div className="Contact row align-items-center justify-content-between inner">
          <div className="Contact-details col-md-6">
            <p>
              I'm always open to a virtual coffee — especially regarding
              freelance work. Feel free to get in touch via{" "}
              <a href="mailto:charline.mons@gmail.com">
                charline.mons@gmail.com
              </a>
              .<br />
              <br />
              You can also find me on{" "}
              <a
                href="https://www.linkedin.com/in/charline-mons/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              or read my code on{" "}
              <a
                href="https://github.com/charlinemons"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
            <h3 className="pt-5">
              Thank you
              <br />
              for <span className="italic plum">visiting!</span>
            </h3>
          </div>
          <div className="col-md-4">
            <img src={Haku} alt="Haku" className="img-fluid" />
          </div>
        </div>
      </section>
      {/* </Fade> */}
    </div>
  );
};

export default Home;
