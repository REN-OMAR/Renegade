async function fetchData(){

    try{
  let result="";
    const response2 = await fetch(`https://proclubs.ea.com/api/fc/members/stats?platform=common-gen5&clubId=232276`).catch(err=>console.log('err'))
    const movies =  await response2.json().then(c=>{
      if(c.length== 0){
        result="err"
      }else{
      result = c
      }
  }).catch(err=>result = 'err')
        console.log(movies)
    }
    catch(error){
        console.error(error);
    }
}
