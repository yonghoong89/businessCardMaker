import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
      1 : {
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
      2 : {
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
      3 : {
        id:'3',
        name:'yonghoon',
        company:'google',
        theme:'light',
        title:'sorftWare',
        email:'yonghoong89@naver.com',
        message:'go for it',
        fileName:'yong',
        fileUrl:'yong.png'
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
  }

  //addCard에도 적용가능
  const updateCard = (card) =>{
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
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
        <Editor cards={cards} addCard={addCard} updateCard={updateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
