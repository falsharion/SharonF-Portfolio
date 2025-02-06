import { Analytics } from "@vercel/analytics/react";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import Loading from "./components/canvas/Loading";
import RedirectToHome from "./components/RedirectToHome";
import Footer from "./components/Footer"

const Home = lazy(
	async () =>
		await import("./pages").then((module) => ({
			default: module.Home,
		}))
);
const Workpage = lazy(
	async () =>
		await import("./pages").then((module) => ({
			default: module.Work,
		}))
);
const ContactPage = lazy(
	async () =>
		await import("./pages").then((module) => ({
			default: module.Contact,
		}))
);

const App = () => {
	return (
		<>
			<div className='bg-primary pt-7'>
				<Suspense fallback={<Loading />}>
					<BrowserRouter   future={{
    v7_startTransition: true, 
    v7_relativeSplatPath: true
  }}>
						<Navbar />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='contact' element={<ContactPage />} />
							<Route path='Experience' element={<Workpage />} />
							<Route path='*' element={<RedirectToHome />} />
						</Routes>
						<Footer />
					</BrowserRouter>
				</Suspense>
			</div>
			<Analytics />
		</>
	);
};

export default App;
