import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import Greet from './components/Greet';
import MessageState from './components/MessageState';
import Counter from './components/Counter';
import FunctionEventClick from './components/FunctionEventClick';
import ClassEventClick from './components/ClassEventClick';
import EventHandlerBinding from './components/EventHandlerBinding';
import ParentComponent from './components/methodasprop/ParentComponent';
import ListRendering from './components/listrendering/ListRendering';
import ArrayRendering from './components/arrayrendering/ArrayRendering';
import CssStyling from './components/cssstyling/CssStyling';
import ParentComp from './components/purecomponents/ParentComp';
import ParentRefsDemo from './components/references/ParentRefsDemo';
import PortalDemo from './components/PortalDemo';
import Hero from './components/errorboundary/Hero';
import ErrorBoundary from './components/errorboundary/ErrorBoundary';
import ParentHOC from './components/hoc/ParentHOC';
import ParentRenderProps from './components/renderprops/ParentRenderProps';
import Context from './components/context/ParentContext';
import HttpGetRequest from './components/http/HttpGetRequest';
import HttpPostRequest from './components/http/HttpPostRequest';


import ClassCounter from './hookcomponents/ClassCounter';
import HookCounter from './hookcomponents/HookCounter';
import HookCounterPrevState from './hookcomponents/HookCounterPrevState';
import HookUsestateObject from './hookcomponents/HookUsestateObject';
import HookUsestateArray from './hookcomponents/HookUsestateArray';
import HookUseeffectCounter from './hookcomponents/HookUseeffectCounter';
import HookUseeffectConditionalRun from './hookcomponents/HookUseeffectConditionalRun';
import HookMousePosition from './hookcomponents/HookMousePosition';
import HookMouseContainer from './hookcomponents/HookMouseContainer';


import './appStyles.css';
import styles from './appStyles.module.css';

import Form from './components/form/Form';

function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent name='Kevin' lname='Savani'/> */}

      {/* <ClassComponent name='Bhumi' lname='Savani'/> */}

      {/* <Greet name='Kevin' lname='Savani'>
        <p>This is Child Property</p>
      </Greet> */}

      {/* <MessageState /> */}

      {/* <Counter /> */}

      {/* <FunctionEventClick /> */}

      {/* <ClassEventClick /> */}

      {/* <EventHandlerBinding /> */}

      {/* <ParentComponent /> */}

      {/* <ListRendering /> */}

      {/* <ArrayRendering /> */}

      {/* <CssStyling largeFont={true} /> */}
      {/* <h1 className='error'>Error</h1> */}    {/* used from appStyles.css */}
      {/* <h1 className={styles.success}>Success</h1> */}    {/* used from appStylesmodule.css */}

      {/* <Form /> */}

      {/* <ParentComp /> */}

      {/* <ParentRefsDemo />  */}

      {/* <PortalDemo />  */}

      {/* <ErrorBoundary><Hero heroName="Kevin" /></ErrorBoundary>
      <ErrorBoundary><Hero heroName="Dhruvin" /></ErrorBoundary>
      <ErrorBoundary><Hero heroName="Bhumi" /></ErrorBoundary> */}

      {/* <ParentHOC /> */}

      {/* <ParentRenderProps /> */}

      {/* <Context /> */}

      {/* <HttpGetRequest /> */}

      {/* <HttpPostRequest /> */}


      {/******************************* Hooks  *******************************/}
      {/* <ClassCounter /> */}

      {/* <HookCounter /> */}

      {/* <HookCounterPrevState /> */}

      {/* <HookUsestateObject /> */}

      {/* <HookUsestateArray /> */}

      {/* <HookUseeffectCounter /> */}

      {/* <HookUseeffectConditionalRun /> */}

      {/* <HookMousePosition /> */}

      <HookMouseContainer />

    </div>
  );
}

export default App;
