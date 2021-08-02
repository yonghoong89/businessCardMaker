import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards,setCards] = useState([
    {
      id:'1',
      name:'yonghoon',
      company:'google',
      theme:'light',
      title:'sorftWare',
      email:'yonghoong89@naver.com',
      message:'go for it',
      fileName:'yong',
      fileUrl:'yong.png'
    },
    {
      id:'2',
      name:'yonghoon',
      company:'google',
      theme:'light',
      title:'sorftWare',
      email:'yonghoong89@naver.com',
      message:'go for it',
      fileName:'yong',
      fileUrl:'yong.png'
    },
    {
      id:'3',
      name:'yonghoon',
      company:'google',
      theme:'light',
      title:'sorftWare',
      email:'yonghoong89@naver.com',
      message:'go for it',
      fileName:'yong',
      fileUrl:'yong.png'
    }
  ])
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = (card) =>{
    const updated = [...cards, card];
    setCards(updated)
  }

  const updateCard = (card) =>{
    console.log(card)
  }

  const deleteCard = (card) =>{
    console.log(card)
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} updateCard={updateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
