
import React from 'react'
import { useState } from 'react';
import { format } from "date-fns";
import "./card.css"
import close from "../../assets/close.svg";
import verified from "../../assets/verified.svg";
import dots from "../../assets/dots.svg"
import user from "../../assets/user.png"
import edit from "../../assets/edit.svg"
import mastercard from "../../assets/mastercard.svg"
import chip from "../../assets/chip.png"
import wifi from "../../assets/wifi.png"

import mc from "../../assets/mc.svg"

import ReactCardFlip from "react-card-flip"
import ThankYou from '../thank/ThankYou';

const CardPaymentPage = () => {

    const [confirmed, setConfirmed] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [date, setDate] = useState("");
    const [year, setYear] = useState("");
    const [cvc, setCvc] = useState("");
    
  

  

    const onChangeName = e => {
        setName(e.target.value)
    
      }
      const onChangeCardNumber = e => {
        setCardNumber(e.target.value)
    
      }

      
 const  handleClick = () => { 
  
  } 


  return (
    
    <div  className="container">
    <div className="wrapper grid grid-cols-12">
     <div className="close-btn">
            <img src={close} className="ionicon"/>
        </div>

        <div  className="col-span-12 md:col-span-8">
         
        <div className='form'>
        <header class="form-header">
                    <div class="logo">
                        <span class="logo-circle"></span>
                        <h1>AceCoin<span class="lean">Pay</span></h1>
                    </div>
                    <div class="timer">
                        <span class="timer-box">0</span>
                        <span class="timer-box">1</span>
                        <span class="timer-divider">:</span>
                        <span class="timer-box">1</span>
                        <span class="timer-box">9</span>
                    </div>

                    
                </header>
                  <section className="form-body">
                  {!confirmed &&  <form action="">
                <div className="input-group">
                <div class="header">
                                <div class="description">
                                    <h2 class="title">card number</h2>
                                    <p class="desc">Enter the 15-digit card number on the card</p>
                                </div>
                                <button className ="edit">
                                    <img src={edit} />
                                    <span className="btn-desc">Edit</span>
                                </button>
                            </div>
                  
                <div className="main">
                <img src={user} alt="" className="leading-icon"/>
                <label htmlFor='card_name'></label>
                <input
                 type="text" 
                 placeholder="insert the name on the card"
               name='cardholder_name'
               required
               value={name}
               onChange={onChangeName}
                
                />
                
                  
         
                </div>
                <div className="main">
                <img src={mc} alt="" className="leading-icon"/>
                <label htmlFor='card_number'></label>

                <input type="text" placeholder="2412   -   7512   -   3412   -   3456"
                 name='cardholder_number'
                 required
                 id='card_number'
                 maxLength={19}
                
                 value={cardNumber}
                 onChange={onChangeCardNumber}
                
                />
                  
                  
                   <img src={verified} alt="" className="trailing-icon"></img>
                </div>
                </div>

               

                <article className="flex items-center justify-between gap-8">
                 

                  <div className="input-group __col">
                            <div class="header">
                                <div class="description">
                                    <h2 class="title">CVV number</h2>
                                    <p class="desc">Enter the 3 or 4 digit number on the card</p>
                                </div>
                            </div>
                            <div className="main">
                                <input type="number"
                                 placeholder="327"
                                 name="cvc"
                                 id="cvc"
                              
                                 maxLength={3}
                                 required
                                 value={cvc}
                                 onChange={(e) => setCvc(e.target.value)}
                                
                                />
                                <img src={dots} alt="" class="trailing-icon"/>
                            </div>
                        </div>

                        <div className="input-group __col">
                            <div class="header">
                                <div class="description">
                                    <h2 class="title">expiry date</h2>
                                    <p class="desc">Enter the expiration date of the card</p>
                                </div>
                            </div>
                            <div className="grp">
                                
                                <div className="main __date">
                                    <input type="day" 
                                    placeholder="22"
                                    id="expiry_date"
                                    required
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}/>
                                </div>
                                <span className="divider">/</span>
                                <div className="main __date">
                                    <input type="number"
                                     placeholder="09"
                                     id="expiry_date"
                                     required
                                     value={date}
                                     onChange={(e) => setDate(e.target.value)}
                                    
                                    />
                                </div>
                                
                            </div>
                        </div>
                        <div class="input-group __col">
                            <div class="header">
                                <div class="description">
                                    <h2 class="title">password</h2>
                                    <p class="desc">Enter your Dynamic password</p>
                                </div>
                            </div>
                            <div class="main">
                                <input type="password" 
                                placeholder="******"
                                id='password'
                                value={password}

                                required
                                onChange={ (e)=>setPassword (e.target.value)}
                               

                                />
                                <img src={dots} alt="" class="trailing-icon"/>
                            </div>
                        </div>
                        <button type="submit" class="btn-submit"  onClick={() => setConfirmed(true)}>pay now</button>
                </article>

              
              </form> }
              {confirmed && <ThankYou setConfirmed={setConfirmed} />}
            
              </section>
    
</div>

        </div>
        <div class="col-span-12 md:col-span-4">
            <div class="checkout">
                <span class="blu"></span>

             
                <div class="credit-card card__part" >
                    <div class="credit-card__head">
                        <img src={chip} alt="" class="chip"/>
                        <img src={wifi} alt="" class="wifi"/>
                    </div>
                    <div class="credit-card__body">
                        <h2 class="holder">{name}</h2>
                        <div class="card-digits">
                            <div class="hidden-digits">
                            <h2 class="visible-digits"> {cardNumber}</h2>
                                <span class="circle"></span>
                                <span class="circle"></span>
                                <span class="circle"></span>
                                <span class="circle"></span>
                            </div>
                           
                        </div>
                    </div>
                    <div class="credit-card__footer">
                        <span class="expiry"> {format(new Date(date,year), "MM/yy")}</span>
                        
                        <img src={mastercard} alt="" class="logo"/>
                    </div>
                    <div class="card__design">
                        <span class="inner"></span>
                    </div>
                </div>
                
                
              
                <div class="checkout-details">
               
                    <div class="purchase-data">
                        <div class="data">
                            <span class="title">company</span>
                            <span class="value">
                                <img src="assets/apple-13.svg" alt=""/>
                                <span class="inner-text">apple</span>
                            </span>
                        </div>
                        <div class="data">
                            <span class="title">order number</span>
                            <span class="value">
                                <span class="inner-text">1266201</span>
                            </span>
                        </div>
                        <div class="data">
                            <span class="title">product</span>
                            <span class="value">
                                <span class="inner-text">macbook air</span>
                            </span>
                        </div>
                        <div class="data">
                            <span class="title">VAT (20%)</span>
                            <span class="value">
                                <span class="inner-text">$100.00</span>
                            </span>
                        </div>
                    </div>
                    <div class="divider">
                        <div class="left"></div>
                        <div class="right"></div>
                    </div>
                    <div class="purchase-total">
                        <div class="total">
                            <span class="desc">You have to Pay</span>
                            <div class="t-amount">
                                <h1 class="amount">549<sub>.99</sub></h1>
                                <span class="symbol">USD</span>
                            </div>
                        </div>
                        <img src="assets/docket.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
                </div>
                
                </div>
            
           
  )
}

export default CardPaymentPage