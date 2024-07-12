import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import "../styles/components_style/lessons_accordion.css"


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `none`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 
  'rgb(243, 243, 243)',
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderBottom: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState(props.cardName);

  const handleChange = (card) => (event, newExpanded) => {
    setExpanded(newExpanded ? card : false);
  };

  return (
    <div >
      <Accordion expanded={expanded === 'card1'} onChange={handleChange('card1')}>
        <AccordionSummary aria-controls="card1d-content" id="card1d-header">
          <Typography>
            <h3 className='accordion_name'>
            Подготовка к ЕГЭ</h3></Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion_background">
          <Typography className='accordion_list'>
            <a href="#" className='accordion_element'>Литература</a>
            <a href="#" className='accordion_element'>Физика</a>
            <a href="#" className='accordion_element'>Химия</a>
            <a href="#" className='accordion_element'>Биология</a>
            <a href="#" className='accordion_element'>Информатика</a>
            <a href="#" className='accordion_element'>Русский язык</a>
            <a href="#" className='accordion_element'>География</a>
            <a href="#" className='accordion_element'>История</a>
            <a href="#" className='accordion_element'>Английский язык</a>
            <a href="#" className='accordion_element'>Математика(базовый уровень)</a>
            <a href="#" className='accordion_element'>Математика(профильный уровень)</a>
            <a href="#" className='accordion_element'>Немецкий язык</a>
            <a href="#" className='accordion_element'>Французский язык</a>
            <a href="#" className='accordion_element'>Испанский язык</a>
            <a href="#" className='accordion_element'>Китайский язык</a>
            <a href="#" className='accordion_element'>Обществознание</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'card2'} onChange={handleChange('card2')}>
        <AccordionSummary  aria-controls="card2d-content" id="card2d-header">
          <Typography><h3 className='accordion_name'>Подготовка к ОГЭ</h3></Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion_background">
          <Typography className='accordion_list'>
            <a href="#" className='accordion_element'>Литература</a>
            <a href="#" className='accordion_element'>Физика</a>
            <a href="#" className='accordion_element'>Химия</a>
            <a href="#" className='accordion_element'>Биология</a>
            <a href="#" className='accordion_element'>Информатика и ИКТ</a>
            <a href="#" className='accordion_element'>Русский язык</a>
            <a href="#" className='accordion_element'>География</a>
            <a href="#" className='accordion_element'>История</a>
            <a href="#" className='accordion_element'>Английский язык</a>
            <a href="#" className='accordion_element'>Математика</a>
            <a href="#" className='accordion_element'>Немецкий язык</a>
            <a href="#" className='accordion_element'>Французский язык</a>
            <a href="#" className='accordion_element'>Испанский язык</a>
            <a href="#" className='accordion_element'>Обществознание</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'card3'} onChange={handleChange('card3')}>
        <AccordionSummary  aria-controls="card3d-content" id="card3d-header">
          <Typography><h3 className='accordion_name'>Естественные науки</h3></Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion_background">
          <Typography className='accordion_list'>
            <a href="#" className='accordion_element'>Литература</a>
            <a href="#" className='accordion_element'>Физика</a>
            <a href="#" className='accordion_element'>Химия</a>
            <a href="#" className='accordion_element'>Биология</a>
            <a href="#" className='accordion_element'>Информатика</a>
            <a href="#" className='accordion_element'>Русский язык</a>
            <a href="#" className='accordion_element'>География</a>
            <a href="#" className='accordion_element'>История</a>
            <a href="#" className='accordion_element'>Английский язык</a>
            <a href="#" className='accordion_element'>Математика(базовый уровень)</a>
            <a href="#" className='accordion_element'>Математика(профильный уровень)</a>
            <a href="#" className='accordion_element'>Немецкий язык</a>
            <a href="#" className='accordion_element'>Французский язык</a>
            <a href="#" className='accordion_element'>Испанский язык</a>
            <a href="#" className='accordion_element'>Китайский язык</a>
            <a href="#" className='accordion_element'>Обществознание</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'card4'} onChange={handleChange('card4')}>
        <AccordionSummary  aria-controls="card4d-content" id="card4d-header">
          <Typography><h3 className='accordion_name'>Гуманитарные науки</h3></Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion_background">
          <Typography className='accordion_list'>
            <a href="#" className='accordion_element'>Литература</a>
            <a href="#" className='accordion_element'>Физика</a>
            <a href="#" className='accordion_element'>Химия</a>
            <a href="#" className='accordion_element'>Биология</a>
            <a href="#" className='accordion_element'>Информатика</a>
            <a href="#" className='accordion_element'>Русский язык</a>
            <a href="#" className='accordion_element'>География</a>
            <a href="#" className='accordion_element'>История</a>
            <a href="#" className='accordion_element'>Английский язык</a>
            <a href="#" className='accordion_element'>Математика(базовый уровень)</a>
            <a href="#" className='accordion_element'>Математика(профильный уровень)</a>
            <a href="#" className='accordion_element'>Немецкий язык</a>
            <a href="#" className='accordion_element'>Французский язык</a>
            <a href="#" className='accordion_element'>Испанский язык</a>
            <a href="#" className='accordion_element'>Китайский язык</a>
            <a href="#" className='accordion_element'>Обществознание</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'card5'} onChange={handleChange('card5')}>
        <AccordionSummary  aria-controls="card5d-content" id="card5d-header">
          <Typography><h3 className='accordion_name'>Технические науки</h3></Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion_background">
          <Typography className='accordion_list'>
            <a href="#" className='accordion_element'>Литература</a>
            <a href="#" className='accordion_element'>Физика</a>
            <a href="#" className='accordion_element'>Химия</a>
            <a href="#" className='accordion_element'>Биология</a>
            <a href="#" className='accordion_element'>Информатика</a>
            <a href="#" className='accordion_element'>Русский язык</a>
            <a href="#" className='accordion_element'>География</a>
            <a href="#" className='accordion_element'>История</a>
            <a href="#" className='accordion_element'>Английский язык</a>
            <a href="#" className='accordion_element'>Математика(базовый уровень)</a>
            <a href="#" className='accordion_element'>Математика(профильный уровень)</a>
            <a href="#" className='accordion_element'>Немецкий язык</a>
            <a href="#" className='accordion_element'>Французский язык</a>
            <a href="#" className='accordion_element'>Испанский язык</a>
            <a href="#" className='accordion_element'>Китайский язык</a>
            <a href="#" className='accordion_element'>Обществознание</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'card6'} onChange={handleChange('card6')}>
        <AccordionSummary  aria-controls="card6d-content" id="card6d-header">
          <Typography><h3 className='accordion_name'>Программирование</h3></Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion_background">
          <Typography className='accordion_list'>
            <a href="#" className='accordion_element'>Литература</a>
            <a href="#" className='accordion_element'>Физика</a>
            <a href="#" className='accordion_element'>Химия</a>
            <a href="#" className='accordion_element'>Биология</a>
            <a href="#" className='accordion_element'>Информатика</a>
            <a href="#" className='accordion_element'>Русский язык</a>
            <a href="#" className='accordion_element'>География</a>
            <a href="#" className='accordion_element'>История</a>
            <a href="#" className='accordion_element'>Английский язык</a>
            <a href="#" className='accordion_element'>Математика(базовый уровень)</a>
            <a href="#" className='accordion_element'>Математика(профильный уровень)</a>
            <a href="#" className='accordion_element'>Немецкий язык</a>
            <a href="#" className='accordion_element'>Французский язык</a>
            <a href="#" className='accordion_element'>Испанский язык</a>
            <a href="#" className='accordion_element'>Китайский язык</a>
            <a href="#" className='accordion_element'>Обществознание</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'card7'} onChange={handleChange('card7')}>
        <AccordionSummary  aria-controls="card7d-content" id="card7d-header">
          <Typography><h3 className='accordion_name'>Школьная программа</h3></Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion_background">
          <Typography className='accordion_list'>
            <a href="#" className='accordion_element'>Литература</a>
            <a href="#" className='accordion_element'>Физика</a>
            <a href="#" className='accordion_element'>Химия</a>
            <a href="#" className='accordion_element'>Биология</a>
            <a href="#" className='accordion_element'>Информатика</a>
            <a href="#" className='accordion_element'>Русский язык</a>
            <a href="#" className='accordion_element'>География</a>
            <a href="#" className='accordion_element'>История</a>
            <a href="#" className='accordion_element'>Английский язык</a>
            <a href="#" className='accordion_element'>Математика(базовый уровень)</a>
            <a href="#" className='accordion_element'>Математика(профильный уровень)</a>
            <a href="#" className='accordion_element'>Немецкий язык</a>
            <a href="#" className='accordion_element'>Французский язык</a>
            <a href="#" className='accordion_element'>Испанский язык</a>
            <a href="#" className='accordion_element'>Китайский язык</a>
            <a href="#" className='accordion_element'>Обществознание</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'card8'} onChange={handleChange('card8')}>
        <AccordionSummary  aria-controls="card8d-content" id="card8d-header">
          <Typography><h3 className='accordion_name'>Музыка</h3></Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion_background">
          <Typography className='accordion_list'>
            <a href="#" className='accordion_element'>Литература</a>
            <a href="#" className='accordion_element'>Физика</a>
            <a href="#" className='accordion_element'>Химия</a>
            <a href="#" className='accordion_element'>Биология</a>
            <a href="#" className='accordion_element'>Информатика</a>
            <a href="#" className='accordion_element'>Русский язык</a>
            <a href="#" className='accordion_element'>География</a>
            <a href="#" className='accordion_element'>История</a>
            <a href="#" className='accordion_element'>Английский язык</a>
            <a href="#" className='accordion_element'>Математика(базовый уровень)</a>
            <a href="#" className='accordion_element'>Математика(профильный уровень)</a>
            <a href="#" className='accordion_element'>Немецкий язык</a>
            <a href="#" className='accordion_element'>Французский язык</a>
            <a href="#" className='accordion_element'>Испанский язык</a>
            <a href="#" className='accordion_element'>Китайский язык</a>
            <a href="#" className='accordion_element'>Обществознание</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion" expanded={expanded === 'card9'} onChange={handleChange('card9')}>
        <AccordionSummary  aria-controls="card9d-content" id="card9d-header">
          <Typography><h3 className='accordion_name'>Искусство</h3></Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion_background">
          <Typography className='accordion_list'>
            <a href="#" className='accordion_element'>Литература</a>
            <a href="#" className='accordion_element'>Физика</a>
            <a href="#" className='accordion_element'>Химия</a>
            <a href="#" className='accordion_element'>Биология</a>
            <a href="#" className='accordion_element'>Информатика</a>
            <a href="#" className='accordion_element'>Русский язык</a>
            <a href="#" className='accordion_element'>География</a>
            <a href="#" className='accordion_element'>История</a>
            <a href="#" className='accordion_element'>Английский язык</a>
            <a href="#" className='accordion_element'>Математика(базовый уровень)</a>
            <a href="#" className='accordion_element'>Математика(профильный уровень)</a>
            <a href="#" className='accordion_element'>Немецкий язык</a>
            <a href="#" className='accordion_element'>Французский язык</a>
            <a href="#" className='accordion_element'>Испанский язык</a>
            <a href="#" className='accordion_element'>Китайский язык</a>
            <a href="#" className='accordion_element'>Обществознание</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion" expanded={expanded === 'card10'} onChange={handleChange('card10')}>
        <AccordionSummary  aria-controls="card10d-content" id="card10d-header">
          <Typography><h3 className='accordion_name'>Иностранные языки</h3></Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion_background">
          <Typography className='accordion_list'>
            <a href="#" className='accordion_element'>Литература</a>
            <a href="#" className='accordion_element'>Физика</a>
            <a href="#" className='accordion_element'>Химия</a>
            <a href="#" className='accordion_element'>Биология</a>
            <a href="#" className='accordion_element'>Информатика</a>
            <a href="#" className='accordion_element'>Русский язык</a>
            <a href="#" className='accordion_element'>География</a>
            <a href="#" className='accordion_element'>История</a>
            <a href="#" className='accordion_element'>Английский язык</a>
            <a href="#" className='accordion_element'>Математика(базовый уровень)</a>
            <a href="#" className='accordion_element'>Математика(профильный уровень)</a>
            <a href="#" className='accordion_element'>Немецкий язык</a>
            <a href="#" className='accordion_element'>Французский язык</a>
            <a href="#" className='accordion_element'>Испанский язык</a>
            <a href="#" className='accordion_element'>Китайский язык</a>
            <a href="#" className='accordion_element'>Обществознание</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}