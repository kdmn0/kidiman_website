import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://kidiman.com';
const DEFAULT_IMAGE = `${SITE_URL}/img/og-preview.png`;

function setMetaTag(attrName, attrValue, content) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content || '');
}

function setLinkTag(rel, href, hreflang = null) {
  const selector = hreflang 
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    if (hreflang) {
      element.setAttribute('hreflang', hreflang);
    }
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export default function SEO({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  path = '',
  schema = null,
  localized = true
}) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'tr';

  useEffect(() => {
    // 1. Clean Path and Canonical URLs
    const subPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
    const currentCanonicalUrl = localized
      ? `${SITE_URL}/${lang}${subPath}`
      : `${SITE_URL}${subPath}`;
    const trUrl = `${SITE_URL}/tr${subPath}`;
    const enUrl = `${SITE_URL}/en${subPath}`;
    const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`;

    // 2. Document Title
    if (title) {
      document.title = title;
    }

    // 3. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', 'Yiğit Arda Kıdıman');
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 4. Open Graph Tags
    setMetaTag('property', 'og:site_name', 'Yiğit Arda Kıdıman');
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', currentCanonicalUrl);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:image:alt', title);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:locale', lang === 'tr' ? 'tr_TR' : 'en_US');
    setMetaTag('property', 'og:locale:alternate', lang === 'tr' ? 'en_US' : 'tr_TR');

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@codewithkidiman');
    setMetaTag('name', 'twitter:creator', '@codewithkidiman');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);
    setMetaTag('name', 'twitter:image:alt', title);

    // 6. Canonical & Hreflang Tags
    setLinkTag('canonical', currentCanonicalUrl);
    if (localized) {
      setLinkTag('alternate', trUrl, 'tr');
      setLinkTag('alternate', enUrl, 'en');
      setLinkTag('alternate', trUrl, 'x-default');
    } else {
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((element) => element.remove());
    }

    // 7. Structured Data (JSON-LD)
    const basePersonSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Yiğit Arda Kıdıman',
      'alternateName': ['yigitardakidiman', 'Kıdıman', 'Arda Kıdıman'],
      'url': SITE_URL,
      'image': `${SITE_URL}/img/resim1.png`,
      'jobTitle': 'Software Developer',
      'worksFor': {
        '@type': 'Organization',
        'name': 'Volinor Defense & Tech Inc.',
        'url': 'https://www.volinor.com/'
      },
      'alumniOf': {
        '@type': 'EducationalOrganization',
        'name': 'OSTİM Technical University'
      },
      'sameAs': [
        'https://github.com/yigitardakidiman',
        'https://www.linkedin.com/in/yigitardakidiman/',
        'https://www.instagram.com/codewithkidiman/'
      ],
      'knowsAbout': [
        'Software Engineering',
        'React',
        'Three.js',
        'TypeScript',
        'JavaScript',
        'Python',
        'Django',
        'Tailwind CSS',
        'Web Development',
        'UI/UX Design'
      ]
    };

    const webSiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Yiğit Arda Kıdıman',
      'alternateName': ['Arda Kıdıman', 'kidiman.com', 'Yiğit Arda Kıdıman Portfolio'],
      'url': SITE_URL,
      'inLanguage': ['tr-TR', 'en-US'],
      'author': {
        '@type': 'Person',
        'name': 'Yiğit Arda Kıdıman'
      }
    };

    const profilePageSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      'mainEntity': basePersonSchema,
      'name': title,
      'description': description,
      'inLanguage': lang === 'tr' ? 'tr-TR' : 'en-US'
    };

    const schemasToInject = schema 
      ? [webSiteSchema, basePersonSchema, profilePageSchema, schema]
      : [webSiteSchema, basePersonSchema, profilePageSchema];

    let scriptElement = document.getElementById('dynamic-jsonld-schema');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'dynamic-jsonld-schema';
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(schemasToInject);

  }, [title, description, keywords, image, type, path, schema, localized, lang, location.pathname]);

  return null;
}
