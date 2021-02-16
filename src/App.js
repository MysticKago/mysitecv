import React from "react";
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Container>
        <Top>
          <Name>Kago Tony Molemogi</Name>
          <Contacts>
            <p><img src="" alt=""/>+267 74******</p>
            <p><img src="" alt=""/>mystickago@gmail.com</p>
          </Contacts>
        </Top>
        <Middle>
          <Profile>
            <Title>PROFILE</Title>
            <p>Software engineer with a passion for developing innovative programs that expedite the efficiency and
              effectiveness of organizational success. Well-versed in web technology and writing code to create web
              systems that are reliable and user-friendly. Confident communicator, strategic thinker, and innovative
              creator to develop webapps that are customized to meet a company’s organizational needs, highlight
              their core competencies, and further their success.</p>

            <p>Skilled and experienced Motion Graphic Designer with experience in creating fun and engaging
              animated videos, product introduction, and the overall management of a project's life from
              conception to fruition. Experience in assessing customer desires and requirements and generating
              a product that successfully meets those standards. Bringing forth the ability to determine product
              specifications and production timelines.</p>
          </Profile>
          <Education>
            <Title>EDUCATION</Title>
            <h2>Bachelor of Science (Hons) in Software Engineering with Multimedia</h2>
            <p>AUGUST 2015 — DECEMBER 2019 Limkokwing University, Block 7, Gaborone,Botswana</p>
            <h2>Software Engineering with Multimedia</h2>
            <p>Together they make powerful set of skills that goes beyond each indivitual profession which truly represent Information Communication Technologies</p>
          </Education>
          <Experience>
            <Title>WORK EXPERIENCE</Title>
            <h2>Motion Graphic Designer For FNB Botswana</h2>
            <a>NOVEMBER 2018 — MAY 2019</a>
            <p>Worked well independently and on a team to create animated training videos for employees
            and explainer videos for their clients on how to use their product the appropriate way</p>
            <h2>Motion Graphic Designer For Limkokwing</h2>
            <a>MARCH 2019 - MARCH 2019</a>
            <p>Created a short Career Fair video for my school, to introduce new students to the courses offered in a fun way.</p>
          </Experience>
          <Skills>
            <Title>SKILLS</Title>
            <List>
              <Media>
                <h2>MULTIMEDIA SKILLS</h2>
                <p>Adobe Photoshop.........66%</p>
                <p>Adobe Illustrator.......75%</p>
                <p>Adobe After Effects.....75%</p>
                <p>Adobe Premier Pro.......60%</p>
              </Media>
              <Web>
                <h2>DEVELOPEMNT SKILLS</h2>
                <p>HTML & CSS.........80%</p>
                <p>JavaScript.........65%</p>
                <p>ReactJS............65%</p>
              </Web>
            </List>
          </Skills>
        </Middle>
        <Last>
          <p>Phase One, Gaborone, Botswana</p>
        </Last>
      </Container>
    </div>
  );
}
const Web = styled.div`
  width: 45%;`;
const Media = styled.div`
  width: 45%;
  div {
  line-height: 7px;
  background-color: #F9CC47;
  width: 200px;
  }
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
`;
const Experience = styled.div`
//background-color: royalblue;
  max-width: 48%;
h2 {
  padding: 0 0 0 10%;
  color: white;
}
a {
  color: #AFAFAF;
  padding: 0 0 0 10%;
}
p {
  color: white;
  padding: 0 0 0 10%;
}
`;
const Last = styled.div`
  background-color: #F9CC47;
  display: flex;
  flex-direction: row-reverse;
  padding: 0.4% 3%;
  width: 45%;
  margin-top: 50px;
  border-radius: 0 0 0 20px;
  img {
    height: 28px;
  }
`;
const Skills = styled.div`
  //background-color: royalblue;
  width: 48%;
h2 {
  padding: 0 0 0 10%;
  color: white;
}
p {
  color: #AFAFAF;
  padding: 0 0 0 10%;
}
`;
const Middle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Education = styled.div`
  //background-color: royalblue;
  max-width: 48%;
  h2 {
    padding: 0 0 0 10%;
    color: white;
  }
  p {
    color: #AFAFAF;
    padding: 0 0 0 10%;
  }
`;
const Profile = styled.div`
  //background-color: royalblue;
  max-width: 48%;
  p {
    color: white;
    padding: 0 0 0 10%;
  }
`;
const Title = styled.h1`
  color: #F9CC47;
  padding: 2% 0 0 10%;
`;
const Container = styled.div`
  background-color: #1A1A1A;
  font-family: Bahnschrift;
  border-radius: 20px;
`;
const Top = styled.div`
  display: flex;
`;
const Name = styled.h1`
  color:white;
  font-size: 38px;
  padding: 0 10% 0 12%;
`;
const Contacts = styled.div`
  background-color: #F9CC47;
  width: 99%;
  padding: 2% 8% 0 0;
  border-radius: 0 20px 0 0; 
  text-align: right;
`;
export default App;
