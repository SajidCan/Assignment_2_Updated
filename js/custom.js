function quote_generator() {
  var quote=["\“Be yourself; everyone else is already taken.\”","\“So many books, so little time.\”","\“A room without books is like a body without a soul.\”","\“You only live once, but if you do it right, once is enough.\”"];
    var max=quote.length-1;
    var min=0;
    var num= Math.floor(Math.random()*(max-min+1));
    var x = document.getElementById("quote");
  x.innerHTML = quote[num];
}
function green() {
  document.getElementById('quote').setAttribute("class", "quote_green");
}
function red() {
  document.getElementById('quote').setAttribute("class", "quote_red");
}
function orange() {
  document.getElementById('quote').setAttribute("class", "quote_orange");
}
function blue() {
  document.getElementById('quote').setAttribute("class", "quote_blue");
}
function pound_kg() {
	var result;
	var select=document.getElementById("sel");
    var disp=select.options[select.selectedIndex].text;
    var x = document.getElementById("value").value;
    if(isNaN(x)){
        alert("You must enter a number value!"); 
        x="";
    }
    if(disp=='lb to kg'){
    	result=x*0.4536;
        document.getElementById("calc").innerHTML = "= "+result+" kilograms";
    }
  	else{
    	result=x*2.2046;
        document.getElementById("calc").innerHTML = "= "+result+" pounds";
    }
  
}
function part2() {
	var sum=0;
    var average=0;
    
	var val = document.getElementById("myInput").value;
    var st=val.replace(/,/g, ' ');
    a = st.split(" ");
    
    
    var max=parseFloat(a[0]);
    var min=parseFloat(a[0]);
    for(var x=0;x<a.length;x++){
    	if(max<parseFloat(a[x])){
        	max=parseFloat(a[x]);
        }
        else if(min>parseFloat(a[x])){
        	min=parseFloat(a[x]);
        }
        sum=sum+parseFloat(a[x]);
        average=sum/a.length;
    }
    var b=new Array();
    var i=a.length-1;
    for(var x=0;x<a.length;x++){
    	b[x]=parseFloat(a[i]);
        i=i-1;
    }
    document.getElementById("max").innerHTML = max;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("average").innerHTML = average;
    document.getElementById("reverse").innerHTML = b;
}
function reset_form() {
  document.getElementById("myForm").reset();
    count=0;
}
function upperlower() {
  var elem=document.getElementById("text");
  if (elem.className == "style"){
  	elem=document.getElementById("text").className = "mystyle";
  }
  else{
  	elem=document.getElementById("text").className = "style";
  }
}
function sorted(){
	var elem=document.getElementById("text");
    arr=new Array();
	arr=elem.value.split("\n").sort();
    elem.value=arr.join("\n");
  	
}
    
function reverse_it(){
	var elem=document.getElementById("text");
    arr=new Array();
    arr=elem.value.split('\n');
    arr=arr.map(function(value){
        value=value.split("").reverse().join("");
        return value;
    })
    elem.value=arr.join("\n");
}
function strip(){
    var elem=document.getElementById("text");
    arr=new Array();
    arr=elem.value.split("\n").filter(line => line!="");
    
    arr=arr.map(function(item,index,arr){
        arr[index]=item.trim();
        return arr[index];
       
    })
    elem.value=arr.join("\n");
    
}
var count=0;
function num(){
    if(count<1){
        var elem=document.getElementById("text");
        arr=new Array();
        arr=elem.value.split('\n');
        var str="";
        for(var i=1;i<arr.length+1;i++){
            str=str +i +" "+ arr[i]+"\n";
        }
            count++;
        elem.value=str;
        }
        else{
            alert("Please Re-enter all the inputs by clicking Clear It");
    }
}
function shuffle(){
    var elem=document.getElementById("text");
    arr=new Array();
    arr=elem.value.split('\n');
    var x;
    var j=Math.floor(Math.random()*(arr.length))
    arr.forEach(function(line,index,arr){
        x=arr[index];
        arr[index]=arr[j];
        arr[j]=x;
    })
    elem.value=arr.join("\n");
}
