import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';  

const App = () => {
  return (
    <div className="App">

      
      <header className="hero-section bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 mb-4">Welcome to the Future of Service!</h1>
          <p className="lead mb-4">We’re here to make your life easier with the best solutions, tailored just for you. Ready to get started?</p>
          <a className="btn btn-light btn-lg" href="#signup" role="button">Let’s Do This!</a>
        </div>
      </header>

    
      <section className="features py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="feature-box">
                <h3>Top-notch Service</h3>
                <p>Experience the best solutions with round-the-clock support. We’ve got your back!</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-box">
                <h3>Industry Experts</h3>
                <p>Our team is made up of professionals who know what they’re doing and are passionate about delivering results.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-box">
                <h3>Always Available</h3>
                <p>We’re here whenever you need us. Fast, reliable support is just a click away.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Why Work with Us?</h2>
          <p className="lead mb-4">We’re passionate about making sure you succeed. Join us and discover how we can make a difference together.</p>
          <a className="btn btn-success btn-lg" href="#">Find Out More</a>
        </div>
      </section>

  
      <section className="py-5 bg-light" id="signup">
        <div className="container text-center">
          <h2 className="mb-4">Sign Up for Exciting Updates</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Enter your email" required />
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Count Me In!</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer bg-dark text-white text-center py-4">
        <p>© 2025 Your Company. Proudly serving you with passion.</p>
      </footer>

    </div>
  );
}

export default App;
