import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CategoryCards from './components/CategoryCards';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50">
      <Header />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <MainContent />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
          
        </div>
        <div>
          <CategoryCards/>
          </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;