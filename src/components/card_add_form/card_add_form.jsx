import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({FileInput, onAdd}) => {
  const formRef = useRef();
  const nameRef =useRef();
  const companyRef =useRef();
  const themeRef =useRef();
  const lightRef =useRef();
  const darkRef =useRef();
  const colorfulRef =useRef();
  const titleRef =useRef();
  const emailRef =useRef();
  const messageRef =useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card ={
      id:Date.now(),
      name:nameRef.current.value || '',
      company:companyRef.current.value || '',
      theme:themeRef.current.value,
      light:lightRef.current.value || '',
      dark:darkRef.current.value || '',
      colorful:colorfulRef.current.value || '',
      title:titleRef.current.value || '',
      email:emailRef.current.value || '',
      message:messageRef.current.value || '',
      fileNmae:'',
      fileUrl:'',
    }
    formRef.current.reset();
    onAdd(card);
  };
  return (
    <form className={styles.form} ref={formRef}>
      <input ref={nameRef}
      className={styles.input} type="text" name="name" placeholder='name' />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder ='company'
      />
      <select ref={themeRef}
      className={styles.select} name="theme" placeholder='theme'>
        <option ref={lightRef}
        placeholder='light'>light</option>
        <option ref={darkRef}
        placeholder='dark'>dark</option>
        <option ref={colorfulRef}
        placeholder='colorful'>colorful</option>
      </select>
      <input ref={titleRef}
      className={styles.input} type="text" name="title" placeholder='title' />
      <input ref={emailRef}
      className={styles.input} type="text" name="email" placeholder='email' />
      <textarea ref={messageRef}
      className={styles.textarea} name="message" placeholder='message' />
      <div className={styles.fileInput}>
        <FileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
