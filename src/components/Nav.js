import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import { useDispatch } from 'react-redux';
import { fetchSearched } from '../actions/gamesAction';
import { fadeIn } from '../animation';

const Nav = () => {

    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");

    const submitHandler = (e) => {
        dispatch(fetchSearched(searchText));
        e.preventDefault();
    };

    const clearSearchHandler = () => {
        dispatch({ type: "CLEAR_SEARCH" });
        setSearchText("");
    };

    return (

        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <Logo onClick={clearSearchHandler}>
                <img src={logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>

            <form className="search" onSubmit={submitHandler}>
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" />
                <button type="submit" >Search</button>
            </form>
        </StyledNav>
    )

};

const StyledNav = styled(motion.div)`

    padding: 3rem 5rem;
    text-align:center;

    input{
        width:30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border:none;
        margin-top:1rem;
        box-shadow: 0rem 0rem 2rem rgba(0,0,0,0.2);
        outline:none;
        
    }
    button{
        font-size: 1.5rem;
        border:none;
        padding:0.5rem 1.5rem;
        cursor:pointer;
        background:#ff7676;
        color: white;
    }

    @media (max-aspect-ratio: 1/1){
        padding: 1rem 2rem;

        input{
            width: 60%;
            font-size: 1rem;
        }
        button{
            font-size: 1rem;
        }
    }

`;

const Logo = styled(motion.div)`

    display:flex;
    justify-content:center;
    padding:1rem;
    cursor:pointer;

    img{
        height:2rem;
        width:2rem;
    }
`;
export default Nav;