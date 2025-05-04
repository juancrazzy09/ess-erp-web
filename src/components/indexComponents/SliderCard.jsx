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
    title: 'Primary School',
    content: 'The Primary Division offers academic programs...',
    modalContent: (
      <>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          The Primary Divisions (Toddler to Kindergarten) academic programs effectively promote physical, social, intellectual, emotional, and skills stimulation that integrates values formation that efficiently prepares learners for the initial stages of elementary schooling (Grade 1 to Grade 2).

          The curriculum for primary learners is designed to enable learners to achieve a balanced cognitive, emotional, social, and psychomotor development in a nurturing environment that recognizes the child’s varied multiple intelligences. The program is focused on establishing a firm foundation in values, knowledge, and skills to allow the child to understand his physical and social world; be able to independently function in it; and relate to others as part of a social group.

          To ensure the preparation of each learner for higher grade levels, emphasis is placed on developing literacy, numeracy, social, and emotional competencies as evidenced by its developmentally-appropriate and innovative activities for young children.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{color: 'green'}}>
          Preschool
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
          The preschool program adopts thematic/inter-disciplinary programs that engage students in creative-learning inside an informal classroom. Academically, students starting Nursery are gradually introduced to learning concepts by subject area in Mathematics, Science and English. To ensure as well that preschoolers are prepared for elementary, Filipino is incorporated in classes in Kindergarten.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{color: 'green'}}>
          Grade 1 to Grade 2
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
        As an introduction to elementary, primary students in Grades 1 and Grade 2 are gradually introduced to the rudiments of subject learning through inclusions of subjects like: Araling Panlipunan, Catholic Christian Formation, Music, Arts and Physical Education (MAPEH) and Computer into their weekly routine.

        Students in these grade levels are challenged to solve simple problems; make plain associations; build their English language proficiency and provide simple synthesis in fostering good citizenship; and learn to respect other people and the environment.
        </Typography>
      </>
    ),
    image: '/src/assets/img/primary-aboutus.png',
  },
  {
    title: 'Grade School',
    content: 'The Grade School Division caters to young learners...',
    modalContent: (
      <>
       <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
        The Grade School Division caters to a vibrant community of young learners (Grade 3 to Grade 6) in the elementary level.

        Guided by the school’s mission to develop competent life-long learners, students in the Grade School are exposed to an academic regimen that aims to enrich each child’s intellectual curiosity and build character that imbibes the values of Love, Faith and Selfless Service. Students are conscientiously formed to observe a strong sense of order and discipline that guides them to be responsible for their decisions and actions.

        Grade School also serves as the pathway in introducing to students 21st Century skills that are fundamental in establishing a good learning foundation. In this level, grade-schoolers are introduced and encouraged to practice collaboration, teamwork, creativity, critical-thinking, problem solving, and decision making.
        </Typography>
      </>
     
    ),
    image: '/src/assets/img/gradeschool-aboutus.png',
  },
  {
    title: 'High School',
    content: 'The High School Division represents the final phase...',
    modalContent: (
      <>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
        The High School Division (Grade 7 to Grade 12) represents the final phase of basic education. It is focused in the preparation of students to be both college- and career-ready.

        The High School program provides students a solid academic foundation designed to arouse interest for life-long learning. Here learners are challenged to think critically, organize their thoughts logically, and express their ideas effectively through an educational environment that encourages independence, responsibility, and creation of self-identity.

        As young adults, High School learners are guided and formed to be witnessing Catholic Christians in the spirituality of Mother Seton to materialize Principled-Competent Lifelong Learners making each child an effective and contributing member of society. 
        </Typography>
      </>
    
    ),
    image: '/src/assets/img/highschool-aboutus.jpg',
  },
  {
    title: 'Senior High School',
    content: 'The High School Division represents the final phase...',
    modalContent: (
      <>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
        Senior High School (SHS) from Grades 11 to 12 “completes” basic education. The SHS program is uniquely structured to help guide and align students towards their long-term career goals making sure that they graduate ready to pursue entrepreneurship endeavors and/or college education.

        The program upholds a dynamic learning atmosphere that focuses on the development of necessary skills that would propel them to succeed in higher education, career and life itself.

        Learners entering SHS are oriented and guided to choose from the following course specific academic strands offered by Elizabeth Seton School: 
      </Typography>
      <Typography variant="h5" gutterBottom sx={{color: 'green'}}>
        Science, Technology, Engineering and Mathematics (STEM)
      </Typography>
      <Typography variant="boday1" sx={{ whiteSpace: 'pre-line'}}>
        STEM is an academic strand in Senior High School that focuses on educating students in intertwining disciplines of science, technology, engineering and mathematics. The strand focuses on equipping students with the knowledge and skills to solve problems, gather and evaluate evidence, and make sense of information.

        In pursuing STEM, students may have inclination in pursuing the following careers: medicine, engineering, computer science, chemistry, astrophysics and the like.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ color: 'green'}}>
        Accountancy, Business, and Management (ABM)
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line'}}>
        This strand focuses on learning the basic concepts of business and learning associated skills in other related fields like finance, management and entrepreneurship. The strand provides students fundamentals of business operations and functions preparing them for possible careers in line with marketing, advertising, entrepreneurship, accountancy and management.
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ color: 'green'}}>
        Humanities and Social Sciences (HUMSS)
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line'}}>
      The strand on Humanities and Social Sciences focuses on the study of the different aspects of the human culture and societies. It is for students who are considering taking up journalism, communication arts, liberal arts, philosophy, education, and other social science-related courses in college.
      </Typography>
      </>
    ),
    image: '/src/assets/img/highschool-aboutus.jpg',
  },
];

const SliderCard = () => {
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
                scrollDir={scrollDir}
                image={card.image}
              />
            </div>
          </Grid>
        ))}
      </Grid>

      <Modal
          open={modalOpen}
          onClose={handleClose}
          BackdropProps={{
            style: { backgroundColor: 'transparent' }, // 👈 Transparent background
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
          }}
        >
          <Slide in={slideIn} direction="down" mountOnEnter unmountOnExit>
          <Box
              sx={{
                width: { xs: '90%', md: 800 },
                borderRadius: 2,
                boxShadow: 24,
                color: '#fff',
                overflow: 'hidden', // ensures header border-radius stays intact
              }}
            >
              {/* Header with background image */}
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

              {/* Content */}
              <Box sx={{ p: 4, bgcolor: 'background.paper', color: 'text.primary', maxHeight: '100vh', overflowY: 'auto' }}>
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
};

export default SliderCard;
