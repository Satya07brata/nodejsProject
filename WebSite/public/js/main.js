const submitionBtn=document.getElementById('submitionBtn');
const cityValue=document.getElementById("cityname");
const cityName=document.getElementById("city_name");
const tempStatus=document.getElementById("temp_status");
const temp=document.getElementById("temp_unit");
const datahide=document.querySelector('.middle_layer');

const getInfo=async(event)=>{
    event.preventDefault();
    let city_value=cityValue.value;
    if(city_value===""){
        cityName.innerHTML=`Please Enter Your City Name`;

    }else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city_value}&units=metric&appid=ab31df8fb067f4f1d843e796cf919dbd`
        const response=await fetch(url);
        const data=await response.json();
        const arrData=[data];
        cityName.innerHTML=`${arrData[0].name},${arrData[0].sys.country}`;
        temp.innerText=arrData[0].main.temp;
        tempStatus.innerText=arrData[0].weather[0].main;
        const tempMood=arrData[0].weather[0].main;
        if(tempMood=="Clear"){
            tempStatus.innerHTML=`<i class="fa-solid fa-sun" style="color: #FFD43B;"></i>`;
        }else if(tempMood=="Rain"){
            tempStatus.innerHTML=`<i class="fa-solid fa-cloud-sun-rain" style="color: #0784e4;"></i>`;
        }else if(tempMood=="Mist"){
            tempStatus.innerHTML=`<i class="fa-solid fa-cloud-meatball" style="color: #ffffff;"></i>`;
        }else if(tempMood=="Haze"){
            tempStatus.innerHTML=`<i class="fa-solid fa-smog" style="color: #ffffff;"></i>`;
        }else {
            tempStatus.innerHTML=`<i class="fa-solid fa-cloud" style="color: #ffffff;"></i>`;
        }
        }catch{
            cityName.innerHTML=`Please Enter Your City Name Properly`

        }
    }
}

submitionBtn.addEventListener('click',getInfo);