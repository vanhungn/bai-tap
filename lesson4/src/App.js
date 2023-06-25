import logo from './logo.svg';
import './App.css';
import Shoe from './compunent/cardShoe/cardShoe.js';
import { FreeShipping } from './FreeShipping/freeShipping';
function App() {
  return (
      <>
      <ul className="headerUl">
        <li>About Us</li>
        <li>Contacts</li>
        <li>Store</li>
        <li>Track Orders</li>
      </ul>
      {/*start header*/}
      <div className="headerShopApp">
        <div className="headerSearchItem">
            <h2 style={{fontSize:36,padding:0,margin:0}}>Shop App</h2>
            <div className="headerSearch">
              <div className="headerCategories">
                <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.86133 13.6833H15.4456" stroke="#2E2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.86133 7.21375H27.0299" stroke="#2E2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.86133 20.153H27.0299" stroke="#2E2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3>Categories</h3>
                <svg width="1" height="50" viewBox="0 0 1 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="-2.18557e-08" x2="0.500002" y2="50" stroke="#6C6C6C"/>
                </svg>
                <input className="inputSearch" type="text" placeholder="Search Item" />
              </div>
              
              
              <svg className="svgSearch" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3852 20.5602L29.0124 27.0155C29.6015 27.5894 29.6015 28.4501 29.0124 29.0239C28.7179 29.3108 28.2761 29.4542 27.9815 29.4542C27.687 29.4542 27.2452 29.3108 26.9506 29.0239L20.3234 22.5686C18.1143 24.1465 15.4635 25.1507 12.518 25.1507C5.5963 25.1507 0 19.6995 0 12.9573C0 6.21507 5.5963 0.763916 12.518 0.763916C19.4398 0.763916 25.0361 6.21507 25.0361 12.9573C25.0361 15.8263 24.0052 18.5519 22.3852 20.5602ZM12.5179 3.63293C7.21618 3.63293 2.94531 7.79301 2.94531 12.9573C2.94531 18.1215 7.21618 22.2816 12.5179 22.2816C15.1688 22.2816 17.5252 21.2774 19.2924 19.556C21.0597 17.8346 22.0906 15.5394 22.0906 12.9573C22.0906 7.79301 17.8197 3.63293 12.5179 3.63293Z" fill="#212529"/>
              </svg>
            </div>
            <div className="headerIcon">
              <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_i_9494_316)">
              <path d="M12.0732 34.8413C9.85979 34.8413 8.06893 36.768 8.06893 39.123C8.06893 41.478 9.85979 43.4048 12.0732 43.4048C14.2866 43.4048 16.0976 41.478 16.0976 39.123C16.0976 36.768 14.2866 34.8413 12.0732 34.8413ZM32.1952 34.8413C29.9818 34.8413 28.1909 36.768 28.1909 39.123C28.1909 41.478 29.9818 43.4048 32.1952 43.4048C34.4086 43.4048 36.2196 41.478 36.2196 39.123C36.2196 36.768 34.4086 34.8413 32.1952 34.8413ZM14.2866 24.1369H29.2775C30.7867 24.1369 32.1147 23.2591 32.7989 21.9318L39.3184 8.78683C39.8215 7.75921 39.4794 6.47468 38.5135 5.91805C37.5276 5.34002 36.3001 5.74679 35.7769 6.79581L29.2775 19.8551H15.1519L6.5799 0.58728H2.0122C0.905491 0.58728 0 1.55067 0 2.72815C0 3.90563 0.905491 4.86903 2.0122 4.86903H4.0244L11.2683 21.1183L8.55186 26.342C7.08295 29.2108 9.01466 32.7004 12.0732 32.7004H34.2074C35.3141 32.7004 36.2196 31.737 36.2196 30.5595C36.2196 29.382 35.3141 28.4186 34.2074 28.4186H12.0732L14.2866 24.1369Z" fill="#323232"/>
              </g>
              <defs>
              <filter id="filter0_i_9494_316" x="0" y="0.58728" width="39.5493" height="42.8175" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dx="0.5" dy="0.5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.2 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_9494_316"/>
              </filter>
              </defs>
              </svg>

              <svg width="38" height="42" viewBox="0 0 38 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41577 10.7679C8.41577 5.08622 13.0445 0.62207 18.9356 0.62207C24.8267 0.62207 29.4554 5.08622 29.4554 10.7679C29.4554 16.4495 24.8267 20.9137 18.9356 20.9137C13.0445 20.9137 8.41577 16.4495 8.41577 10.7679ZM37.8713 35.1179V39.1762C37.8713 40.3937 37.0298 41.2054 35.7674 41.2054C34.505 41.2054 33.6634 40.3937 33.6634 39.1762V35.1179C33.6634 31.6683 30.9283 29.0304 27.3515 29.0304H10.5198C6.94308 29.0304 4.20793 31.6683 4.20793 35.1179V39.1762C4.20793 40.3937 3.36634 41.2054 2.10396 41.2054C0.841585 41.2054 0 40.3937 0 39.1762V35.1179C0 29.4362 4.62872 24.9721 10.5198 24.9721H27.3515C33.2426 24.9721 37.8713 29.4362 37.8713 35.1179ZM18.9357 16.8553C15.3589 16.8553 12.6238 14.2174 12.6238 10.7678C12.6238 7.31828 15.3589 4.68038 18.9357 4.68038C22.5124 4.68038 25.2476 7.31828 25.2476 10.7678C25.2476 14.2174 22.5124 16.8553 18.9357 16.8553Z" fill="#212529"/>
              </svg>
            </div>
        </div>
      </div>
      {/*end header*/}

      {/* start nav article*/ }
      <div className="mainNavArticle">
          <div className="mainNav">
            <div className="mainCategories">
                <svg className="mainCategoriesSvg" width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.79102 12.7174H16.3753" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.79102 6.35864H27.9596" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.79102 19.076H27.9596" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3 style={{margin:0,padding:0}}>Categories</h3>
              </div>
              <div className="computer"> 
                <h4 style={{margin:0}}>Compu ter</h4>
                <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75632 11.0622L2.47013 19.5595C2.10476 20.1468 1.51395 20.1468 1.15247 19.5595L0.274027 18.1475C-0.0913423 17.5601 -0.0913423 16.6104 0.274027 16.0294L4.02101 10.0062L0.274027 3.98313C-0.0913423 3.39581 -0.0913423 2.44611 0.274027 1.86504L1.14858 0.440487C1.51395 -0.146829 2.10476 -0.146829 2.46624 0.440487L7.75244 8.93783C8.12169 9.52515 8.12169 10.4749 7.75632 11.0622Z" fill="#F1F1F1"/>
                </svg>
              </div>
              <ul className="navUl">
                <li className="navLi">
                <h4 style={{margin:0}}>Hand Tools</h4>
                <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75632 11.0622L2.47013 19.5595C2.10476 20.1468 1.51395 20.1468 1.15247 19.5595L0.274027 18.1475C-0.0913423 17.5601 -0.0913423 16.6104 0.274027 16.0294L4.02101 10.0062L0.274027 3.98313C-0.0913423 3.39581 -0.0913423 2.44611 0.274027 1.86504L1.14858 0.440487C1.51395 -0.146829 2.10476 -0.146829 2.46624 0.440487L7.75244 8.93783C8.12169 9.52515 8.12169 10.4749 7.75632 11.0622Z" fill="#F1F1F1"/>
                </svg>
                  </li>
                <li className="navLi">
                <h4 style={{margin:0}}>Machine Tools</h4>
                <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75632 11.0622L2.47013 19.5595C2.10476 20.1468 1.51395 20.1468 1.15247 19.5595L0.274027 18.1475C-0.0913423 17.5601 -0.0913423 16.6104 0.274027 16.0294L4.02101 10.0062L0.274027 3.98313C-0.0913423 3.39581 -0.0913423 2.44611 0.274027 1.86504L1.14858 0.440487C1.51395 -0.146829 2.10476 -0.146829 2.46624 0.440487L7.75244 8.93783C8.12169 9.52515 8.12169 10.4749 7.75632 11.0622Z" fill="#F1F1F1"/>
                </svg>
                  
                  </li>
                <li className="navLi">
                <h4 style={{margin:0}}>Power Tools</h4>
                <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75632 11.0622L2.47013 19.5595C2.10476 20.1468 1.51395 20.1468 1.15247 19.5595L0.274027 18.1475C-0.0913423 17.5601 -0.0913423 16.6104 0.274027 16.0294L4.02101 10.0062L0.274027 3.98313C-0.0913423 3.39581 -0.0913423 2.44611 0.274027 1.86504L1.14858 0.440487C1.51395 -0.146829 2.10476 -0.146829 2.46624 0.440487L7.75244 8.93783C8.12169 9.52515 8.12169 10.4749 7.75632 11.0622Z" fill="#F1F1F1"/>
                </svg>
                  
                  </li>
                <li className="navLi">
                <h4 style={{margin:0}}>  Storage Tools</h4>
                <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75632 11.0622L2.47013 19.5595C2.10476 20.1468 1.51395 20.1468 1.15247 19.5595L0.274027 18.1475C-0.0913423 17.5601 -0.0913423 16.6104 0.274027 16.0294L4.02101 10.0062L0.274027 3.98313C-0.0913423 3.39581 -0.0913423 2.44611 0.274027 1.86504L1.14858 0.440487C1.51395 -0.146829 2.10476 -0.146829 2.46624 0.440487L7.75244 8.93783C8.12169 9.52515 8.12169 10.4749 7.75632 11.0622Z" fill="#F1F1F1"/>
                </svg>
                
                  </li>
                <li className="navLi">
                <h4 style={{margin:0}}>Clothes & FFE</h4>
                <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75632 11.0622L2.47013 19.5595C2.10476 20.1468 1.51395 20.1468 1.15247 19.5595L0.274027 18.1475C-0.0913423 17.5601 -0.0913423 16.6104 0.274027 16.0294L4.02101 10.0062L0.274027 3.98313C-0.0913423 3.39581 -0.0913423 2.44611 0.274027 1.86504L1.14858 0.440487C1.51395 -0.146829 2.10476 -0.146829 2.46624 0.440487L7.75244 8.93783C8.12169 9.52515 8.12169 10.4749 7.75632 11.0622Z" fill="#F1F1F1"/>
                </svg>
                  
                  </li>
                <li className="navLi">
                <h4 style={{margin:0}}>Electrical</h4>
                <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75632 11.0622L2.47013 19.5595C2.10476 20.1468 1.51395 20.1468 1.15247 19.5595L0.274027 18.1475C-0.0913423 17.5601 -0.0913423 16.6104 0.274027 16.0294L4.02101 10.0062L0.274027 3.98313C-0.0913423 3.39581 -0.0913423 2.44611 0.274027 1.86504L1.14858 0.440487C1.51395 -0.146829 2.10476 -0.146829 2.46624 0.440487L7.75244 8.93783C8.12169 9.52515 8.12169 10.4749 7.75632 11.0622Z" fill="#F1F1F1"/>
                </svg>
                  
                  </li>
                <li className="navLi">
                <h4 style={{margin:0}}> Buildding Tools</h4>
                <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75632 11.0622L2.47013 19.5595C2.10476 20.1468 1.51395 20.1468 1.15247 19.5595L0.274027 18.1475C-0.0913423 17.5601 -0.0913423 16.6104 0.274027 16.0294L4.02101 10.0062L0.274027 3.98313C-0.0913423 3.39581 -0.0913423 2.44611 0.274027 1.86504L1.14858 0.440487C1.51395 -0.146829 2.10476 -0.146829 2.46624 0.440487L7.75244 8.93783C8.12169 9.52515 8.12169 10.4749 7.75632 11.0622Z" fill="#F1F1F1"/>
                </svg>
                 
                  </li>
                <li className="navLi">
                <h4 style={{margin:0}}>Foods</h4>
                <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75632 11.0622L2.47013 19.5595C2.10476 20.1468 1.51395 20.1468 1.15247 19.5595L0.274027 18.1475C-0.0913423 17.5601 -0.0913423 16.6104 0.274027 16.0294L4.02101 10.0062L0.274027 3.98313C-0.0913423 3.39581 -0.0913423 2.44611 0.274027 1.86504L1.14858 0.440487C1.51395 -0.146829 2.10476 -0.146829 2.46624 0.440487L7.75244 8.93783C8.12169 9.52515 8.12169 10.4749 7.75632 11.0622Z" fill="#F1F1F1"/>
                </svg>
                  
                  </li>
                <li className="navLi">
                  <h4 style={{margin:0}}>Drinks</h4>
                <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.75632 11.0622L2.47013 19.5595C2.10476 20.1468 1.51395 20.1468 1.15247 19.5595L0.274027 18.1475C-0.0913423 17.5601 -0.0913423 16.6104 0.274027 16.0294L4.02101 10.0062L0.274027 3.98313C-0.0913423 3.39581 -0.0913423 2.44611 0.274027 1.86504L1.14858 0.440487C1.51395 -0.146829 2.10476 -0.146829 2.46624 0.440487L7.75244 8.93783C8.12169 9.52515 8.12169 10.4749 7.75632 11.0622Z" fill="#F1F1F1"/>
                </svg>
                  
                  </li>
              </ul>
          </div>

          <div className="mainArticle">
            <div >
              <img className="articalImg1" src="./image1.png" alt="" />
            </div>
            <div className="articalImg2">
              <img className="img2" src="img2.png" alt="" />
              <img className="img2" src="img2.png" alt="" />
              <img className="img2" src="img2.png" alt="" />
            </div>
          </div>
      </div>
      {/* end nav article*/ }
      {/* Startfree Shipping*/}
      <div className="shipping">
        <FreeShipping/>
        <FreeShipping/>
        <FreeShipping/>
        <FreeShipping/>
      </div>
        {/* end free Shipping*/}

        {/* start bestselle */}
        <div className="ShowMore">
          <h4>bestselle rs</h4>
          <button className="showButton">show more...</button>
        </div>
        
         {/* end bestselle */}

        {/* end shoe*/}
        <div className=" bottomShoe">
            <Shoe/>
            <Shoe/>
            <Shoe/>
            <Shoe/>
        </div>
      
       {/* start shoe*/}
      </>
  );
}

export default App;
