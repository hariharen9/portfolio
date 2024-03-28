import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few <b className="purple">PERSONAL </b> projects I've
          worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://assets.intersystems.com/26/bd/6a6aa762425f87ad7d5c2fe65f8c/awslogo-image.jpg"
              isBlog={false}
              title="Hosting with AWS"
              description="    
              
              Built my personal portfolio website with ReactJS and hosted it in AWS using a CI/CD Pipeline.
              Also hosted it on netlify with a custom domain address.
              Used S3 bucket to serve the webpage. Codepipeline and Codebuild was used for the pipeline connected to Github. So anytime a commit is made to the repository, The code build will trigger with the help of webhooks, store the build files in the S3 bucket and then it will trigger the pipeline and deploy the website automatically."
              link="http://mypersonalportfolio-cicd.s3-website.ap-south-1.amazonaws.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ibb.co/HdHNF2Z/kuber.png"
              isBlog={false}
              title="Kubernetes Resource Generator"
              description="    
              
               This is a PYTHON script which will create Kubernetes Network resources like Router, Networks, Security groups etc. This tool can be used to automate the deployment of resources and integrate them with the K8S containers. This script also has many features like Deleting the applied resources, Custom Endpoint/Network count, Save the YAML file, optional LoadBalancers, Stop at a particular resource and many more which will help in development and troubleshooting"
              link="https://github.com/hariharen9/k8s_resource_creator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://play-lh.googleusercontent.com/kLxvPxrqHaFL9lljlV0mbzI3-QqK6F2VHi11LoYPJR7zvC0K3VJ7605b61xx2kWzbog=s180-rw"
              isBlog={false}
              title="Angst"
              description="Angst is your guide to reduce your mind-wandering and to feel less anxious. Our handpicked collection of ASMRs, Podcasts, Reading, Exercises, Quizzes, and Videos would help you feel less anxious and would definitely accompany you the next time when you have an anxiety attack."
              link="https://play.google.com/store/apps/details?id=com.trouvaille.angst"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://play-lh.googleusercontent.com/Gas7uD7_5AOu53NBkW0RaCbS2_4TIFek1olb2HGe_2pVg-H5EzuWFpRCbW6kwwAZNaI=s180-rw"
              isBlog={false}
              title="CASHTRACK"
              description="Are you someone who suffers from impulse buying? Are you planning to increase your savings to buy a new phone or go on a nice vacation, but always lose track of how you spend your money? This app is here to help you achieve your next big goal."
              link="https://play.google.com/store/apps/details?id=com.hariharen.cashtrack"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.imgur.com/a8eTprC.png"
              isBlog={false}
              title="FOG BLOGG - Blog with ease"
              description="    
              
               This is a Full-Stack Web Application is built using NEXTJS as frontend, NODEJS as server / Backend & FIREBASE for the database. This has AUTHENTICATION features like Sign-In with GOOGLE or Sign-in Anonymously. Users can Login, Write blogs and see /react to others blogs. Everything is PUBLIC and in chronological order so it is transparent just like a BLOCKCHAIN 😉"
              link="https://foggy.vercel.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://developers.google.com/ml-kit/vision/face-detection/images/face_detection2x.png"
              isBlog={false}
              title="MagicBrain - FaceDetection AI"
              description="    
              
               This is a Full-Stack Web Application is built using REACTJS as frontend, NODEJS as server / Backend & POSTGRESQL for the database. It uses the CLARIFAI API to detect faces which uses AI and machine learning to detect faces in the given image. Styled using Bootstrap and Tachyons. It's a complete web app with all the components hosted separately and is currently LIVE. Backend is deployed to Heroku and frontend is deployed on Netlify"
              link="https://magicbrain.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://sc04.alicdn.com/kf/U3db117176e5048109d53049785397510I.png"
              isBlog={false}
              title="BookYourDoc"
              description="In the past year, Many suffered to book doctors appointment. This app will minimize the effort. using a realtime database. you can immediately book a Doctor"
              link="https://github.com/hariharen9/bookyourdoc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.asmag.com/upload/pic/case/35333.378375.jpg"
              isBlog={false}
              title="BookYourLot"
              description="Hassel free parking spot booking. In Just a click of a button. Book your parking lot, Park and go whenever you want. Payment feature is coming soon."
              link="https://github.com/hariharen9/bookyourlot"
            />
          </Col>
          {/* 
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcK1uS4MzNKyXn9po6gN62K0TopxC9IiAaw&usqp=CAU'
              isBlog={false}
              title='Pyctionary'
              description='A clever dictionaty using Python and machine learning'
              link='https://github.com/hariharen9/Pyctionary'
            />
          </Col> */}
        </Row>
        <h1 className="project-heading">
          Some of my <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath="https://miro.medium.com/max/5184/0*rWgwiS7Lwh86dECG"
              link="https://hariharen.medium.com/flutter-change-application-name-and-launcher-icon-90c5b1ef7d21"
              title="How to Change Application Name and Launcher Icon in Flutter"
              // site="medium.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath="https://miro.medium.com/max/4256/0*pRgsuT9nTcx3ktNE"
              link="https://hariharen.medium.com/technology-is-eating-our-brains-e97e9840e63a"
              title="Technology is eating our Brains"
              // site="medium.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath="https://miro.medium.com/max/4000/0*v8L0sz661Or-FpTv"
              link="https://hariharen.medium.com/augmented-reality-boon-or-bane-e27176b7a47"
              title="Augmented Reality-Boon or Bane"
              // site="medium.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath="https://miro.medium.com/max/4240/0*A1pQ2wE2RCzu2sLO"
              link="https://hariharen.medium.com/how-i-use-youtube-effectively-ca3b56e4ea95"
              title="How I use YouTube Effectively."
              // site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
