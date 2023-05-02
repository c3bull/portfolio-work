import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import i18n from "./components/LangConfig";
import {I18nextProvider} from "react-i18next";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <I18nextProvider i18n={i18n} defaultNS={'translation'}>
                <App/>
            </I18nextProvider>
        </Suspense>
    </React.StrictMode>,
)
