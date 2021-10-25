import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <QueryClientProvider client={queryClient}>
                  <ReactQueryDevtools initialIsOpen={false} />
                  <App/>
              </QueryClientProvider>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

