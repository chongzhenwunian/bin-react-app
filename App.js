// import logo from './logo.svg';

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// import React from 'react';
// import { Button } from 'antd';
// import './App.css';


// const App = () => (
//   <div className="App">
//     <Button type="primary">Button</Button>
//     <p>你好</p>
//   </div>
// );

// export default App;


/*
* constructor 其实是Es6 里面带的一个属性，代表初始化，但是组件未挂载
* constructor的固定写法如下
* 比如你react 需要定义一些 
* State 的值就可以定义在 constructor里面，这个是一个很好的习惯
*/

// import React, { Component } from 'react';
//  class APP extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//     counter: 0,
//   }

//   }
//   render() {
//     return (
//       <div>
//         Hello word
//     </div>
//     )
//   }
// }

// export default APP;





import React ,{Component} from 'react'

class Smzq extends Component{
	constructor(props){
		console.log('01构造函数')		
		super(props)
		this.state={
			
		}
	}
	//组件将要挂载时候触发的生命周期函数
	componentWillMount(){
		console.log('02组件将要挂载')
	}
	//组件挂载完成时候触发的生命周期函数
	componentDidMount(){
		console.log('04组件将要挂载')
	}
	render(){
		console.log('03数据渲染render')
		return(
			<div>
				生命周期函数演示
			</div>
		) 
	}
}
export default Smzq