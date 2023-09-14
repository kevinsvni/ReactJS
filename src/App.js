import logo from './logo.svg';
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


import './appStyles.css';
import styles from './appStyles.module.css';

import Form from './components/form/Form';

function App() {
  return (
    <div className="App t">      
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

      <ParentRefsDemo /> 

    </div>
  );
}

export default App;
