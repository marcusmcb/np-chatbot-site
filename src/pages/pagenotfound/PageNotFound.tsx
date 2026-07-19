import Seo from '../components/Seo'

const NotFoundPage = (): JSX.Element => {
	return (
		<div className='page-not-found'>
			<Seo
				title='Page Not Found | npChatbot'
				description='The requested npChatbot page could not be found.'
				path='/pagenotfound'
				noIndex
			/>
			<h1>Looks like we don't have a page for that...</h1>
		</div>
	)
}

export default NotFoundPage
