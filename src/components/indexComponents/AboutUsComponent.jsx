import React, { useState } from 'react';
import {
  Stack,
  Typography,
  Box,
  Container,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import '../../assets/css/index/customButton.css';

// Custom Item component using button-53 class
const Item = ({ children, onClick, delay }) => (
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.4, delay }}
  >
    <button className="button-53" onClick={onClick}>
      {children}
    </button>
  </motion.div>
);

const AboutUsComponent = () => {
  const [selectedTitle, setSelectedTitle] = useState('About Us');
  const [selectedContent, setSelectedContent] = useState(
    `Elizabeth Seton School is a Catholic Filipino school and a Center for Excellence in basic education. In an ecologically friendly and technologically enabled environment, the school provides quality educational programs anchored on Constructivism with emphasis on Entrepreneurship.

Guided by the virtues of its patroness, St. Elizabeth Ann Seton, it nurtures authentic Christians whose daily lives are anchored on faith, love and selfless service. 

Driven by its strong sense of nationalism, it forms responsible citizens proud of their Filipino identity and cultural heritage who participate actively in transforming society.`
  );

  const handleSelection = (title, content) => {
    setSelectedTitle(title);
    setSelectedContent(content);
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(/src/assets/img/background-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: 6,
        paddingBottom: 10,
      }}
    >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 2,
            mt: 4,
            px: { xs: 2, sm: 4, md: 8, lg: 12, xl: 20 },
          }}
        >
          {/* Left column - buttons */}
          <motion.div
            style={{ flex: 1 }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Stack spacing={2}>
              <Item delay={0} onClick={() => handleSelection(
                'About Us',
                `Elizabeth Seton School is a Catholic Filipino school and a Center for Excellence in basic education. In an ecologically friendly and technologically enabled environment, the school provides quality educational programs anchored on Constructivism with emphasis on Entrepreneurship.

Guided by the virtues of its patroness, St. Elizabeth Ann Seton, it nurtures authentic Christians whose daily lives are anchored on faith, love and selfless service. 

Driven by its strong sense of nationalism, it forms responsible citizens proud of their Filipino identity and cultural heritage who participate actively in transforming society.`
              )}>
                About Us
              </Item>
              <Item delay={0.1} onClick={() => handleSelection(
                'Vision – Mission',
                'Elizabeth Seton School is a leading learner-centered transformative institution forming principled and competent life-long learners committed to excellence for meaningful life in a globalizing society. '
              )}>
                Vision – Mission
              </Item>
              <Item delay={0.2} onClick={() => handleSelection(
                'Our Story',
                `In 1975, Dr. Josefina V. Suarez, an educator, and her brother-in-law Francisco B. Alido, Sr., a businessman, collaborated to establish a preschool in Bacoor, Cavite. They named the school after Mother Elizabeth Ann Seton, the first American saint. 

The school began operations with two classes in School Year 1975-1976 with 14 learners in the morning and 20 learners in the afternoon.  Dr. Suarez was the teacher while other members of the family attended to other tasks with running a school, always mindful of providing quality education for the learners.

During its formative stages, the school had to transfer to four different sites to accommodate its steadily increasing population, until it settled in its permanent location in BF Resort Village, Las Piñas in 1987. Settled in its home, Elizabeth Seton School proclaimed its status as a Catholic School with fervent spiritual guidance from the Oblates of Divine Love Community from Rome.  This paved the way for the construction of the school chapel which was blessed by his Eminence Jaime Cardinal Sin and Monsignor Josefino Ramirez of the Archdiocese of Manila in 1989.

In 2013, after serving the school for almost 40 years  Dr. Suarez stepped down as the President of the institution and announced the succession of educational leader Dr. Roberto T. Borromeo as the 2nd President of the Elizabeth Seton School.

In 2015, Elizabeth Seton School celebrated its 40th anniversary with the theme “40tude is an attitude.” The anniversary began with the schools pioneering social service program “Dugtong Buhay” which yielded one of the largest single donation ever given to the Philippine National Red Cross by a private organization. Celebrations were capped off with a grand production participated by over 1,000 learners who performed at the Solaire Theater on January 19, 2016. 

With Dr. Borromeo at the helm of school, new programs geared towards technology based learning, employee-curated content, employee led learning, and a culture of continuous learning  were established.     `
              )}>
                Our Story
              </Item>
              <Item delay={0.2} onClick={() => handleSelection(
                'The Las Piñas Campus',
                 `The Las Piñas Campus is located along BF Resort Drive inside the exclusive village of BF Resort in Las Piñas City. It sits on a property of roughly 30,000 sqm. housing facilities for all primary to high school levels. The Las Piñas Campus received its accreditation from the Philippine Accrediting Association of School, Colleges and Universities (PAASCU) in July 1997. 

The preschool building is located in the heart of the campus with 8 themed classrooms, the school clinic, a faculty area, a party area, a play area, and dedicated facilities for Multiple Intelligences.

The Grade 1 and Grade 2 are housed in the Visayas building. The two-story facility has 14 classrooms, a library, an allied arts room, and a mini auditorium. Grade 3 to Grade 6 reside in the Luzon building and the Luzon extension. The Luzon building has a faculty center, two computer laboratories, two robotics laboratories, an English lab, a mini-auditorium, two case rooms, and roughly 40 classrooms.

All high school students reside in the Mindanao building. The facilities in Mindanao include a library, multiple science-oriented laboratories, three computer laboratories, two robotics laboratories, two faculty centers, a senior high school lounge, and a state-of-the-art auditorium. Connected to the Mindanao building via walkways, the gym houses multiple allied arts rooms, a TLE kitchen, ballet room, basketball courts, lockers, and the school canteen.

These facilities surround the school chapel which was built in 1989. The chapel was blessed by his Eminence Jaime Cardinal Sin and is the center of the school’s faith.`
              )}>
                The Las Piñas Campus
              </Item>
              <Item delay={0.3} onClick={() => handleSelection(
                'Elizabeth Seton Cavite Campus',
                `Soon after receiving its Level I Accreditation from the Philippine Accrediting Association of School, Colleges and Universities (PAASCU) in July 1997, the school broke grounds for another campus to serve the growing needs of residents further south, in Cavite.

Construction began almost immediately after deciding on a property in Anabu II-D, Imus Cavite. On June 1998 Elizabeth Seton School-Cavite opened its doors to a new batch of Setonians. The people of Cavite readily accepted Elizabeth Seton School and became the preferred educational provider for learners in the area. 

The Cavite campus is built on an almost similar lot size located in Anabu II-D, Imus, Cavite. Operations began in 1998 and received accreditation from the Philippine Accrediting Association of School, Colleges and Universities (PAASCU) in 2017. 

The preschool building in Cavite has multiple facilities aside from the 8 classrooms. The building also contains a clinic, mini-library, a ballet room, a computer laboratory, a playground, a mini auditorium, and faculty area.

The other grade levels are housed in the main building of the school which has over 60 classrooms. The main building also has facilities such as an auditorium, science, TLE, computer, robotics laboratories, library, conference areas, a senior high school lounge, faculty areas, clinic, a swimming pool, cafeteria, and office spaces.

Similar to the Campus in Las Pinas, the Chapel in Cavite is built at the heart of the campus. The chapel was completed on February 15, 2008 and was blessed by Bishop Luis Antonio Tagle.    `
              )}>
                Elizabeth Seton Cavite Campus
              </Item>
            </Stack>
          </motion.div>

          {/* Right column - Content area with .button-53 style */}
          <motion.div
            style={{ flex: 2 }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTitle}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
               <Box
                  sx={{
                    position: 'relative',
                    backgroundColor: '#20a100',
                    padding: 3,
                    minHeight: '250px',
                    fontFamily:
                      'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
                    fontWeight: 700,
                    width: '100%',
                    maxWidth: 900,
                    color: '#000',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      border: '1px solid #000000',
                      bottom: 4,
                      left: 4,
                      width: 'calc(100% - 1px)',
                      height: 'calc(100% - 1px)',
                      zIndex: 0,
                    },
                  }}
                >

                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="h5" gutterBottom fontWeight="bold">
                      {selectedTitle}
                    </Typography>
                    <Typography whiteSpace="pre-line">{selectedContent}</Typography>
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Box>
    </Box>
  );
};

export default AboutUsComponent;