import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionsList from './components/TransactionsList'
import AddTransaction from './components/AddTransaction'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <AddTransaction />
      </div>
    </div>
  )
}

export default App;
