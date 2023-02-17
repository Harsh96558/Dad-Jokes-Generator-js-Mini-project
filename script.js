let Joke=document.getElementById('joke')
let Btn=document.getElementById('btn')
Btn.addEventListener('click', getJoke)

const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"
const apiKEY="ELUV7pikDXib8JHd1/dM4g==RkBfMXiTqXWKRrT8";

const options={
    method:"GET",
    headers:{'X-Api-Key':apiKEY}
}

async function getJoke(e){

  try {

    Joke.textContent="Updating..."

    Btn.disabled=true
    Btn.textContent="Loading..."



    let response= await fetch(apiURL,options)
    let data=await response.json()

    Joke.textContent=(data[0].joke)


    Btn.disabled=false
    Btn.textContent="Tell me a joke"

    
  } catch (error) {

    console.log(error)

    Joke.textContent="An error occured please update or connect with the network...."

    
    Btn.disabled=false
    Btn.textContent="Tell me a joke"
    
  }




    

}

