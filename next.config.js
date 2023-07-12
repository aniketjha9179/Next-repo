/** @type {import('next').NextConfig} */

//redirection using config file of components 
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source:'/about',
                destination:'/',
                permanent:false   

            },
            {
                source:'/admin',
                destination:'/',
                permanent:false   

            },
            
        ]
    }
};


module.exports = nextConfig;
