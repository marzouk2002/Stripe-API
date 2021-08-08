import StripeCheckout from 'react-stripe-checkout';

function App() {
  return (
    <StripeCheckout
        stripeKey="my_PUBLISHABLE_stripekey"
        amount="2500"
        name="Web Development Ebook"
        description="Ebook written by Marzouk Youssouf"
        locale="auto"
        
      ><button className="btn btn-primary">
      pay now
    </button></StripeCheckout>
  );
}

export default App;

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