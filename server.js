
//connecting all required and installed packages
let connect = require ('connect');
let url = require ('url');
let accounting = require('accounting');
let app=connect();

// function to run calculator
let calculator= function (req,res,next) {
 let qs=url.parse(req.url, true).query;
 let method=qs.method;
 let total=qs.total;
 let x=qs.x;
 let y=qs.y;

//first  assigning methods
if (qs.method=='add'){
	method='+';
}
else if (qs.method=='subtract'){
	method='-';
}
else if (qs.method=='divide'){
	method='/';
}
else if (qs.method=='multiply'){
	method='*';
}
else {
	method='please use a proper method'
}
// performing calculations using the above methods
if (method=='+'){
	total= parseFloat(x) + parseFloat(y);
}
else if (method=='-'){
	total=parseFloat(x) - parseFloat(y);
}
else if (method=='/'){
	total=parseFloat(x) / parseFloat(y);
}
else if (method=='*'){
	total=parseFloat(x) * parseFloat(y);
}
else{
	total="use add,subtract,divide or multiply for total"
}

// using the same procedure showed in class for tax calculator instead of formatmoney i used formatNumber
res.end('<h1>Math Calculator</h1>' +
'Calculation: '+ accounting.formatNumber(x) + method +
accounting.formatNumber(y) +
'= ' + accounting.formatNumber(total) );
};

// url
app.use('/calculator',calculator);

//port
let port=process.env.PORT || 3000;
app.listen(port);
console.log('server succesfully started');
