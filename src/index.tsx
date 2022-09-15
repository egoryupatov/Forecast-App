import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {App} from './App';
import {GlobalStyles} from "./styles/Global.styled";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PageNotFound} from "./components/PageNotFound/PageNotFound";
import {City} from "./components/City";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/:city" element={<City/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>

                <GlobalStyles/>

            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

