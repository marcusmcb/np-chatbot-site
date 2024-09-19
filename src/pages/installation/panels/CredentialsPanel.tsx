import '../installationpage.css'

const CredentialsPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<div className='installation-page-header'>2. Storing Your Credentials</div>
			<div className='installation-page-directions-step'>
				<p>The follow credentials are required:</p>
				<p>
					- Your primary Twitch<span className='icon-span'>©</span> channel name
				</p>
				<p>
					- Your Twitch<span className='icon-span'>©</span> chatbot's channel
					name (the account you've authorized npChatbot with)
				</p>
				<p>
					- your Serato
					<span className='icon-span'>©</span> profile display name
				</p>
				<p>
					Click <span className='highlighted-installation-text'>Update</span> to
					save your settings and credentials.
				</p>
				<img
					alt='npChatbot instructions, step 4'
					src='/images/installation/setup_05_final.png'
				/>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					To find your Serato<span className='icon-span'>©</span> profile
					display name,{' '}
					<a
						href='https://id.serato.com/en/login'
						rel='noreferrer'
						target='_blank'
					>
						sign in
					</a>{' '}
					to your Serato<span className='icon-span'>©</span> profile and select{' '}
					<span className='highlighted-installation-text'>Account</span> from
					the menu on the upper-right.
				</p>
				<p>
					Enter your Serato Display Name in npChatbot as it appears in the{' '}
					<span className='highlighted-installation-text'>
						Account Overview
					</span>{' '}
					section of your profile.
				</p>
				<img
					alt='npChatbot instructions, step 4'
					src='/images/installation/serato_04_final.png'
				/>
			</div>
		</div>
	)
}

export default CredentialsPanel
