import { Provider } from "react-redux";
import './App.css'
import Product from './component/Product';
import { store } from './redux/store'

function App() {
  return (
    <>
    <Provider store={store}>
        <h1>App Component</h1>
        <Product />
        <hr />
      </Provider> 
    </>
  )
}

export default App
