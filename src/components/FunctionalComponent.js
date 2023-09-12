import React from 'react';

// function FunctionalComponent(props){
//     return (
//         <h1>Functional Component ({props.name})</h1>
//     );
// }

// //Normal method
// const FunctionalComponent = (props) => 
// {
// return (
//             <h1>Functional Component ({props.name + " " + props.lname})</h1>
//         );
// }

// //Destructuring props method 1
// const FunctionalComponent = ({name, lname}) => 
// {
// return (
//             <h1>Functional Component ({name + " " + lname})</h1>
//         );
// }

// //Destructuring props method 2
const FunctionalComponent = props => 
{
    const {name,lname} = props
return (
            <h1>Functional Component ({name + " " + lname})</h1>
        );
}

export default FunctionalComponent