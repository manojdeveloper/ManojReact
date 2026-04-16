import './App.scss';
import { Fragment } from 'react/jsx-runtime';
import { RouterProvider } from 'react-router';
import { myroute } from './MyRouting';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './Store';

function App() {
  let queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={myroute} />
      </Provider>
    </QueryClientProvider>
  )
}

export default App;
