import Vue from 'vue'
import VueRouter from 'vue-router'

// import components
import Home from '../components/Home'
import AllEvent from '../components/AllEvent'
import LiveEvent from '../components/LiveEvent'


// Declaring the use of plug-ins explicitly 
Vue.use(VueRouter);

// config router
export default new VueRouter({
    mode:'history', // to delete the '#' in the url, from /#/home => /home 
    routes:[
        {
            //router path
            path:'/',
            name:'home',
            //coresponding component
            componenet: Home,
        },
        {
            //router path
            path:'/all-event',
            name:'all-event',
            //coresponding component
            componenet: AllEvent,
        },
        {
            //router path
            path:'/live-event',
            name:'live-event',
            //coresponding component
            componenet: LiveEvent,
        }
    ]
});

