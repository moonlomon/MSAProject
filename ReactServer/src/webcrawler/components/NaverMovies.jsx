// import { getNaverMovie } from "webcrawler/api";

// const NaverMovie = () => {


//   const onClick = (e) => {
//     e.preventDefault();
//     getNaverMovie().then((response) => {
//     console.log(`response is ${response.data.result}`);
//       localStorage.setItem("token", JSON.stringify(response.data.result));
//     });
//   };

//   return (
//     <>
//       <h2>네이버 크롤러</h2>
//       <button onClick={onClick}>네이버 영화 크롤링</button>
//       <p>버튼을 클릭하시면, 네이버 영화 목록이 출력됩니다.</p>
//     </>
//   );
// };
// export default NaverMovie;

import {useState} from 'react'
import webcrawlerService from "../api"
const NaverMovie = () => {
    const [movie, setMovie] = useState()

    const onClick = e => {
        e.preventDefault()
        webcrawlerService.naverMovie().then(res => {
            const json = JSON.parse(res) // JSON.parse : json을 js객체로 바꿈 =>.이나 []로 내부 데이터 접근 가능 <-> JSON.stringify()
            setMovie(json['result'])
            console.log(json)
        })
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }

    return (<>
    <h2>네이버 영화 크롤러</h2>
    <button onClick={onClick}>네이버 영화 크롤링</button>
    <p>버튼을 클릭하시면, 네이버 영화 목록이 출력됩니다.</p>
    <table>
        <teahd>
            <tr>
            <th>순위</th><th>영화 제목</th>
            </tr>
        </teahd>
        <tbody>
        {movie && movie.map(({rank, title})=>{
            <tr key={rank}><td>{rank}</td><td>{title}</td></tr>
        })}
        </tbody>
    </table>
    </>)
}
export default NaverMovie


{/* <table>
      <thead>
        <tr>
          <th>순위</th>
          <th>제목</th>
        </tr>
      </thead>
    </table>
    <tbody>
    {movie.map((a,i)=>(
      <tr>
        <td>movie[i]</td>
      </tr>
    ))}
    </tbody> */}