import React from 'react';
// import PropTypes from 'prop-types';
import {
  IconButton,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Divider,
  Button,
} from '@material-ui/core';
import {
  Favorite, Share, ExpandMore,
} from '@material-ui/icons';
import useStyles from '../../utils/styles/useStyles';

const Estimates = () => {
  const [expanded, setExpanded] = React.useState('panel1');
  const [expandedTask, setExpandedTask] = React.useState(true);
  const [estimateValue, setEstimateValue] = React.useState('');
  const classes = useStyles();

  const onchangeEstimate = ({ target: { value } }) => setEstimateValue(value);

  return (
    <div className="padding-bottom-10 padding-top-10">
      <div className="flex-row-center margin-10">
        <Button variant="outlined" onClick={() => setExpanded('all')}>Open all</Button>
      </div>
      <ExpansionPanel
        expanded={(expanded === 'panel1') || (expanded === 'all')}
        onChange={() => setExpanded('panel1')}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <input
            placeholder="Estimate"
            className={[classes.heading, 'estimatesInput'].join(' ')}
            value={estimateValue}
            onChange={onchangeEstimate}
          />
          <Typography className={[classes.heading, 'estimatesInput'].join(' ')}>Description</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ExpansionPanel expanded={expandedTask} onChange={() => setExpandedTask(!expandedTask)}>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <Typography className={classes.heading}>Task</Typography>
              <Typography className={classes.secondaryHeading}>Description</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="flex-row">
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a
                  fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <IconButton aria-label="add to favorites"><Favorite /></IconButton>
          <IconButton aria-label="share"><Share /></IconButton>
        </ExpansionPanelActions>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={(expanded === 'panel2') || (expanded === 'all')}
        onChange={() => setExpanded('panel2')}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <input
            placeholder="Estimate"
            className={[classes.heading, 'estimatesInput'].join(' ')}
            value={estimateValue}
            onChange={onchangeEstimate}
          />
          <Typography className={classes.secondaryHeading}>Task</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="flex-row">
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a
              fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <IconButton aria-label="add to favorites"><Favorite /></IconButton>
          <IconButton aria-label="share"><Share /></IconButton>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
};

// Estimates.propTypes = {};

export default Estimates;
