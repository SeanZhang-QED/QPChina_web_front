import Vue from 'vue'
import VueRouter from 'vue-router'

// import components
import Home from '../components/Home'
import AllEvent from '../components/event/AllEvent'
import LiveEvent from '../components/event/LiveEvent'
import WhatDoWeDo from '../components/about/WhatDoWeDo'
import Corporate1 from '../components/governance/Corporate1'
import Corporate2 from '../components/governance/Corporate2'
import EventDetail from '../components/event/EventDetail'



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
            component: Home,
        },
        {
            //router path
            path:'/all-event',
            name:'all-event',
            //coresponding component
            component: AllEvent,
            
        },
        {
            //router path
            path:'/live-event',
            name:'live-event',
            //coresponding component
            component: LiveEvent,
        },
        {
            //rounter path
            path:'/what-do-we-do',
            name:'what-do-we-do',
            component: WhatDoWeDo,
        },
		{
			//rounter path
			path:'/corporate-and-board-policies',
			name:'corporate-and-board-policies',
			//coresponding component
			component: Corporate1,
		},
		{
			//rounter path
			path:'/marketing-committee',
			name:'marketing-committee',
			//coresponding component
			component: Corporate2,
		},
        {
            path:'/all-event/:title',
            name: 'event-detail',
            component: EventDetail
        }
    ]
});

