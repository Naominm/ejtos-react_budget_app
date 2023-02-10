import React, { useContext } from 'react';
import { AppContext, AppReducer } from '../context/AppContext';

const Budget = () => {
const { budget, dispatch } = useContext(AppContext);
const increaseBudget = () => {
dispatch({
type: "SET_BUDGET",
payload: budget + 10,
});
};
const decreaseBudget = () => {
if (budget >= 10) {
dispatch({
type: "SET_BUDGET",
payload: budget - 1000,
});
} else {
alert("Cannot decrease budget. It's already at the minimum");
}
};
return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<br />
<br />
<div className='form-group'>
<div className='input-group mb-3'>
<div className='input-group-prepend'>
<button className='btn btn-outline-secondary' onClick={decreaseBudget}>-</button>
</div>
<input type='text' className='form-control' value={budget} readOnly />
<div className='input-group-append'>
<button className='btn btn-outline-secondary' onClick={increaseBudget}>+</button>
</div>
</div>
</div>
</div>
);
};
export default Budget;