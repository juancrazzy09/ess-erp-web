import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Modal,
  Fade,
  Backdrop,
  Button,
} from '@mui/material';

const cards = [
  {
    id: 1,
    title: 'House System',
    description: 'Plants are essential for all life.',
    fullContent: 'The House System builds camaraderie and teamwork through healthy competition and values.',
  },
  {
    id: 2,
    title: 'Animals',
    description: 'Animals are a part of nature.',
    fullContent: 'Animals are fascinating creatures that contribute to ecosystem diversity and balance.',
  },
  {
    id: 3,
    title: 'Humans',
    description: 'Humans depend on plants and animals for survival.',
    fullContent: 'Human civilization thrives because of nature’s resources and biodiversity.',
  },
];

const style = {
  modalBox: {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -10%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    transition: 'transform 0.5s ease-in-out',
  },
};

function SpecialProgram() {
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleOpen = (card) => setSelectedCard(card);
  const handleClose = () => setSelectedCard(null);

  return (
    <>
     <style>{`
        .primary-button {
            font-family: 'Ropa Sans', sans-serif;
            color: white;
            cursor: pointer;
            font-size: 13px;
            font-weight: bold;
            letter-spacing: 0.05rem;
            border: 1px solid #004d00; /* Dark green */
            padding: 0.8rem 2.1rem;
            background-color: yellow;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 531.28 200'%3E%3Cdefs%3E%3Cstyle%3E .shape %7B fill: %2300a651 %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpolygon class='shape' points='415.81 200 0 200 115.47 0 531.28 0 415.81 200' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            background-size: 200%;
            background-position: 200%;
            background-repeat: no-repeat;
            transition: background-position 0.3s ease-in-out, border 0.3s, color 0.3s;
            position: relative;
            z-index: 1;
        }

        .primary-button:hover {
            background-position: 40%; /* Triggers animated slide-in effect */
            color: white;
            border-color: #004d00;
        }

        .primary-button:before,
        .primary-button:after {
            content: "";
            position: absolute;
            transition: background-color 0.15s ease-in-out;
        }

        .primary-button:before {
            background-color: #004d00;
            width: 0.2rem;
            height: 0.2rem;
            top: -1px;
            left: -1px;
        }

        .primary-button:hover:before {
            background-color: white;
        }

        .primary-button:after {
            background-color: #ffee58; /* Accent yellow */
            width: 0.3rem;
            height: 0.3rem;
            bottom: -1px;
            right: -1px;
        }

        .primary-button:hover:after {
            background-color: white;
        }

        .button-borders {
            position: relative;
            width: fit-content;
            height: fit-content;
        }

        .button-borders:before,
        .button-borders:after {
            content: "";
            position: absolute;
            width: calc(100% + 0.5em);
            height: 50%;
            left: -0.3em;
            border: 1px solid #004d00;
        }

        .button-borders:before {
            top: -0.3em;
            border-bottom: 0;
        }

        .button-borders:after {
            bottom: -0.3em;
            border-top: 0;
        }
        `}</style>


      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
          bgcolor: '#f5f5f5',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: 3,
            maxWidth: 1000,
            width: '100%',
          }}
        >
          {cards.map((card) => (
            <Card key={card.id} sx={{ position: 'relative', overflow: 'hidden' }}>
              <CardActionArea
                onClick={() => handleOpen(card)}
                sx={{
                  position: 'relative',
                  '&:hover .seeMore': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                  '&:hover .cardContent': {
                    opacity: 0.3,
                  },
                }}
              >
                <CardContent className="cardContent">
                  <Typography variant="h5">{card.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>

                <Box
                  className="seeMore"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -30%)',
                    opacity: 0,
                    transition: 'all 0.3s ease',
                    zIndex: 2,
                  }}
                >
                  <div className="button-borders">
                    <button className="primary-button">SEE MORE</button>
                  </div>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>

        <Modal
          open={Boolean(selectedCard)}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 300 }}
        >
          <Fade in={Boolean(selectedCard)}>
            <Box sx={style.modalBox}>
              {selectedCard && (
                <>
                  <Typography variant="h6" fontWeight="bold">
                    {selectedCard.title}
                  </Typography>
                  <Typography sx={{ mt: 2 }}>{selectedCard.fullContent}</Typography>
                  <Button
                    sx={{ mt: 3 }}
                    variant="outlined"
                    fullWidth
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </>
              )}
            </Box>
          </Fade>
        </Modal>
      </Box>
    </>
  );
}

export default SpecialProgram;
