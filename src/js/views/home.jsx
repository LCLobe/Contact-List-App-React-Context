import React from "react";
import { ContextProvider } from "../store/Context.jsx";
import ReactDOM from 'react-dom';

import Footer from "../component/Footer.jsx";
import Header from "../component/Header.jsx";
import ContactsView from "./ContactsView.jsx";
import ContactModal from  "../component/ContactModal.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<ContextProvider >
			<div className="container">
				<Header />
				<ContactModal />
				<ContactsView />
				<Footer />
			</div>
		</ContextProvider>
	);
};

export default Home;
