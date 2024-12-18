import React from 'react'
import Propsperson from './components/Propsperson'
import Counter from './components/Counter'
import Lists from './components/Lists'
import Filter from './components/Filter'
import UseEffect from './components/UseEffect'
import Accordion from './components/Accordion'
import FormHandling from './components/FormHandling'
import LiftingStateupChild from './components/LiftingStateupChild'
import CustomHookEx from './components/CustomHookEx'

const App = () => {
  function parent(greet) {
    alert('Value from Child:' + greet)
  }
  return (
    <>
      <LiftingStateupChild data={'passtoChild'} function={parent} />
      <div>
        <Propsperson name={'Ritik'} age={24} salary={25000} />
        <Propsperson name={'Sharma'} age={25} />
        <Propsperson name={'Dhungana'} age={28} salary={75000} />
        <Propsperson name={'RSD'} age={28} salary={150000} />
      </div>
      <Counter />
      <Lists />
      <Filter />
      <UseEffect />
      <Accordion />
      <FormHandling />
      <CustomHookEx />
    </>

  )
}

export default App
