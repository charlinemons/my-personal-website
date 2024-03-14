import React from "react";
import "../pages/projects.css";

import PsychoBunny from "../assets/images/psycho-bunny.jpg";
import WorldClock from "../assets/images/world-clock.png";
import AiAnime from "../assets/images/ai-anime.png";
import Dictionary from "../assets/images/dictionary.png";
import ColdWeatherApp from "../assets/images/weather-app.png";
import District23 from "../assets/images/district23.png";
import HabitationsHautNiveau from "../assets/images/habitationshautniveau.png";
import Manivelle from "../assets/images/manivelle-tv.png";
import KpopCanada from "../assets/images/kpopcanada.png";
import HabitationsCBA from "../assets/images/habitationscba.png";
import MouvementImpact from "../assets/images/mouvementimpact.png";
import HulixConstruction from "../assets/images/hulixconstruction.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="Intro row">
        <div className="projects-intro col">
          <h2>Here are some of the things I've been working on</h2>
          <p>
            All the things I've been doing over the past year, whether it's
            client projects, training projects, or just for fun.
          </p>
        </div>
      </div>
      <div className="Projects-clients mb-5">
        <h3 className="title-projects pt-5 pb-5">Projects</h3>
        <div className="projects">
          <ul>
            <li className="p-4 lg:p-6 border">
              <div className="project-details">
                <a
                  href="https://www.psychobunny.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={PsychoBunny} alt="Psycho Bunny" width="100%" />
                </a>
                <h3>Psycho Bunny</h3>
                <p>Integration of promotional banners on Shopify</p>
              </div>
              <div className="project-tag">
                <span>Shopify</span>
                <span>Liquid</span>
                <span>HTML</span>
                <span>CSS</span>
              </div>
            </li>

            <li className="p-4 lg:p-6 border">
              <div className="project-details">
                <a
                  href="https://district23.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={District23}
                    alt="District 23 Website Redesign"
                    width="100%"
                  />
                </a>
                <h3>District 23</h3>
                <p>
                  Complete redesign of a WordPress site using Elementor, a
                  powerful page builder extension. Modernizing the interface and
                  optimizing the user experience for a more attractive and
                  efficient online presence.
                </p>
              </div>
              <div className="project-tag">
                <span>Wordpress</span>
                <span>Elementor</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>CSS</span>
                <span>ACF</span>
                <span>CPT</span>
                <span>WPML</span>
              </div>
            </li>

            <li class="p-4 lg:p-6 border">
              <div class="project-details">
                <a
                  href="https://habitationshautniveau.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={HabitationsHautNiveau}
                    alt="Habitations Haut Niveau Website Redesign"
                    width="100%"
                  />
                </a>
                <h3>Habitations Haut Niveau</h3>
                <p>
                  Optimizing a WordPress site through the creation of custom
                  content, aimed at significantly improving the user experience.
                  Also added new pages to comprehensively showcase the various
                  housing models offered by the client. This transformation is
                  intended to make site navigation more user-friendly and
                  provide visitors with a complete and detailed view of the
                  available housing options.
                </p>
              </div>
              <div class="project-tag">
                <span>Wordpress</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>ACF</span>
                <span>CPT</span>
              </div>
            </li>

            <li class="p-4 lg:p-6 border">
              <div class="project-details">
                <a
                  href="https://habitationscba.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={HabitationsCBA}
                    alt="Habitations CBA Website Redesign"
                    width="100%"
                  />
                </a>
                <h3>Habitations CBA</h3>
                <p>
                  Designing a new website dedicated to showcasing the final
                  accomplishments of Habitation CBA. Through this platform, we
                  highlight the completed projects of our company, providing a
                  virtual showcase to discover and appreciate the quality of our
                  achievements in the field of housing.
                </p>
              </div>
              <div class="project-tag">
                <span>Wordpress</span>
                <span>PHP</span>
                <span>JavaScript</span>
                <span>ACF</span>
                <span>CPT</span>
                <span>Figma</span>
              </div>
            </li>

            <li class="p-4 lg:p-6 border">
              <div class="project-details">
                <a
                  href="https://kpopcanada.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={KpopCanada}
                    alt="Kpop Canada Website Redesign"
                    width="100%"
                  />
                </a>
                <h3>KPOP Canada</h3>
                <p>
                  Complete redesign of the website to modernize its aesthetics
                  and enhance the brand image. This update also includes the
                  integration of a section dedicated to presenting upcoming
                  shows. Our goal is to provide visitors with a refined visual
                  experience while maintaining intuitive navigation, keeping
                  them informed about upcoming events.
                </p>
              </div>
              <div class="project-tag">
                <span>Figma</span>
                <span>Wordpress</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>ACF</span>
                <span>CPT</span>
                <span>WPML</span>
              </div>
            </li>

            <li class="p-4 lg:p-6 border">
              <div class="project-details">
                <a
                  href="https://manivelle.tv/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Manivelle}
                    alt="Manivelle Website Redesign"
                    width="100%"
                  />
                </a>
                <h3>Manivelle</h3>
                <p>
                  Development of a website using WordPress in accordance with
                  the mockup provided by the client. This showcase website aims
                  to introduce the company, its services, and highlight the
                  team. We work meticulously to faithfully reproduce the
                  envisioned design while ensuring smooth navigation.{" "}
                </p>
              </div>
              <div class="project-tag">
                <span>Wordpress</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </li>
            <li class="p-4 lg:p-6 border">
              <div class="project-details">
                <a
                  href="https://www.hulixconstruction.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={HulixConstruction}
                    alt="Hulix Construction"
                    width="100%"
                  />
                </a>
                <h3>Hulix Construction</h3>
                <p>
                  Renovation of the website aimed at showcasing the client's
                  latest construction projects. Through this overhaul, we strive
                  to present the ongoing projects in a captivating and
                  informative manner. The goal is to create an engaging online
                  experience, providing visitors with a detailed insight into
                  the latest developments and construction projects of our
                  client.
                </p>
              </div>
              <div class="project-tag">
                <span>Wordpress</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </li>

            <li class="p-4 lg:p-6 border">
              <div class="project-details">
                <a
                  href="https://cold-weather-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={MouvementImpact}
                    alt="Mouvement Impact Website Redesign"
                    width="100%"
                  />
                </a>
                <h3>Mouvement Impact</h3>
                <p>
                  Complete redesign of a WordPress website, leveraging the
                  potential of Elementor as a construction tool. Our approach
                  includes the creation of custom content, aiming to simplify
                  future management for the client. By implementing a harmonious
                  combination of visually appealing elements and an ergonomic
                  structure, we strive to provide a web platform that is both
                  aesthetic and user-friendly, facilitating autonomous and
                  efficient content management by the client.
                </p>
              </div>
              <div class="project-tag">
                <span>Figma</span>
                <span>Wordpress</span>
                <span>Elementor</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>CPT</span>
                <span>ACF</span>
                <span>PHP</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="Projects-for-fun mb-5">
        <h3 className="title-projects pt-5 pb-5">For fun</h3>
        <div className="projects">
          <ul>
            <li className="p-4 lg:p-6 border">
              <div className="project-details">
                <a
                  href="https://world-clock-cm.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={WorldClock}
                    alt="World Clock Shecodes Javascript Api Project"
                    width="100%"
                  />
                </a>
                <h3>World clock</h3>
                <p>
                  Conceived and built a captivating World Clock web application
                  from scratch, which showcased real-time clocks for cities
                  around the globe.
                </p>
              </div>
              <div className="project-tag">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>VSCode</span>
                <span>API</span>
                <span>GitHub</span>
                <span>Hosting</span>
              </div>
            </li>

            <li class="p-4 lg:p-6 border">
              <div class="project-details">
                <a
                  href="https://ai-anime-fact-generator-cm.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={AiAnime}
                    alt="AI Anime Fact SheCodes Projects"
                    width="100%"
                  />
                </a>
                <h3>Fact generator</h3>
                <p>Build a text-generating tool powered by AI.</p>
              </div>
              <div class="project-tag">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>VSCode</span>
                <span>GitHub</span>
                <span>Hosting</span>
                <span>API</span>
                <span>AI</span>
              </div>
            </li>

            <li class="p-4 lg:p-6 border">
              <div class="project-details">
                <a
                  href="https://dictionary-react-project-cm.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Dictionary}
                    alt="Dictionary SheCodes AI Project"
                    width="100%"
                  />
                </a>
                <h3>Dictionary</h3>
                <p>Building an online dictionary using AI.</p>
              </div>
              <div class="project-tag">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>VSCode</span>
                <span>API</span>
                <span>GitHub</span>
                <span>Boostrap</span>
                <span>Hosting</span>
                <span>React.js</span>
              </div>
            </li>

            <li class="p-4 lg:p-6 border">
              <div class="project-details">
                <a
                  href="https://cold-weather-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ColdWeatherApp}
                    alt="Cold Weather React App"
                    width="100%"
                  />
                </a>
                <h3>React App</h3>
                <p>
                  Developed a weather app from scratch using React.js, enabling
                  users to monitor real-time weather for their selected city as
                  well as their current location.
                </p>
              </div>
              <div class="project-tag">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>VSCode</span>
                <span>GitHub</span>
                <span>Boostrap</span>
                <span>Hosting</span>
                <span>React.js</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
