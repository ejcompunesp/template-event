import Avatar from 'components/Avatar'
import Card from 'components/Card'

function App() {
  return (
    <div className="bg-red-100 min-h-screen items-center justify-center h-screen flex">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex-row items-center space-x-4">
        <div>
          <Avatar />
        </div>
        <div className="mt-2">
          <div className="text-xl font-medium text-black">Chat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
        <div className="mt-4">
          <Card
            title="Interest topic"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. LorIpsum.
            "
          />
        </div>
      </div>
    </div>
  )
}

export default App
