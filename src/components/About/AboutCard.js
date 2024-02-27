import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    // <Card className='quote-card-view'>
    //   <Card.Body>
    //     <div className='about-text'>
    //       Hello there! I'm Hariharen, a{' '}
    //       <b className='purple'> Computer Science Engineering </b>graduate from
    //       CIT, Coimbatore. I am working in <b className='purple'>TCS</b> as a
    //       Systems Engineer, currently delving deep into the cloud realm within
    //       <b className='purple'> IBM Cloud.</b>
    //       <br />
    //       <br />
    //       My journey began at IBM, where I initially contributed as a contract
    //       employee in the VPC division. Now, I am working in{' '}
    //       <b className='purple'>Network overlay</b>, shaping cloud
    //       infrastructure to align with diverse user requirements while
    //       optimizing system software for enhanced performance and security.
    //       ensuring system compliance and high availability, essential for
    //       scaling applications effectively.
    //       <br />
    //       <br />
    //       I'm also an avid <b className='purple'>Tech enthusiast</b> with a
    //       flair for scripting to automate tasks. I have proficiency in{' '}
    //       <b className='purple'>JavaScript, Python and Go</b>. I also have
    //       worked in React, Flutter and have a passion for crafting compelling
    //       websites and mobile applications. I've even ventured into app
    //       development, successfully launching{' '}
    //       <b className='purple'>two apps on the Play Store</b>, and previously
    //       founded a startup centered on web development.
    //       <b className='purple'> Let's connect</b> and exchange insights within
    //       this exciting tech-driven sphere!
    //       <br />
    //     </div>
    //   </Card.Body>
    // </Card>
    <Card className="quote-card-view">
      <Card.Body>
        <div className="about-text">
          <ul>
            <li>
              Hello there! I'm Hariharen, a{" "}
              <b className="purple">Computer Science Engineering</b> graduate
              from CIT, Coimbatore.
            </li>
            <li>
              Currently working at <b className="purple">TCS</b> as a Systems
              Engineer, exploring the cloud realm within{" "}
              <b className="purple">IBM Cloud</b>.
            </li>
            <li>
              My journey began at IBM, where I initially contributed as a
              contract employee in the VPC division.
            </li>
            <li>
              Now, I am under <b className="purple">Network overlay</b> in IBM,
              shaping cloud infrastructure to align with diverse user
              requirements while optimizing system software for enhanced
              performance and security.
            </li>
            <li>
              I'm also an avid <b className="purple">Tech enthusiast</b> with a
              flair for scripting to automate tasks proficient in{" "}
              <b className="purple">JavaScript, Python, and Go</b>.
            </li>
            <li>
              Experienced in React, Flutter, and Web development, ventured into
              app development, successfully launching{" "}
              <b className="purple">two apps on the Play Store</b>, and
              previously founded a startup centered on web development.
            </li>
            <li>
              Let's connect and exchange insights within this exciting
              tech-driven sphere!
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
