'use client'
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './contact.module.css';
import { Input } from "@/components/Atoms/Input/Input";
import { Button } from "@/components/Atoms/Button/Button";
import Modal from "@/components/Atoms/Modal/Modal";
import { Title } from "@/components/Atoms/Labels/Title";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);  
  };

  const onSubmit = (data: any) => {
    openModal();
  };

  return (
    <div className={styles.container}>
      <Title>Contact Form</Title>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input error={errors} control={control} label="Name" name="name" />
        <Input error={errors} control={control} label="Email" name="email" />
        <Input
          error={errors}
          control={control}
          label="Message"
          name="message"
        />

        <Button type="submit" label="submit" />
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Title>Tu mensaje fue enviado</Title>
        <Button label="close" onChange={closeModal} />
      </Modal>
    </div>
  );
};

export default ContactForm;
