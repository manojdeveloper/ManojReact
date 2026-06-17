import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { Contact, myformdata } from './components/Contact/Contact';
import { ProjectLinks } from './components/ProjectLinks/ProjectLinks';
import StoreCardsList from './components/StoreCardsList/StoreCardsList';
import {EventHandling} from './components/EventHandling/EventHandling';
import {EventProps} from './components/EventHandling/EventProps';
import {EventPropagation} from './components/EventHandling/EventPropagation';
import {LiftStateUp} from './components/LiftStateUp/LiftStateUp';
import {ManojTest} from './components/ManojTest/ManojTest';
import {ImageSliderTask} from './components/ImageSliderTask/ImageSliderTask';
import {UseStateHook} from './components/Hooks/useState/useStateHook';
import {UseEffectHook} from './components/Hooks/useEffect/UseEffectHook';
import {PokemonAppTask} from './components/PokemonAppTask/PokemonAppTask';
import {UseRefHook} from './components/Hooks/useRef/useRefHook';
import {UseIdHook} from './components/Hooks/useId/useIdHook';
import {UseContextHook} from './components/Hooks/useContext/UseContextHook';
import {CustomHookComponent} from './components/Hooks/customHook/CustomHookComponent';
import {UseApi} from './components/Hooks/useApi/UseApi';
import {UseReducerHook} from './components/Hooks/useReducer/UseReducerHook';
import {ReactMemo} from './components/Hooks/memo/ReactMemo';
import { UseMemoHook } from './components/Hooks/useMemo/useMemoHook';
import { UseCallbackHook } from './components/Hooks/useCallback/UseCallbackHook';
import { TanstackQuery } from './components/TanstackQuery/TanstackQuery';
import { Accordian } from './components/Accordian/Accordian';
import { ReactRedux } from './components/ReactRedux/ReactRedux';
import { HighOrderComponent } from './components/HighOrder/HighOrderComponent';
import { TodoApp } from './components/TodoApp/TodoApp';
import { PropTypeCheck } from './components/PropType/PropTypeCheck.js';

export const myroute = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <ProjectLinks />},
      {path: "/storecardslist", element: <StoreCardsList />},
      {path: "/eventhandling", element: <EventHandling />},
      {path: "/eventprops", element: <EventProps />},
      {path: "/eventpropagation", element: <EventPropagation />},
      {path: "/liftstateUp", element: <LiftStateUp />},
      //{path: "/manojtest/:productId", element: <ManojTest />},
      {path: "/imageslidertask", element: <ImageSliderTask />},
      {path: "/pokemonapptask", element: <PokemonAppTask />},
      {path: "/usestatehook", element: <UseStateHook />},
      {path: "/useeffecthook", element: <UseEffectHook />},
      {path: "/userefhook", element: <UseRefHook />},
      {path: "/useidhook", element: <UseIdHook />},
      {path: "/usecontexthook", element: <UseContextHook />},
      {path: "/customhookcomponent", element: <CustomHookComponent />},
      {path: "/useapi", element: <UseApi />},
      {path: "/usereducerhook", element: <UseReducerHook />},
      {path: "/reactmemo", element: <ReactMemo />},
      {path: "/usememohook", element: <UseMemoHook />},
      {path: "/usecallbackhook", element: <UseCallbackHook />},
      {path: "/highordercomponent", element: <HighOrderComponent />},
      {path: "/todoapp", element: <TodoApp />},
      {path: "/proptype", element: <PropTypeCheck />}
    ]
  },
  {
    path: "/manojtest/:productId",
    element: <ManojTest />,
  },
  {
    path: "/contact",
    element: <Contact />,
    action: myformdata,
  },
  {
    path: "/accordian",
    element: <Accordian />,
  },
  {
    path: "/tanstack",
    element: <TanstackQuery />,
  },
  {
    path: "/reactredux",
    element: <ReactRedux />
  }
])