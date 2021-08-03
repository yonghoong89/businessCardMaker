import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
      1 : {
        id:'1',
        name:'yonghoon',
        company:'google',
        theme:'light',
        title:'sorftWare',
        email:'yonghoong89@naver.com',
        message:'go for it',
        fileName:'',
        fileURl:null
      },
      2 : {
        id:'2',
        name:'yonghoon',
        company:'google',
        theme:'dark',
        title:'sorftWare',
        email:'yonghoong89@naver.com',
        message:'go for it',
        fileName:'',
        fileURl:null
      },
      3 : {
        id:'3',
        name:'yonghoon',
        company:'google',
        theme:'light',
        title:'sorftWare',
        email:'yonghoong89@naver.com',
        message:'go for it',
        fileName:'',
        fileURl:null
      },
  })
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      // if (!user) {
      //   history.push('/');
      // }
    });
  });

  const addCard = (card) =>{
    const updated = {...cards, card};
    setCards(updated)
    console.log(cards)
  }

  //addCard에도 적용가능
  const updateCard = (card) =>{
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
    console.log(cards)
  }

  const deleteCard = (card) =>{
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id]
      return updated;
    });
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor FileInput={FileInput} cards={cards} addCard={updateCard} updateCard={updateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
