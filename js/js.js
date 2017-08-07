/*
//第一次改进,行为与结构分离
var calculator=document.querySelector('#calculator');
var formerInput=calculator.querySelector('.formerInput');
var laternput=calculator.querySelector('.laterInput');
var sign=calculator.querySelector('.sign');
var resultOutput=calculator.querySelector('.resultOutput');
var btns=calculator.querySelectorAll('.btn')

btns[0].onclick=addHandler;
btns[1].onclick=subtractHandler;
btns[2].onclick=multiplyHandler;
btns[3].onclick=divideHandler;

function addHandler(){
	sign.innerHTML='+';
	resultOutput.innerHTML=+formerInput.value+ +laternput.value;
}
function subtractHandler(){
	sign.innerHTML='+';
	resultOutput.innerHTML=formerInput.value-laternput.value;
}
function multiplyHandler(){
	sign.innerHTML='+';
	resultOutput.innerHTML=formerInput.value*laternput.value;
}
function divideHandler(){
	sign.innerHTML='+';
	resultOutput.innerHTML=formerInput.value/laternput.value;
}*/






// var calculator=document.querySelector('#calculator');
// var formerInput=calculator.querySelector('.formerInput');
// var laternput=calculator.querySelector('.laterInput');
// var sign=calculator.querySelector('.sign');
// var resultOutput=calculator.querySelector('.resultOutput');
// var btns=calculator.querySelectorAll('.btn')

// //绑定事件
// //第二次修改，循环使用,加了title
// for(var i=0;i<btns.length;i++){
// 	btns[i].onclick=function(){
// 		switch(this.title){
// 			case 'add':
// 			addHandler();
// 			break;
// 			case 'subtract':
// 			subtractHandler();
// 			break;
// 			case 'multiply':
// 			multiplyHandler();
// 			break;
// 			case 'divide':
// 			divideHandler();
// 			break;
// 		}
// 	}
// }
// /*btns[0].onclick=addHandler;
// btns[1].onclick=subtractHandler;
// btns[2].onclick=multiplyHandler;
// btns[3].onclick=divideHandler;*/

// function addHandler(){
// 	sign.innerHTML='+';
// 	resultOutput.innerHTML=+formerInput.value+ +laternput.value;
// }
// function subtractHandler(){
// 	sign.innerHTML='+';
// 	resultOutput.innerHTML=formerInput.value-laternput.value;
// }
// function multiplyHandler(){
// 	sign.innerHTML='+';
// 	resultOutput.innerHTML=formerInput.value*laternput.value;
// }
// function divideHandler(){
// 	sign.innerHTML='+';
// 	resultOutput.innerHTML=formerInput.value/laternput.value;
// }




// //第三次改进
// var calculator=document.querySelector('#calculator');
// var formerInput=calculator.querySelector('.formerInput');
// var laternput=calculator.querySelector('.laterInput');
// var sign=calculator.querySelector('.sign');
// var resultOutput=calculator.querySelector('.resultOutput');
// var btns=calculator.querySelectorAll('.btn')

// //绑定事件
// each(btns,function(index,elem){
// 	elem.onclick=function(){
// 		switch(this.title){
// 			case 'add':
// 			addHandler();
// 			break;
// 			case 'subtract':
// 			subtractHandler();
// 			break;
// 			case 'multiply':
// 			multiplyHandler();
// 			break;
// 			case 'divide':
// 			divideHandler();
// 			break;
// 	}
// }})
// // for(var i=0;i<btns.length;i++){
// // 	btns[i].onclick=function(){
// // 		switch(this.title){
// // 			case 'add':
// // 			addHandler();
// // 			break;
// // 			case 'subtract':
// // 			subtractHandler();
// // 			break;
// // 			case 'multiply':
// // 			multiplyHandler();
// // 			break;
// // 			case 'divide':
// // 			divideHandler();
// // 			break;
// // 		}
// // 	}
// // }

// //遍历
// function each(array,fn){
// 	for (var i = 0; i < array.length; i++) {
// 		fn(i,array[i]);
// 	}
// }

// //更新符号
// function updateSign(symbol){
// 	sign.innerHTML=symbol;
// }

// function add(num1,num2){
// 	return +num1+ +num2;
// }
// function subtract(num1,num2){
// 	return num1-num2;
// }
// function multiply(num1,num2){
// 	return num1*num2;
// }
// function divide(num1,num2){
// 	return num1/num2;
// }

// //输出结果
// function outputResult(result){
// 	resultOutput.innerHTML=result;
// }

