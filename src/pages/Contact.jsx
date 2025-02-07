import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import {  StarsCanvas } from "../components/canvas";
import SendingForm from "../components/SendingForm";
import Lottie from 'lottie-react';
import emailIcon from '../assets/emailicon.json';


function Contact() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [sending, setSending] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const formRef = useRef();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSending(true);
		emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					User_name: form.name,
					to_name: "Sharon",
					User_email: form.email,
					to_email: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
					message: form.message,
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setForm({
						name: "",
						email: "",
						message: "",
					});
					setSending(false);
					setMessageSent(true);
					
			
					setTimeout(() => {
						setMessageSent(false);
					}, 25000);
				},
				(error) => {
					console.log(error);
					setSending(false);
				}
			);
	};

	return (
		<div className='relative z-0 h-screen flex justify-center mb-20 md:mb-auto items-center'>
			{messageSent && (
				<div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce">
					Message sent successfully!
				</div>
			)}
			<div className=' lg:flex-row flex-col-reverse flex gap-10 overflow-hidden w-full'>
				<motion.div
					variants={slideIn("left", "tween", 0.2, 1)}
					className='flex-[0.75] md:py-5 bg-violet-950/30 px-8 pt-3 rounded-2xl'
				>
					<p className={styles.sectionSubText}>Get in touch</p>
					<h3 className={styles.sectionHeadText}>Contact.</h3>
					{sending ? (
						<div className='flex justify-center items-center h-[450px]'>
							<SendingForm />
						</div>
					) : (
						<form
							onSubmit={handleSubmit}
							ref={formRef}
							className='mt-4 flex flex-col gap-5 mb-12 md:mb-0'
						>
							<label className='flex flex-col gap-2'>
								<span className='text-violet-200'>Your Name</span>
								<input
									type='text'
									name='name'
									value={form.name}
									onChange={handleChange}
									placeholder='Enter your name'
									className='bg-violet-200/20 py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
									required
								/>
							</label>
							<label className='flex flex-col gap-4'>
								<span className='text-violet-200'>Your Email</span>
								<input
									type='email'
									name='email'
									value={form.email}
									onChange={handleChange}
									placeholder='Enter your Email'
									className='bg-violet-200/20 py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
									required
								/>
							</label>
							<label className='flex flex-col gap-4'>
								<span className='text-violet-200'>Your Message</span>
								<textarea
									rows={4}
									name='message'
									value={form.message}
									onChange={handleChange}
									placeholder='Enter your message'
									className='bg-violet-200/20 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
									required
								/>
							</label>
							<button
								type='submit'
								className='bg-violet-200 text-violet-950 py-3 px-8 outline-none md:w-fit w-full font-bold  rounded-xl shadow-md shadow-primary'
							>
								Send
							</button>
						</form>
					)}
				</motion.div>
				
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className='xl:flex-1 xl:h-auto md:h-[550px] pt-14 h-[350px] flex justify-center items-center'
                >
                    <Lottie 
                        animationData={emailIcon} 
                        className='w-64 md:w-full h-full pt-10 md:pt-10 object-contain'
                        loop={true}
                    />
                </motion.div>
			</div>
			<StarsCanvas />
		</div>
	);
}

export default SectionWrapper(Contact, "contact");
