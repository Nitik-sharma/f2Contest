let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

  PrintDeveloperbyMap();

  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
   let ans=arr.map((search)=>{
    if(search.profession==='developer'){
       console.log(search.name);
    }
   })
//    console.log(ans);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((key)=>{
        if(key.profession==='developer'){
            console.log(key.name);
        }
    })
  }
  addData();
  function addData() {
    //Write your code here, just console.log
    let newArr=
        {id:4,name:"susan",age:"20",profession:"intern"}
    ;
    arr.push(newArr);
    console.log(arr);
  }
  removeAdmin();
  function removeAdmin() {
   
   let newArr=[];
   
   for(let i=0;i<arr.length;i++){
   if(arr[i].profession!='admin'){
    newArr.push(arr[i]);

   }
  
   }
   console.log(newArr);
  }
  concatenateArray(); 
  function concatenateArray() {
    //Write your code here, just console.log
    let brr=[
        { id: 1, name: 'john', age: '18', profession: 'developer' },
  { id: 2, name: 'jack', age: '20', profession: 'developer' },
  { id: 3, name: 'karen', age: '19', profession: 'admin' },
  { id: 4, name: 'susan', age: '20', profession: 'intern' }
    ]
    console.log(arr.concat(brr));
  }
  