// function addHandler(){
// 	updateSign('+');
// 	outputResult(add(formerInput.value,laterInput.value));
// }
// function subtractHandler(){
// 	updateSign('-');
// 	outputResult(subtract(formerInput.value,laterInput.value));
// }
// function multiplyHandler(){
// 	updateSign('*');
// 	outputResult(multiply(formerInput.value,laterInput.value));
// }
// function divideHandler(){
// 	updateSign('/');
// 	outputResult(divide(formerInput.value,laterInput.value));
// }





// //第四次改进--管理代码,对象方法化，重点在全局变量声明都弄成属性，以及后面的运算弄成属性 DOM

// // var calculator=document.querySelector('#calculator');
// // var formerInput=calculator.querySelector('.formerInput');
// // var laternput=calculator.querySelector('.laterInput');
// // var sign=calculator.querySelector('.sign');
// // var resultOutput=calculator.querySelector('.resultOutput');
// // var btns=calculator.querySelectorAll('.btn')

// var wrapElem=document.querySelector('#calculator');
// var calculatorElem={
// 	formerInput:wrapElem.querySelector('.formerInput'),
//     laterInput:wrapElem.querySelector('.laterInput'),
//     sign:wrapElem.querySelector('.sign'),
//     resultOutput:wrapElem.querySelector('.resultOutput'),
//     btns:wrapElem.querySelectorAll('.btn')
// };
// console.log(calculatorElem);

// //绑定事件
// each(calculatorElem.btns,function(index,elem){
// 	elem.onclick=function(){
// 		switch(this.title){
// 			case 'add':
// 			addHandler();
// 			break;
// 			case 'subtract':
// 			subtractHandler();
// 			break;
// 			case 'multiply':
// 			multiplyHandler();
// 			break;
// 			case 'divide':
// 			divideHandler();
// 			break;
// 	}
// }})
// // for(var i=0;i<btns.length;i++){
// // 	btns[i].onclick=function(){
// // 		switch(this.title){
// // 			case 'add':
// // 			addHandler();
// // 			break;
// // 			case 'subtract':
// // 			subtractHandler();
// // 			break;
// // 			case 'multiply':
// // 			multiplyHandler();
// // 			break;
// // 			case 'divide':
// // 			divideHandler();
// // 			break;
// // 		}
// // 	}
// // }

// //遍历
// function each(array,fn){
// 	for (var i = 0; i < array.length; i++) {
// 		fn(i,array[i]);
// 	}
// }

// //更新符号
// function updateSign(symbol){
// 	calculatorElem.sign.innerHTML=symbol;
// }

// var operation={
//   add:function(num1,num2){
// 		return +num1+ +num2;
// 	},
//   subtract:function(num1,num2){
// 		return num1-num2;
// 	},
//   multiply:function(num1,num2){
// 		return num1*num2;
// 	},
//   divide:function(num1,num2){
// 		return num1/num2;
// 	}
// }
// //输出结果
// function outputResult(result){
// 	calculatorElem.resultOutput.innerHTML=result;
// }

// function addHandler(){
// 	updateSign('+');
// 	outputResult(operation.add(calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// }
// function subtractHandler(){
// 	updateSign('-');
// 	outputResult(operation.subtract(calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// }
// function multiplyHandler(){
// 	updateSign('*');
// 	outputResult(operation.multiply(calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// }
// function divideHandler(){
// 	updateSign('/');
// 	outputResult(operation.divide(calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// }




// //第五次改进--OCP原则 开放与封闭原则..即增加新功能时通过接口增加，不能改原有

// // var calculator=document.querySelector('#calculator');
// // var formerInput=calculator.querySelector('.formerInput');
// // var laternput=calculator.querySelector('.laterInput');
// // var sign=calculator.querySelector('.sign');
// // var resultOutput=calculator.querySelector('.resultOutput');
// // var btns=calculator.querySelectorAll('.btn')

// var wrapElem=document.querySelector('#calculator');
// var calculatorElem={
// 	formerInput:wrapElem.querySelector('.formerInput'),
//     laterInput:wrapElem.querySelector('.laterInput'),
//     sign:wrapElem.querySelector('.sign'),
//     resultOutput:wrapElem.querySelector('.resultOutput'),
//     btns:wrapElem.querySelectorAll('.btn')
// };


