import React, { useEffect, useState } from 'react';
import {
  Box,
  Modal,
  Typography,
  Button,
  Grid,
  Backdrop,
  Slide,
} from '@mui/material';
import AnimatedCard from './AnimatedCard';


const cardData = [
  {
    title: 'House System',
    content: 'The Primary Division offers academic programs...',
    modalContent: (
      <>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
        The House System is a vertical structure for organizing or grouping students to varied ages and grade levels. It aims to strengthen community life and sense of belonging as a member of the Setonian family. Activities are centered on academics, citizenship, sports and cultural, entrepreneurship and community service. A point system utilized to determine the performance of each House and at the end of each year, the House with the highest number of points is declared as the Mother Seton Cup champion.
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
        The Elizabeth Seton School has always believed in the formation of its students through unique activities that are set to hone life and mega skills. Anchored on the school’s Mission-Vision as well as the values of its patron saint. Saint Elizabeth Ann Seton – Faith, Love, and Selfless Service the house system is launched. 
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
        It is a caring and supportive environment where each student is a valued member of a “small” family unit within a “larger” family within the school. It is a potent strategy for fostering a sense of belonging and building a strong school culture.
        </Typography>
      </>
    ),
  },
  {
    title: 'Business Simulation',
    content: 'The Technology and Livelihood Education (TLE)...',
    modalContent: (
      <>
       <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
       The Technology and Livelihood Education (TLE) Entrepreneurship – Business Simulation is designed to involve all Grade 10 students in the activities of setting up a business. It uses the knowledge and skills presented in compatibility building and career pathway materials and organize the content into tasks to be accomplished in setting up a business. This is intended to give students a real experience in starting a business while they are learning the skills in planning their own enterprise. The tasks are divided into four teams (Management Team, Marketing Team, Finance Team and Production Team). There are also tasks for the entire class that will integrate the decision of the whole business team. Thus, this program develops desirable attitude and values which will contribute to the effective personal, family and community living.
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
        The Business Simulation is the creative application of the Elizabeth Seton School Entrepreneurship Program. It is a four (4) day per term activity wherein grade 10 students are provided with learning experiences to plan, execute and evaluate a business endeavor.
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
        To maximize the student participation and provide a profitable opportunity for the students, they mainly operate a restaurant business. Each class is required to plan the restaurant theme, provide the ambiance and prepare the venue, create promotional materials and strategies, plan the menu and food preparation, allocate budget-costing and pricing, provide customer service, and apply basic accounting.
        </Typography>
      </>
     
    ),
  },
  {
    title: 'Robotics',
    content: 'The Robotics program is designed for Junior and Senior High School/..',
    modalContent: (
      <>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
        The Robotics program is designed for Junior and Senior High School students to empower the 21st century skills which include the 4C’s namely Collaboration, Communication, Critical Thinking, and Creativity. The program consisting of High Beta, High Alpha and VEX aim students to deeply understand the phenomenon in Science and the dynamics of Mathematics and use this application in solving present and future society’s problems. Through this, the students work in a group to plan and accomplish missions on each module that provides real-life approach and providing real-life situations.
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
        The Robotics Program engages students in strategic problem-solving and higher order of thinking skills which includes critical, analytical and logical decision making. These skills are imperative to 21st century education to further understand complex Math and Science concepts. The program also promotes the value of collaboration, responsibility, resourcefulness and respect.
        </Typography>
      </>
    
    ),
  },
  {
    title: 'Zest for Learning and Living',
    content: 'The Zest for Learning and Living (ZLL) program aims to enhance...',
    modalContent: (
      <>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
      The Zest for Learning and Living (ZLL) program aims to enhance the multi-intelligence in the heart of every student and profess their needs in their future career. By empowering them, they learn to make decisions on their own, thereby enhancing their leadership and followership skills.
      </Typography>
      <Typography variant="boday1" sx={{ whiteSpace: 'pre-line'}}>
      The Zest for Learning and Living Program is an empowerment program for the Elizabeth Seton School students. It promotes the creation of an enriching, practical dynamic and responsive program which allows the learners the freedom to freely choose opportunities at any time during their lives which they believe to be important for their development.
      </Typography>
      <Typography variant="boday1" sx={{ whiteSpace: 'pre-line'}}>
      The program is divided in three areas: Career, Creative, and Kinesthetic. Given a particular area of discipline, students plan their own activities, chart their course of actions and determine their procedure, evaluate the outcomes and make recommendations on how they can do better.
      </Typography>
      <Typography variant="boday1" sx={{ whiteSpace: 'pre-line'}}>
      The program specifically addresses recognition of the individual needs and interests of all types of students, integration of values into the activities, provision of free choice as regards to selection of involvement areas, creation of opportunities for students to solve problems and conflicts in a practical way, promotion of self-evaluation techniques and encouragement for students to find joy in their work.
      </Typography>
      </>
    ),
  },
  {
    title: 'Sports Development',
    content: 'In recognition of the multiple intelligences, the Elizabeth Seton School envisions the holistic...',
    modalContent: (
      <>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
      In recognition of the multiple intelligences, the Elizabeth Seton School envisions the holistic development of athletes in their respective recreation creating avenues for physical fitness, camaraderie, team work, and sportsmanship balanced with fulfillment of academic proficiency and excellence. The ESS sports program aims to achieve the student athletes develop and create interest among its student populace towards sports; create holistic athletes with keen aptitude for both academics and sports; strive for excellence that will produce quality teams and players which promotes the values of St. Elizabeth Ann Seton: Faith in God, Love of School, and Service to Team.
      </Typography>
      <Typography variant="boday1" sx={{ whiteSpace: 'pre-line'}}>
      The school sports program begins in the classroom where all students are taught the values of physical fitness, camaraderie, team work, and sportsmanship. Students are then exposed to participate in different sports and exhibit their kinisthetic abilities. Those who show potential or want to further develop their kinisthetic abilities participate in the schools varsity program. The varsity program is the epitome of the sports development program wherein athletes are developed to participate in highly competitive environments.  
      </Typography>
      <Typography variant="boday1" sx={{ whiteSpace: 'pre-line'}}>
      Our athletes are geared to achieve high standards when they train and participate in inter-school, regional, national competitions, and international competitions. 
      </Typography>
      <Typography variant="boday1" sx={{ whiteSpace: 'pre-line'}}>
      The program specifically addresses recognition of the individual needs and interests of all types of students, integration of values into the activities, provision of free choice as regards to selection of involvement areas, creation of opportunities for students to solve problems and conflicts in a practical way, promotion of self-evaluation techniques and encouragement for students to find joy in their work.
      </Typography>
      </>
    ),
  },
  {
    title: 'Theater Production',
    content: 'The Elizabeth Seton School is a leading learner-centered transformative...',
    modalContent: (
      <>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
      The Elizabeth Seton School is a leading learner-centered transformative institution devoted in forming principled, competent and lifelong learners. This aspiration is achieved by tapping into the multiple intelligences inherent of its students. The launching of various activities and theater productions are aimed to showcase and highlight the diversified talents and skills students possess, particularly realizing and honing potential storytellers through the medium of dances, songs, and music.
      </Typography>
      <Typography variant="boday1" sx={{ whiteSpace: 'pre-line'}}>
      In 1987, the production entitled “Indak Himig” showcased various Filipino songs, music and dance. This was followed by another production, entitled “Under Asean Sky” which featured the different culture of Asean countries through music and dance. Both productions were directed by the late National Artist Ramon Obusan.
      </Typography>
      <Typography variant="boday1" sx={{ whiteSpace: 'pre-line'}}>
      On the 30th Founding Anniversary of The Elizabeth Seton School in 2005, the production, “On Wings of Music” presented excerpts from Filipino and Broadway musicals. After five years, the school produced “Milestones and Music” which highlighted its history for 35 years. All four productions were presented at Tanghalang Nicanor Abelardo (Main Theater) of The Cultural Center of the Philippines.
      </Typography>
      <Typography variant="boday1" sx={{ whiteSpace: 'pre-line'}}>
      Recently, for the 5th time, the school embarked once again on a major production. This time, the 40th Anniversary show was presented at the The Theater at Solaire. “40tude is an Attitude” is a two-part musical documentary. Through the creative organization of segments, the show was designed to be interactive. Each song and production numbers is stringed by poetry readings, voice overs, video segments, live feeds and interviews.
      </Typography>
      </>
    ),
  },
];

