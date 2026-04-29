
import { RSSResponse, Article } from '../types';

const RSS_FEED_URL = 'https://www.siftrss.com/f/vQbz717GWQ';
const PROXY_URL = 'https://api.rss2json.com/v1/api.json?rss_url=';

/**
 * Intenta extraer la URL de la imagen principal del contenido HTML del artículo.
 * Busca específicamente el patrón: <img class='type:primaryImage' src="..."
 */
const extractPrimaryImage = (htmlContent: string): string | null => {
  if (!htmlContent) return null;
  
  // 1. Buscar imagen con clase type:primaryImage (común en Andro4all)
  const primaryRegex = /<img[^>]+class=['"][^'"]*type:primaryImage[^'"]*['"][^>]+src=['"]([^'"]+)['"]/i;
  const primaryMatch = htmlContent.match(primaryRegex);
  if (primaryMatch && primaryMatch[1]) return primaryMatch[1];

  // 2. Buscar cualquier imagen en el contenido
  const genericRegex = /<img[^>]+src=['"]([^'"]+)['"]/i;
  const genericMatch = htmlContent.match(genericRegex);
  if (genericMatch && genericMatch[1]) return genericMatch[1];
  
  return null;
};

export const fetchLatestArticles = async (limit: number = 5): Promise<Article[]> => {
  try {
    // Usamos el Proxy de rss2json de forma más directa
    const response = await fetch(`${PROXY_URL}${encodeURIComponent(RSS_FEED_URL)}&api_key=`); // api_key vacía usa el plan gratuito
    
    if (!response.ok) {
      console.warn('RSS Fetch failed, status:', response.status);
      return [];
    }
    
    const data: RSSResponse = await response.json();
    
    if (data.status !== 'ok') {
       console.error('RSS Proxy Error:', data);
       return [];
    }

    // El feed de SiftRSS ya viene filtrado, así que mapeamos directamente
    const processedArticles = data.items.map(article => {
      // Extraer imagen del contenido o descripción
      const extractedImg = extractPrimaryImage(article.content) || 
                           extractPrimaryImage(article.description);
      
      return {
        ...article,
        thumbnail: extractedImg || article.thumbnail || (article.enclosure?.link) || ''
      };
    });

    return processedArticles.slice(0, limit);
  } catch (error) {
    console.error('Error fetching RSS:', error);
    return [];
  }
};
