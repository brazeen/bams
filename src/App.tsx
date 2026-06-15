import PageTabs from './components/PageTabs'

function App() {
  function getGreeting(name: string) {
    const hour = new Date().getHours()
    if (hour < 12) {
      return `Good morning, ${name}!`
    } else if (hour < 18) {
      return `Good afternoon, ${name}!`
    } else {
      return `Good evening, ${name}!`
    }
  }
  return (

    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="w-[90vw] h-[90vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">{getGreeting('branzin')}</h1>
        <PageTabs />
      </div>
      
    </div>
  )
}

export default App;