function SpecialProgram() {
const [scrollDir, setScrollDir] = useState('down');
  const [modalOpen, setModalOpen] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, []);

  const handleCardClick = (card) => {
    setActiveCard(card);
    setModalOpen(true);
    setTimeout(() => setSlideIn(true), 10); // Delay to trigger slide-in
  };

  const handleClose = () => {
    setSlideIn(false);
    setTimeout(() => {
      setModalOpen(false);
      setActiveCard(null);
    }, 300); // Match Slide transition duration (300ms)
  };

  return (
     <Box
         sx={{
           py: 4,
           backgroundImage: 'url(/src/assets/img/background-1.jpg)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
         }}
       >
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        {cardData.map((card, index) => (
          <Grid item xs={10} md={3} key={index}>
            <div onClick={() => handleCardClick(card)} style={{ cursor: 'pointer' }}>
              <AnimatedCard
                direction="top"
                title={card.title}
                content={card.content}
                enableSeeMore = {false}
                bgImage= "/src/assets/img/modal_bg.png"
              />
            </div>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        BackdropProps={{
          style: { backgroundColor: 'transparent' },
          timeout: 300,
        }}
      >
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Slide in={slideIn} direction="down" mountOnEnter unmountOnExit>
            <Box
              sx={{
                width: { xs: '90%', md: 800 },
                borderRadius: 2,
                boxShadow: 24,
                display: 'flex',
                flexDirection: 'column',
                maxHeight: 550,
                bgcolor: 'background.paper',
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  backgroundImage: 'url(/src/assets/img/2178148-scaled.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  p: 3,
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textShadow: `
                      -1px -1px 0 #000,
                      1px -1px 0 #000,
                      -1px 1px 0 #000,
                      1px 1px 0 #000
                    `,
                  }}
                >
                  {activeCard?.title}
                </Typography>
              </Box>

              {/* Scrollable content */}
              <Box
                sx={{
                  p: 4,
                  overflowY: 'auto',
                  flex: 1,
                  color: 'text.primary',
                }}
              >
                {activeCard?.modalContent}
                <Box textAlign="right" mt={3}>
                  <Button onClick={handleClose} variant="contained">
                    Close
                  </Button>
                </Box>
              </Box>
            </Box>
          </Slide>
        </Box>
      </Modal>
      </Box>
  );
}

export default SpecialProgram;
