const OBSConfigurationPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<div className='installation-page-header'>
				OBS Configuration (optional)
			</div>
			<div className='installation-page-directions-step'>
				<p>
					If you'd like to send npChatbot's responses to your OBS configuration,
					enter in your OBS WebSocket address and password (if secured).
				</p>
				<p>
					Your OBS Websocket address needs to be given in the format shown in
					the example below (server-address:server-port).
				</p>
				<p>
					Click <span className='highlighted-installation-text'>Update</span> to
					save your settings.
				</p>

				<img
					alt='npChatbot instructions, step 9'
					src='/images/installation/setup_08_final.png'
				/>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					You can find your OBS Websocket address and password (if secured) by
					going to the{' '}
					<span className='highlighted-installation-text'>Tools</span> menu and
					selecting{' '}
					<span className='highlighted-installation-text'>
						Websocket Sever Settings
					</span>
					.
				</p>
				<p>
					Select{' '}
					<span className='highlighted-installation-text'>
						Show Connect Info
					</span>{' '}
					to view your websocket's Server IP, Server Port, and Server Password.
				</p>

				<img
					alt='npChatbot instructions, step 9'
					src='/images/installation/obs_setup_01_final.png'
				/>
			</div>
		</div>
	)
}

export default OBSConfigurationPanel
