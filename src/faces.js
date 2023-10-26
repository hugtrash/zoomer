import facesFilterActive from './features/facesFilterActive'
facesFilterActive()
import insertScript from './utilities/insertScript'
insertScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js', 'body', 'async')
insertScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js', 'body', 'async')
