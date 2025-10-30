import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  schema?: Record<string, any>;
}

const SEO = ({ title, description, keywords, ogImage, ogUrl, schema }: SEOProps) => {
  const siteUrl = 'https://almeone.com'; // Replace with your actual domain
  const defaultImage = '/logo.png'; // Replace with your default social sharing image path
  
  // Default organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Almeone',
    url: siteUrl,
    logo: `${siteUrl}${defaultImage}`,
    sameAs: [
      'https://twitter.com/almeone',
      'https://linkedin.com/company/almeone',
      'https://facebook.com/almeone'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service'
    }
  };

  // Generate page-specific schema if provided
  const pageSchema = schema ? {
    '@context': 'https://schema.org',
    ...schema,
    url: ogUrl || siteUrl,
    image: ogImage || `${siteUrl}${defaultImage}`
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || `${siteUrl}${defaultImage}`} />
      <meta property="og:url" content={ogUrl || siteUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || `${siteUrl}${defaultImage}`} />
      
      {/* Additional SEO best practices */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="language" content="English" />
      <link rel="canonical" href={ogUrl || siteUrl} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {pageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;