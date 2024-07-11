import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import "../styles/components_style/lessons_accordion.css"


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
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
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
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
      <Accordion  expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary  aria-controls="panel2d-content" id="panel2d-header">
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
      <Accordion  expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary  aria-controls="panel3d-content" id="panel3d-header">
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
      <Accordion  expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary  aria-controls="panel4d-content" id="panel4d-header">
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
      <Accordion  expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary  aria-controls="panel5d-content" id="panel5d-header">
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
      <Accordion  expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary  aria-controls="panel6d-content" id="panel6d-header">
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
      <Accordion  expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary  aria-controls="panel7d-content" id="panel7d-header">
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
      <Accordion  expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary  aria-controls="panel8d-content" id="panel8d-header">
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
      <Accordion className="accordion" expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary  aria-controls="panel9d-content" id="panel9d-header">
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
      <Accordion className="accordion" expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary  aria-controls="panel10d-content" id="panel10d-header">
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