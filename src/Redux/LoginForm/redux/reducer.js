const LOGIN_PENDING='LOGIN_PENDING';
const LOGIN_SUCCESS='LOGIN_SUCCESS';
const LOGIN_ERROR='LOGIN_ERROR';

function setLoginPending(isLoginPending)
{
    return{
        type:LOGIN_PENDING,
        isLoginPending
    }
}
function setLoginSuccess(isLoginSuccess)
{
    return{
        type:LOGIN_SUCCESS,
        isLoginSuccess
    }
}
function setLoginError(isLoginError)
{
    return{
        type:LOGIN_ERROR,
        isLoginError
    }
}

const initialState={
    isLoginPending:false,
    isLoginSuccess:false,
    isLoginError:null
}
export default function reducer(state=initialState,action)
{
    switch(action.type)
    {
        case LOGIN_PENDING:
            return{
                ...state,
                isLoginPending:action.isLoginPending
            }
        case LOGIN_SUCCESS:
            return{
                isLoginSuccess:action.isLoginSuccess
            }
        case LOGIN_ERROR:
            return{
                isLoginError:action.isLoginError
            }
        default:
            return state
    }
}

export function login(email,password)
{
    return dispatch=>
    {
        sendLoginRequest(email,password)
        .then(()=>
        {
            dispatch(setLoginPending(false))
            dispatch(setLoginSuccess(true))
        })
        .catch((err)=>
        {
            dispatch(setLoginPending(true))
            dispatch(setLoginError(err))
        })
    }
}

function sendLoginRequest(email,password){
    return new Promise((resolve,reject)=>{
        if(email==='goutham@gmail.com' && password==='12345')
        return resolve(true)
        else
        return reject(new Error("invalid user"))
    })
}