// //绑定事件
// each(calculatorElem.btns,function(index,elem){
// 	elem.onclick=function(){
// 		updateSign(this.value);
// 		outputResult(operate(this.title,calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// 	console.log(this.title);
// 	// 	switch(this.title){
// 	// 		case 'add':
// 	// 		//addHandler();
// 	// 		outputResult(operation.add(calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// 	// 		break;
// 	// 		case 'subtract':
// 	// 		// subtractHandler();
// 	// 		outputResult(operation.subtract(calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// 	// 		break;
// 	// 		case 'multiply':
// 	// 		// multiplyHandler();
// 	// 		outputResult(operation.multiply(calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// 	// 		break;
// 	// 		case 'divide':
// 	// 		// divideHandler();
// 	// 		outputResult(operation.divide(calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// 	// 		break;
// 	// }

// }})


// //遍历
// function each(array,fn){
// 	for (var i = 0; i < array.length; i++) {
// 		fn(i,array[i]);
// 	}
// }

// //更新符号
// function updateSign(symbol){
// 	calculatorElem.sign.innerHTML=symbol;
// }

// //运算
// function operate(name,num1,num2){
// 	if (!operation[name]) throw new Error('不存在名为'+ name +'的运算方法')
// 	return operation[name](num1,num2);
// }

// var operation={
//   add:function(num1,num2){
// 		return +num1+ +num2;
// 	},
//   subtract:function(num1,num2){
// 		return num1-num2;
// 	},
//   multiply:function(num1,num2){
// 		return num1*num2;
// 	},
//   divide:function(num1,num2){
// 		return num1/num2;
// 	},
//   addOperation:function(name,fn){
//   		if(!this[name]){
//   			this[name]=fn;
//   		}
//   		return this;
//   		}
//   };
//   operation.addOperation('mod',function(num1,num2){
//   	return num1%num2;
// });
// //输出结果
// function outputResult(result){
// 	calculatorElem.resultOutput.innerHTML=result;
// }

// // function addHandler(){
// // 	updateSign('+');
// // 	outputResult(operation.add(calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// // }
// // function subtractHandler(){
// // 	updateSign('-');
// // 	outputResult(operation.subtract(calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// // }
// // function multiplyHandler(){
// // 	updateSign('*');
// // 	outputResult(operation.multiply(calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// // }
// // function divideHandler(){
// // 	updateSign('/');
// // 	outputResult(operation.divide(calculatorElem.formerInput.value,calculatorElem.laterInput.value));
// // }


//第六次改进--模块化
(function(){

var wrapElem=document.querySelector('#calculator');
var calculatorElem={
	formerInput:wrapElem.querySelector('.formerInput'),
    laterInput:wrapElem.querySelector('.laterInput'),
    sign:wrapElem.querySelector('.sign'),
    resultOutput:wrapElem.querySelector('.resultOutput'),
    btns:wrapElem.querySelectorAll('.btn')
};


//遍历
function each(array,fn){
	for (var i = 0; i < array.length; i++) {
		fn(i,array[i]);
	}
}

//绑定事件
each(calculatorElem.btns,function(index,elem){
	elem.onclick=function(){
		updateSign(this.value);
		outputResult(operate(this.title,[calculatorElem.formerInput.value,calculatorElem.laterInput.value]));
		//var a=operate(this.title,calculatorElem.formerInput.value,calculatorElem.laterInput.value)
	//console.log(a);
	//console.log(operate(this.title,calculatorElem.formerInput.value,calculatorElem.laterInput.value))
	//console.log(calculatorElem.formerInput.value,calculatorElem.laterInput.value)


}})



//更新符号
function updateSign(symbol){
	calculatorElem.sign.innerHTML=symbol;
	//console.log(symbol)
}


//核心功能，封装模块，接口暴露出来，多地儿使用
var operate=(function(){
	//运算

var operation={
  add:function(num1,num2){
		return +num1+ +num2;
	},
  subtract:function(num1,num2){
		return num1-num2;
	},
  multiply:function(num1,num2){
		return num1*num2;
	},
  divide:function(num1,num2){
		return num1/num2;
	},
  addOperation:function(name,fn){
  		if(!operation[name]){
  			operation[name]=fn;
  		}
  		return operation;
  		}
  };


  function operate(name,arguments){
  	//console.log(arguments)
	if (!operation[name]) throw new Error('不存在名为'+ name +'的运算方法')
		//console.log(operation[name]);
	return operation[name].apply(operation,[].slice.call(arguments,0,arguments.length));
	}

operate.addOperation=operation.addOperation;
return operate;

})()

  operate.addOperation('mod',function(num1,num2){
  	return num1%num2;
});

  
//输出结果
function outputResult(result){
	//console.log(result);
	return calculatorElem.resultOutput.innerHTML=result;

}

return operate;
})();