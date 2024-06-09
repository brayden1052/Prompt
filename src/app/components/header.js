'use client'
import * as React from "react";
 
// importing material UI components
import { styled, alpha } from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "../../../node_modules/next/link";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
 
export default function Header() {
    return (
        <AppBar position="static" sx={{bgcolor:'green'}}>
            <Toolbar>
                {/*Inside the IconButton, we 
                    can render various icons*/}
                <IconButton size="large" edge="start" color= "inherit" aria-label="menu" sx={{ mr: 2}}>
                    {/*This is a simple Menu 
                      Icon wrapped in Icon */}
                    <MenuIcon />
                </IconButton>
                {/* The Typography component applies 
                     default font weights and sizes */}
 
                <Typography variant="h4" component="div" sx={{ flexGrow: 1,}}>
                    PromptAI
                </Typography>
                <Typography variant="h8" component="div" sx={{ flexGrow: 1,}}>
                     <Link href=""> Post </Link>
                </Typography>
                <Typography variant="h8" component="div" sx={{ flexGrow: 1,}}>
                <Link href=""> Explore </Link>
                </Typography>
                <Typography variant="h8" component="div" sx={{ flexGrow: 1,}}>
                <Link href=""> Documentation </Link>
                </Typography>
                <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}