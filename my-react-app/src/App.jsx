// Giả sử thầy yêu cầu các em tạo một App với lời chào
function App() {
  const greeting = "Chào mừng đến với React!";

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <p>Đây là component đầu tiên của bạn</p>
    </div>
  );
}

export default App;