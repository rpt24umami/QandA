import Questions from './questions.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      list: [],
      avatar: <img src='https://static-assets.teacherspayteachers.com/images/avatars/default.jpg' className='avatar-img' />,
      flag: <img src='https://www.flaticon.com/svg/static/icons/svg/455/455582.svg' className='flag' />
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
          <Questions list={this.state.list} avatar={this.state.avatar} flag={this.state.flag}/>
        </div>
      </div>
    )
  }
}

export default App;