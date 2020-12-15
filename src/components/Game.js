import React from "react";
import { Link } from 'react-router-dom';
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

import { smallImage } from '../util';

import { popup } from '../animation';


const Game = ({ name, released, image, id }) => {
  //Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame layoutId={id.toString()} onClick={loadDetailHandler} variants={popup} initial="hidden" animate="show">
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${id.toString()}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img src={smallImage(image, 640)} alt={name} layoutId={`image ${id.toString()}`} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }

  @media (max-aspect-ratio: 1/1){
    width:90vw;
  }
`;

export default Game;
