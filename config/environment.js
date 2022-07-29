const fs = require('fs');
const rfs =require('rotating-file-stream');
const path = require('path');

const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: logDirectory
})
 
const development ={
    name: 'developement',
    asset_path: './public/assets',
    session_cookie_key: 'blahsomething',
    db: 'GoCourse_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        auth: {
            user: 'username',
            pass: 'password'
        }
    },
    google_client_id: '', // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com 
    google_client_secret: '', // e.g. _ASDFA%KFJWIASDFASD#FAD-
    google_callback_url: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'GoCourse' ,
    morgan: {
        mode: 'dev',
        options: {stream: accessLogStream}
    }
}

const production = {
    name: 'production',
    asset_path: process.env.GOCOURSE_ASSET_PATH,
    session_cookie_key: process.env.GOCOURSE_SESSION_COOKIE_KEY,
    db: 'GoCourse_production',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.GOCOURSE_GMAIL_USERNAME,
            pass: process.env.GOCOURSE_GMAIL_PASSWORD
        }
    },
    google_client_id: process.env.GOCOURSE_GOOGLE_CLIENT_ID, // e.g. asdfghjkkadhajsghjk.apps.googleusercontent.com
    google_client_secret: process.env.GOCOURSE_GOOGLE_CLIENT_SECRET , // e.g. _ASDFA%KFJWIASDFASD#FAD-
    google_callback_url: process.env.GOCOURSE_GOOGLE_CLIENT_CALLBACK_URL ,
    jwt_secret: process.env.GOCOURSE_JWT_SECRET,
    morgan: {
        mode: 'combined',
        options: {stream: accessLogStream}
    }

}

//module.exports = eval(process.env.WINGER_ENVIRONMENT) == undefined ? development : eval(process.env.WINGER_ENVIRONMENT) ;

module.exports = development;
