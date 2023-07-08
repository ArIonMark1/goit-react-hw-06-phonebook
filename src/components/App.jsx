import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchContacts from './SearchContacts/SearchContacts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const storage = useSelector(state => state.contacts);
  //----------------------------------------------------------------

  return (
    <div className="container">
      <h2>Phone Book</h2>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ContactForm />
      {storage.length !== 0 && (
        <>
          <SearchContacts />
          <ContactList />
        </>
      )}
    </div>
  );
}
