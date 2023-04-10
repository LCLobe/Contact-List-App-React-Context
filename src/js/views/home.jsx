import React from "react";
import { ContextProvider } from "../store/Context.jsx";

import Footer from "../component/Footer.jsx";
import Header from "../component/Header.jsx";
import ContactsView from "./ContactsView.jsx";
import ContactModal from  "../component/ContactModal.jsx";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<ContextProvider >
			<Header />
			<ContactModal />
			<ContactsView />
			<Footer />
		</ContextProvider>
	);
};

export default Home;
