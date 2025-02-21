interface Props {
  message: string;
}

function App({ message }: Props) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">{message}</h1>
    </div>
  );
}

export default App;