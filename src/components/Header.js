import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const primaryColor = ' #c51313';

const useStyles = makeStyles((theme) => ({
	root: {
    flexGrow: 1,
    position: 'sticky',
		top: 1,
		zIndex : 99,
	},
	title: {
		flexGrow: 1,
	},
	button: {
		'&:hover': {
			backgroundColor: primaryColor,
		},
	},
}));

const Header = ({ history }) => {
  const classes = useStyles();
  
  const linkTo = url => {
    history.push(url)
  }

	return (
		<div className={classes.root + ' navbar'}>
			<AppBar
				style={{
					background: '#ffffffb0',
					boxShadow: 'none',
					color: primaryColor,
					borderBottom: '1px solid ' + primaryColor,
					top: 0,
				}}
			>
				<Toolbar>
					<Typography
						onClick={() => {
							linkTo('/');
						}}
						variant='h6'
						className={classes.title}
					>
						The University of Utah
					</Typography>
					<Button
						className={classes.button}
						onClick={() => {
							linkTo('/teachers');
						}}
					>
						Teachers
					</Button>
					<Button
						className={classes.button}
						onClick={() => {
							linkTo('/about');
						}}
					>
						About us
					</Button>
					<Button
						className={classes.button}
						onClick={() => {
							linkTo('/contact');
						}}
					>
						Contact us
					</Button>
					<Button
						className={classes.button}
						onClick={() => {
							linkTo('/login');
						}}
					>
						Login
					</Button>
					<Button
						className={classes.button}
						onClick={() => {
							linkTo('/register');
						}}
					>
						Register
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header
