const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "UikQhCAC#mXFj39nL9YgyQ0btN-LywMSeqWnFkxq1sJGLsw00AF4",
MONGODB: process.env.MONGODB || "mongodb://mongo:tHyZZUCNnlNBghNxICBFNzMVPYyZPLyq@mongodb.railway.internal:27017",
};
