import React from 'react'

type JsonLd = Record<string, unknown>

type SeoProps = {
	title: string
	description: string
	path?: string
	image?: string
	type?: string
	noIndex?: boolean
	jsonLd?: JsonLd | JsonLd[]
}

const SITE_URL = 'https://www.npchatbot.com'
const SITE_NAME = 'npChatbot'
const DEFAULT_IMAGE = `${SITE_URL}/images/logos/npchatbot-tile-icon-only.png`

const setMetaTag = (selector: string, attribute: string, value: string) => {
	let element = document.head.querySelector<HTMLMetaElement>(selector)

	if (!element) {
		element = document.createElement('meta')
		const match = selector.match(/\[(name|property)="(.+)"\]/)
		if (match) {
			element.setAttribute(match[1], match[2])
		}
		document.head.appendChild(element)
	}

	element.setAttribute(attribute, value)
}

const setLinkTag = (rel: string, href: string) => {
	let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

	if (!element) {
		element = document.createElement('link')
		element.setAttribute('rel', rel)
		document.head.appendChild(element)
	}

	element.setAttribute('href', href)
}

const removeManagedJsonLd = () => {
	document
		.querySelectorAll('script[data-npchatbot-seo="json-ld"]')
		.forEach((element) => element.remove())
}

const Seo = ({
	title,
	description,
	path = '/',
	image = DEFAULT_IMAGE,
	type = 'website',
	noIndex = false,
	jsonLd,
}: SeoProps): null => {
	React.useEffect(() => {
		const canonicalUrl = new URL(path, SITE_URL).toString()

		document.title = title
		setMetaTag('meta[name="description"]', 'content', description)
		setMetaTag('meta[property="og:type"]', 'content', type)
		setMetaTag('meta[property="og:site_name"]', 'content', SITE_NAME)
		setMetaTag('meta[property="og:title"]', 'content', title)
		setMetaTag('meta[property="og:description"]', 'content', description)
		setMetaTag('meta[property="og:url"]', 'content', canonicalUrl)
		setMetaTag('meta[property="og:image"]', 'content', image)
		setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image')
		setMetaTag('meta[name="twitter:title"]', 'content', title)
		setMetaTag('meta[name="twitter:description"]', 'content', description)
		setMetaTag('meta[name="twitter:image"]', 'content', image)
		setMetaTag(
			'meta[name="robots"]',
			'content',
			noIndex ? 'noindex, nofollow' : 'index, follow'
		)
		setLinkTag('canonical', canonicalUrl)

		removeManagedJsonLd()

		if (jsonLd) {
			const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
			items.forEach((item) => {
				const script = document.createElement('script')
				script.type = 'application/ld+json'
				script.setAttribute('data-npchatbot-seo', 'json-ld')
				script.text = JSON.stringify(item)
				document.head.appendChild(script)
			})
		}
	}, [description, image, jsonLd, noIndex, path, title, type])

	return null
}

export default Seo