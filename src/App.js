import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddForm from "./components/AddForm/AddForm";
import ContactsContextProvider from "./components/contactsContext";
import ContactsList from "./components/ContactsList/ContactsList";
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter2/Counter2";
import Details from "./components/Details/Details";
import EditForm from "./components/EditForm/EditForm";
import CounterContextProvider from "./counterContext";

function App() {
  return (
    <ContactsContextProvider>
    <CounterContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/counter" element={<Counter2 />} />
      <Route path="/contacts" element={
      <>
      <AddForm /> 
      <ContactsList /> 
      </>} />
      <Route path="/edit/:id" element={<EditForm />} />
      <Route path="/details/:id" element={<Details/>} />
    </Routes>
    </BrowserRouter>
    </CounterContextProvider>
    </ContactsContextProvider>
  );
}

export default App;
