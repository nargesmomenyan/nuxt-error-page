//const _statictoken= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiWydhZG1pbicsJ3VzZXInXSIsImlhdCI6MX0.ksyG1wzXX9h0uAmMFiMtEyZoLO7ldBTcnQ7ZrjYNYBw';

import Vuex from 'vuex';
import Cookie from 'js-cookie';

export const store =  new Vuex.Store({
        state:()=> ({
            token:''
        }),
        getters: {
            getRoles(state){
                const jwtCookie = req.headers.cookie
                .split(";")
                .find(c => c.trim().startsWith("jwt="));
                console.log(jwtCookie);
            }
        },
        mutations: {
            setToken(payload){
                console.log(payload);
                state.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiWydhZG1pbicsJ3VzZXInXSIsImlhdCI6MX0.ksyG1wzXX9h0uAmMFiMtEyZoLO7ldBTcnQ7ZrjYNYBw';
                localStorage.setItem("token", state.token);
                Cookie.set("jwt", state.token);
            }
        },
        actions: {
            authentication ( payload){   
                console.log("authentication");            
                //  login to the remote server

                // store response.token in the cookie
                commit('setToken', payload);                
            }
        }
 
})



