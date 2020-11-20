import Questions from './questions.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      list: [],
      avatar: <img src='https://static-assets.teacherspayteachers.com/images/avatars/default.jpg' className='avatar-img'/>,
    };
  }



  componentDidMount() {
    fetch(`http://localhost:3004/product-id/${this.state.productId}/q-and-a`)
    .then(res => res.json())
    .then( (result) => {
      this.setState({
        list: result
      });
    },
    (error) => {
      console.log('error');
    });
  }

  render() {
    return (
      <div className='q-and-a-section'>
        <h3>Questions & Answers</h3>
        <p className='login'>Please <a className='login-link' href=''>log in</a> to post a question.</p>
        <div className='list-box'>
          <Questions list={this.state.list} avatar={this.state.avatar} />
        </div>
      </div>
    )
  }
}

export default App;