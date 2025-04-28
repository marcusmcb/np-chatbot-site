import IconSpan from '../../components/IconSpan'

const OBSConfigurationPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<div className='installation-page-header'>
				4. OBS Configuration (optional)
			</div>
			<div className='installation-page-directions-step'>
				<p>
					If you'd like to send npChatbot's responses to your OBS software to
					display on-screen during your stream, enter in your OBS WebSocket
					address and password (if secured).
				</p>
				<p>
					Your OBS Websocket address needs to be given in the format shown in
					the example below (server-address:server-port).
				</p>
				<p>
					Click <span className='highlighted-installation-text'>Update</span> to
					save your settings.
				</p>
				<hr />
				<p className='highlighted-installation-text'>Note for Mac users:</p>
				<p>
					When updating or entering your OBS websocket address and password for
					the first time, you may see an error message from npChatbot noting
					that it was unable to save your data along with a MacOS system prompt.
				</p>
				<p>
					Select{' '}
					<span className='highlighted-installation-text'>Allow Access</span>{' '}
					from the prompt to allow npChatbot to connect to OBS and then press
					"Update" again. You should see a message indicating that your
					information was properly updated.
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
			<div className='installation-page-directions-step'>
				<p>
					<span className='highlighted-installation-text'>
						Using npChatbot Responses In OBS
					</span>
				</p>
				<p>
					To use npChatbot's responses in OBS, add a new{' '}
					<span className='highlighted-installation-text'>Text (GDI+)</span>{' '}
					source named{' '}
					<span className='highlighted-installation-text'>
						npchatbot-response
					</span>{' '}
					in any/all scenes that you'd like the responses displayed in. Disable
					the visibility of this element in each scene you have it placed in.{' '}
				</p>

				<p>
					With the OBS feature enabled, using the npChatbot commands will set
					this element as visible on-screen in OBS. The{' '}
					<span className='highlighted-installation-text'>
						Display time (in seconds)
					</span>{' '}
					option in your preferences will determine how long the text is
					displayed on screen before being cleared.
				</p>
				<p>
					<span className='highlighted-installation-text'>
						Styling & Testing On-Screen Text Placement in OBS
					</span>
				</p>
				<p>
					How you style and place the text data within your OBS overlays is up
					to you. The demo clips of npChatbot on the{' '}
					<span className='highlighted-installation-text'>Features</span> page
					are styled with a custom color and font imported into OBS with the
					display time set to 5 seconds.
				</p>
				<p>
					You can test placement in OBS by following the start up instructions
					for npChatbot without actually starting a live stream on Twitch
					<IconSpan />. Start a Live Playlist in Serato
					<IconSpan /> and then start and connect npChatbot to Twitch with OBS
					running.
				</p>
				<p>
					You can then use npChatbot's commands in OBS' chat dock to test the
					styling and placement of its responses in your OBS setup. Update your
					preferences to set the OBS display time to a longer duration (60
					seconds or more) to make it easier to test styling and placement while
					you're not streaming.
				</p>
			</div>
		</div>
	)
}

export default OBSConfigurationPanel
