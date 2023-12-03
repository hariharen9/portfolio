import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { SiFlutter, SiKubernetes, SiJira, SiTerraform } from 'react-icons/si'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiDart,
  DiHtml5,
  DiCss3,
  DiDocker,
  DiGo,
} from 'react-icons/di'
import { SiFirebase, SiTailwindcss } from 'react-icons/si'

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons' data-text='Javascript'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Python'>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Go Lang'>
        <DiGo />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Node.js'>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Docker'>
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Kubernetes'>
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Jira'>
        <SiJira />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Terraform'>
        <SiTerraform />
      </Col>

      <Col xs={4} md={2} className='tech-icons' data-text='React'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Flutter'>
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Dart'>
        <DiDart />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='HTML5'>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='CSS3'>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Git'>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Firebase'>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Tailwind CSS'>
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className='tech-icons' data-text='Bootstrap'>
        <BsFillBootstrapFill />
      </Col>
    </Row>
  )
}

export default Techstack
