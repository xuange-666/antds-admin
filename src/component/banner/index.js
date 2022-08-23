import React, { useState,useEffect } from 'react';
import './style.less';
import logo from './logo.png';
import star from './star.png';

function Banner(){
    const [states,setStates] = useState({isMount:false})
    useEffect(()=>{
        setStates({isMount:true})
    },[])
    return (
        <div className={states.isMount ? 'root active' : 'root'}>
                <div className="star">
                    <img src={star} alt="星星"/>
                </div>
                <div className="logo">
                    <img src={logo} alt="图标"/>
                    <span>React Admin</span>
                </div>
                {/* <style jsx>{`
                .root {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background: url('./login-bg.jpg') no-repeat center;
                    background-size: cover;
                    overflow: hidden;
                    opacity: 0;
                    transition: 3s ease-in;
                
                    &.active {
                        opacity: 1;
                
                        .logo {
                            transform: translateX(0);
                        }
                    }
                
                    .star {
                        position: absolute;
                        left: 0;
                        top: 0;
                        animation: star-animation 2s linear infinite;
                    }
                
                    @keyframes star-animation {
                        0% {
                            opacity: 0;
                        }
                        50% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0;
                        }
                    }
                
                    .logo {
                        display: flex;
                        align-items: center;
                        position: absolute;
                        top: 50px;
                        left: 50px;
                        transition: 500ms ease-in;
                        transition-delay: 1s;
                        transform: translateX(-150%);
                
                        img {
                            width: 50px;
                        }
                
                        span {
                            color: #fff;
                            font-size: 25px;
                            margin-left: 10px;
                        }
                    }
                }
                
                
                `}</style> */}
        </div>
    )
}

export default Banner;







// export default class index extends Component {
//     state = {
//         isMount: false,
//     };

//     componentDidMount() {
//         this.setState({isMount: true});
//     }


//     render() {
//         const {isMount} = this.state;

//         return (
//             <div className={isMount ? 'root active' : 'root'}>
//                 <div className="star">
//                     <img src={star} alt="星星"/>
//                 </div>
//                 <div className="logo">
//                     <img src={logo} alt="图标"/>
//                     <span>React Admin</span>
//                 </div>
//             </div>
//         );
//     }
// }
