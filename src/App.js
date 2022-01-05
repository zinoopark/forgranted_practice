import logo from './logo.png';
import small_G from './smallG.png';
import gran from './gran.gif';

import './App.css';
import React,{useState} from 'react';
import {NavDropdown,Container,Navbar,Nav,InputGroup,FormControl,Button} from 'react-bootstrap';
import {useHistory,Route} from 'react-router-dom';

function App() {
  let [입력값,입력값변경]= useState('');
  let history = useHistory();



  return (

    <div className = "App">
      <div className = 'nav_bar'>
        <div className = 'logo_container'>
          <a href='/'>
            <img src = {logo} className = 'logo_forgranted'></img>  
          </a>
        </div>
        <div className = 'nav_item_container'>
          <div className = 'nav_item'>
              <a href = '/'>
                ABOUT
              </a>
          </div>
          <div className = 'nav_item'>
              <a href = 'https://smartstore.naver.com/minganing/products/4855424978?NaPm=ct%3Dkxytb648%7Cci%3D9ed8aee7320ed4668a13efc4c47e8af1e90c012a%7Ctr%3Dsls%7Csn%3D1184396%7Chk%3D1de101a37f7250e2ffd46e9951eb71b0f1a49431' target = '_blank'>
                SHOP
              </a>
          </div>
        </div>
      </div>

      <div className='body-container'>
        <div id = 'left-body'></div>
        <div id = 'right-body'></div>
      </div>

      <div>
        <div className='search-bar-container'>
          <input type = 'text' placeholder='제품번호를 입력해주세요' className='search-bar-input' ></input>
          <button className='search-bar-button'><img src= {small_G} className='search-bar-button-img'></img></button>
        </div>
      </div>

      <img src = {gran} className='gran'></img>


      {/* <InputGroup className="mb-3">
        <FormControl
          autoFocus
          className = "fg-input"
          placeholder="감사번호를 입력!"
          aria-label="감사번호를 입력!"
          aria-describedby="basic-addon2"
          onChange={(e)=>{
              입력값변경(e.target.value);
              console.log(입력값);
            }
          }
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={()=>{
            history.push('/'+입력값);
        }}>
          어디있니
        </Button>
      </InputGroup>

      {

      }
      <Route path='/'>

      </Route>

      <Route path={'/'+입력값}>
        <div>{입력값}입니다.</div>
      </Route> */}

    </div>
  );
}

export default App;
