class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3004/productid=1/qanda')
    .then(res => res.json())
    .then( (result) => {
      console.log(result);
    },
    (error) => {
      console.log('error');
    });
  }

  render() {
    return (
      <div>Hello</div>
    )
  }
}

export default App;