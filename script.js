let get = document.getElementById('get');
let post = document.getElementById('post');
let put = document.getElementById('put');
let delete1 = document.getElementById('delete');
let simData = document.getElementById('simdata');


get.addEventListener('click',function get() {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos'
    })
      .then(res => console.log(res))
      .catch(err => console.error(err));
  });

  post.addEventListener('click', function post(){
    axios({
      method: 'post',
      url : 'https://jsonplaceholder.typicode.com/todos',
      data: {
        title: 'New todosData',
        completed: false
      }
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
  })

  put.addEventListener('click', function put(){
    axios({
      method: 'put',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      data: {
        title: 'Putting new todosData',
        completed: false
      }
    }).then(res => console.log(res))
      .catch(err => console.error(err));
  })

  delete1.addEventListener('click', function remove(){
    axios({
      method: 'delete',
      url: 'https://jsonplaceholder.typicode.com/todos/1'
    }).then(res => console.log(res))
    .catch(err => console.error(err));
  })

  simData.addEventListener('click', function sim(){
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/todos'),
      axios.get('https://jsonplaceholder.typicode.com/posts')
    ])
    .then(res => {
      console.log(res[0])
      console.log(res[1])
    })
    .catch(err => console.error(err));
  })