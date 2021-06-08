import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ImageSmall from '../ImageSmall';
import getImagesByChoreId from '../../helpers/data/imageData';

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
    padding: theme.spacing(4),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions({ userAssignments, images }) {
  const [expanded, setExpanded] = React.useState('panel1');

  useEffect(() => {
  }, []);

  const gettasks = () => (
    [...userAssignments].map((item, index) => (
        <Accordion key={`accord${item}-${index}`} square expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
        <AccordionSummary key={`accordsummary${item}`} aria-controls="paneld-content" id="panelheader">
          <Typography component={'span'} key={`typo1-${item}`}>Category: {item.categoryName}</Typography>
        </AccordionSummary>
        <AccordionDetails className="d-flex flex-wrap" key={`accordDetails-${item}`}>
          <span key={`span-${item}`}>
            <Typography>
              { images[item.choreId] && <ImageSmall image={images[item.choreId - 1].image} /> }
            </Typography>
            <Typography component={'span'} key={`typo2-${item}`}>
              <span className='accordTitle'>Description:</span>
              <div key={`div2-${item}`}>{item.chorename}</div>
              <span className='accordTitle'>Instructions:</span>
              <p className='accordDescription' key={`p-${item}`}>{item.choreDescription}</p>
            </Typography>
          </span>
          <Typography component={'span'} key={`typo3-${item}`}>
            <span className='accordTitle'>Assigned to:</span>
            <div key={`div3-${item}`}>{(item.firstname) ? item.firstname : ' no one'}</div>
            <span className='accordTitle'>Status:</span>
            <p key={`p2-${item}`}>{(item.isCompleted) ? 'Complete' : 'Not Complete'}</p>
            <Link to={{ pathname: `/chore/${item.choreId}` }}>Details</Link>
          </Typography>
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
