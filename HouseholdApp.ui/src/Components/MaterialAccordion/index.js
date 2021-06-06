import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(129, 207, 224, .5)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 50,
    '&$expanded': {
      minHeight: 50,
    },
  },
  content: {
    '&$expanded': {
      margin: '20px 0',
      backgroundColor: 'rgba(228, 241, 254, 1)',
    },
  },
  expanded: {
    backgroundColor: 'rgba(228, 241, 254, 1)',
  },
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions({ userAssignments }) {
  const [expanded, setExpanded] = React.useState('panel1');

  useEffect(() => {
  }, []);

  const gettasks = () => (
    [...userAssignments].map((item, index) => (
        <Accordion key={`accord${item}-${index}`} square expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
        <AccordionSummary key={`accordsummary${item}`} aria-controls="paneld-content" id="panelheader">
          <Typography component={'span'} key={`typo1-${item}`}>Category: {item.categoryName}</Typography>
        </AccordionSummary>
        <AccordionDetails key={`accordDetails-${item}`}>
        <span key={`span-${item}`}>
        <Typography component={'span'} key={`typo2-${item}`}>
        <div key={`div2-${item}`}>{item.chorename}</div>
        <p key={`p-${item}`}>{item.choreDescription}</p>
        </Typography>
        </span>
        </AccordionDetails>
      </Accordion>
    )));

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
        { gettasks()}
    </div>
  );
}
