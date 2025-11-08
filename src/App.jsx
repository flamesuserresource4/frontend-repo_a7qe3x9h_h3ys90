import LearnSection from './components/LearnSection';
import BeforeAfter from './components/BeforeAfter';
import Host from './components/Host';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="font-inter bg-[#001B5A]">
      {/* Note: Hero and Footer are assumed to exist externally, so we render from Section Two onwards */}
      <LearnSection />
      <BeforeAfter />
      <Host />
      <FAQ />
    </div>
  );
}

export default App;
