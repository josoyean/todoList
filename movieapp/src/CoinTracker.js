import React,{useState,useEffect} from "react";
 const CoinTracker =()=>{
    const [loading,setLoading] = useState(true);
    const [click,setClick] = useState(false);
    const [coins,setCoins]=useState([]);
    const [inputValue,setInputValue] = useState('');

    useEffect(()=>{
fetch('https://api.coinpaprika.com/v1/tickers').then(response => response.json()).then(json=> setCoins(json));
setLoading(false)
    },[])

    const onChange=(e)=>{
        setInputValue(e.target.value)
        setClick(false)
    }

    const onClick=(e)=>{
        setClick(true)
       console.log(inputValue)
       console.log(coins)
    }

    return(
    <>
    <h2>This Coin! {loading? '':`(${coins.length})`} </h2>
    <input value={inputValue} onChange={onChange}></input>
    <button onClick={onClick}>조회 하기</button>
    {loading ? <strong>...Loading</strong> : 
    <select>
        {
            coins.map((coin) =>            
             <option key={coin.id}>{coin.name} ({coin.symbol}) : ${
                click ? coin.quotes.USD.price / inputValue : coin.quotes.USD.price
             } USD</option>
            )
        }
    </select>
 }
    </>
 )
 }
 export default CoinTracker