import './feedbackpage.css'

const FeedbackPage = (): JSX.Element => {
	return (
		<div className='feedback-page'>
			<div className='feedback-page-header'>Feedback & Support</div>
			<div className='feedback-page-subheader'>Bugs & Errors</div>
			<div className='feedback-page-container'>
				<div className='feedback-page-item'>
					<p>
						npChatbot is currently a beta release, and we're aware that there
						may be bugs or errors that we haven't caught yet.
					</p>
					<p>
						If you encounter any issues, please let us know so we can address
						them as soon as possible. We appreciate your help in making
						npChatbot a solid experience for both streamer and audience alike.
					</p>
					<p>
						Screenshots and additional details regarding any errors you may
						encounter greatly help in the debugging process.
					</p>
				</div>
			</div>
			<div className='feedback-page-subheader'>Beta Testing</div>
			<div className='feedback-page-container'>
				<div className='feedback-page-item'>
					<p>
						If you'd like to be included in the beta testing process for
						npChatbot, please reach out with your name, email address, and
						Twitch channel link and we'll be in touch!
					</p>
				</div>
			</div>
			<div className='feedback-page-subheader'>Suggestions & Improvements</div>
			<div className='feedback-page-container'>
				<div className='feedback-page-item'>
					<p>
						npChatbot is a work in progress, and we're always looking for ways
						to improve the app and its functionality.
					</p>
					<p>
						If you have ideas on how to improve this project, get in touch! We'd
						love to hear what you have in mind.
					</p>
				</div>
			</div>
			<div className='feedback-page-item'>
				<a
					className='highlighted-text mail-link'
					href='mailto:npchatbotapp@gmail.com'
				>
					<span>Send Us A Message</span>
				</a>
			</div>
		</div>
	)
}

export default FeedbackPage
