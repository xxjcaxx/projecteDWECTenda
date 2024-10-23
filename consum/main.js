// Import our custom CSS
import './style/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { getComentaris } from './view/comentaris_supabase'

document.addEventListener("DOMContentLoaded" ,async() => { await console.log(JSON.stringify(getComentaris(1)))
})