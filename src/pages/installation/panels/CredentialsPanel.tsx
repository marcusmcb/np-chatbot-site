import IconSpan from '../../../pages/components/IconSpan'
import '../installationpage.css'

const CredentialsPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<h1 className='installation-page-header'>
				2. Storing Your Credentials
			</h1>
			<div className='installation-page-directions-step'>
				<p>The follow credentials are required:</p>
				<p>
					- Your primary Twitch
					<IconSpan /> channel name
				</p>
				<p>
					- Your Twitch
					<IconSpan /> chatbot's channel name (the account you've authorized
					npChatbot with)
				</p>
				<p>
					- your Serato
					<IconSpan /> profile display name
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
					To find your Serato
					<IconSpan /> profile display name,{' '}
					<a
						href='https://id.serato.com/en/login'
						rel='noreferrer'
						target='_blank'
					>
						sign in
					</a>{' '}
					to your Serato
					<IconSpan /> profile and select{' '}
					<span className='highlighted-installation-text'>Account</span> from
					the menu on the upper-right.
				</p>
				<p>
					Enter your Serato
					<IconSpan /> Display Name in npChatbot as it appears in the{' '}
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
