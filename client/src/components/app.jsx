import Questions from './questions.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 1,
      list: [],
      avatar: <img src='https://static-assets.teacherspayteachers.com/images/avatars/default.jpg' className='avatar-img'/>,
      thumbs: <img src='https://www.flaticon.com/svg/static/icons/svg/633/633759.svg' className='thumbs'/>
    };
    this.handleHelpful =  this.handleHelpful.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:3004/product/${this.state.productId}/q-and-a`)
    .then(res => res.json())
    .then( (result) => {
      this.setState({
        list: result
      });
    })
    .catch(err) => {
      throw err;
    });
  }

  handleHelpful(event) {
    const answerId = Number(event.target.attributes[0].nodeValue);
    var tempList = this.state.list;
    for(var i = 0; i < tempList.length; i+= 1) {
      if (tempList[i].answer_id === answerId) {
        tempList[i].answer_helpful += 1;
      }
    };
    this.setState({
      list: tempList
    });

    event.preventDefault();

    fetch(`http://localhost:3004/product/${this.state.productId}/helpful`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({answerId: answerId})
    })
    .catch(err) => {
      throw err;
    });
  }

  render() {
    return (
      <div className='q-and-a-section'>
        <h3>Questions & Answers</h3>
        <p className='login'>Please <a className='login-link' href=''>log in</a> to post a question.</p>
        <div className='list-box'>
          <Questions list={this.state.list} avatar={this.state.avatar} thumbs={this.state.thumbs} handleHelpful={this.handleHelpful}/>
        </div>
      </div>
    )
  }
}

export default App;