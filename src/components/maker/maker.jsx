import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const [cards, setCards] = useState({})
  const history = useHistory();
  const historyState = history.location.state;
  const [userId, setUserId] = useState(historyState && historyState.id || 'test');

  const onLogout = () => {
    authService.logout();
  };

  useEffect(()=>{
    if(!userId){
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards =>{
      setCards(cards);
    });
    return () => stopSync() ;
  }, [userId]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        console.log(user.uid)
        setUserId(user.uid)
      }
      // else{
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
    console.log(userId,card)
    cardRepository.saveCard(userId, card)
  }

  const deleteCard = (card) =>{
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id]
      return updated;
    });
    cardRepository.removeCard(userId, card)
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
