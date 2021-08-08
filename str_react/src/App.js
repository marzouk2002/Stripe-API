import logo from './logo.svg';
import './App.css';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

function App() {
  const stripePromise = loadStripe('pk_test_51JL7huEtWyVXRbR8ys9BH5YKN3lm1FFsm73GzBDSDimQYfSnuKjf2LwP0vi9jAXfFzjLQbwRjPQ1ySC3Zk6UNFdP00C2BrjrBy');

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div class="col-md-6 text-center">
      <h1 class="display-3 mt-3 pt-5">Web Development Ebook</h1>
      <p class="lead">learn to think outside the box for better<br/> Web Development</p>
      <form action="/charge" method="POST">
        <script
          src="https://checkout.stripe.com/checkout.js" class="stripe-button"
          data-key="{{stripePublicKey}}"
          data-amount="2500"
          data-name="Web Development Ebook"
          data-description="Ebook written by Marzouk Youssouf"
          data-image="/img/marketplace.png"
          data-locale="auto">
        </script>
        <script>
          // Hide default stripe button
          document.getElementsByClassName('stripe-button-el')[0].style.display = 'none';
        </script>
        <button type="submit" class="btn btn-outline-dark text-white btn-lg">Purchase For $25</button>
      </form>
    </div>
  );
}

export default App;
