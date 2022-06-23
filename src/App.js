import logo from './logo.svg';
import './App.css';
import Product from './product';
function App() {
  return (
   <div>
    <h1>Amazon Props</h1>
    <Product 
      name="The Book of Trees" 
      description='your book on trees' 
      price="19.99" />
    <Product 
      name="Amazon AI" 
      description='AI Book' 
      price="29.99" />
    <Product 
      name="Best Pizza" 
      description='So much pizza' 
      price="9.99" />
   </div>
  );
}

export default App;
