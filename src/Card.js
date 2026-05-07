import React from "react";

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow2">
            <h1> RoboFriends </h1>
            <div>
                <img
                    src={`https://robohash.org/${id}?size=50x50`}
                    alt="robots"
                />
                <h2> {name} </h2>
                <p> {email} </p>
            </div>
        </div>
    );
}
export default Card;


// const Card = ({name, email,id}) => {
//     return (
//         <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow2">
//             <h1> RoboFriends </h1>
//             <img src={ `https://robohash.org/${id}?50x50` } alt="robots"/>
//             <div>
//                 <h2> {props.name} </h2>
//                 <p> {props.email} </p>
//             </div>
//         </div>
//     );
// }
// export default Card;