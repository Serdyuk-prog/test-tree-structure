import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import packageJson from '../package.json'

// Убираю моки для деплоя, не смог завести MSW на gh-pages
// async function enableMocking() {
//   const { worker } = await import('./mocks/browser')
//   return worker.start({
//     serviceWorker: {
//       // Provide a custom worker script URL, taking
//       // the "homepage" into account.
//       url: `${packageJson.homepage}/mockServiceWorker.js`,
//     },
//   })
// }

// enableMocking().then(() => {
//   ReactDOM.createRoot(document.getElementById('root')!).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   )
// })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)